<template>
	<div id="main">
		<h1>GSAP Fullscreen Slider</h1>
		<div class="content">
			<p>
				You can press <span>UP</span> <span>DOWN</span> on your keyboard or
				swipe up/down to navigate. Mouse Wheel works too.
			</p>
		</div>
		<div class="buttons">
			<button class="next" onclick="go(-1)"></button>
			<button class="prev" onclick="go(1)"></button>
		</div>
	</div>
</template>

<script>
	import { onMounted } from 'vue';
	import { gsap } from 'gsap';
	import { Power4 } from 'gsap';

	gsap.registerPlugin(Power4);

	const cols = 3;
	let parts = [];

	let images = [
		require('@/assets/images/images/bg1.jpg'),
		require('@/assets/images/images/bg2.jpg'),
		require('@/assets/images/images/bg3.jpg'),
	];
	let current = 0;
	let playing = false;

	let animOptions = {
		duration: 2.3,
		ease: Power4.easeInOut,
	};
	// Cursor Invent Target Touches
	let startY;
	let endY;
	let clicked = false;

	for (let i in images) {
		new Image().src = images[i];
	}

	function lerp(start, end, amount) {
		return (1 - amount) * start + amount * end;
	}

	function loop() {
		cursorX = lerp(cursorX, pageX, followSpeed);
		cursorY = lerp(cursorY, pageY, followSpeed);
		cursorF.style.top = cursorY - sizeF / 2 + 'px';
		cursorF.style.left = cursorX - sizeF / 2 + 'px';
		requestAnimationFrame(loop);
	}

	function go(dir) {
		if (!playing) {
			playing = true;
			if (current + dir < 0) current = images.length - 1;
			else if (current + dir >= images.length) current = 0;
			else current += dir;

			function up(part, next) {
				part.appendChild(next);
				gsap
					.to(part, { ...animOptions, y: -window.innerHeight })
					.then(function () {
						part.children[0].remove();
						gsap.to(part, { duration: 0, y: 0 });
					});
			}

			function down(part, next) {
				part.prepend(next);
				gsap.to(part, { duration: 0, y: -window.innerHeight });
				gsap.to(part, { ...animOptions, y: 0 }).then(function () {
					part.children[1].remove();
					playing = false;
				});
			}

			for (let p in parts) {
				let part = parts[p];
				let next = document.createElement('div');
				next.className = 'section';
				let img = document.createElement('img');
				img.src = images[current];
				next.appendChild(img);

				if ((p - Math.max(0, dir)) % 2) {
					down(part, next);
				} else {
					up(part, next);
				}
			}
		}
	}

	function mousedown(e) {
		gsap.to(cursor, { scale: 4.5 });
		gsap.to(cursorF, { scale: 0.4 });

		clicked = true;
		startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
	}

	function mouseup(e) {
		gsap.to(cursor, { scale: 1 });
		gsap.to(cursorF, { scale: 1 });

		endY = e.clientY || endY;
		if (clicked && startY && Math.abs(startY - endY) >= 40) {
			go(!Math.min(0, startY - endY) ? 1 : -1);
			clicked = false;
			startY = null;
			endY = null;
		}
	}

	//Mouse Wheel Scroll Transition
	let scrollTimeout;
	function wheel(e) {
		clearTimeout(scrollTimeout);
		setTimeout(function () {
			if (e.deltaY < -40) {
				go(-1);
			} else if (e.deltaY >= 40) {
				go(1);
			}
		});
	}
	window.addEventListener('mousewheel', wheel, false);
	window.addEventListener('wheel', wheel, false);

	onMounted(() => {
		const main = document.getElementById('main');

		for (let col = 0; col < cols; col++) {
			let part = document.createElement('div');
			part.className = 'part';
			let el = document.createElement('div');
			el.className = 'section';
			let img = document.createElement('img');
			img.src = images[current];
			el.appendChild(img);
			part.style.setProperty('--x', (-100 / cols) * col + 'vw');
			part.appendChild(el);
			main.appendChild(part);
			parts.push(part);
		}

		const cursor = document.createElement('div');
		cursor.className = 'cursor';

		const cursorF = document.createElement('div');
		cursorF.className = 'cursor-f';
		let cursorX = 0;
		let cursorY = 0;
		let pageX = 0;
		let pageY = 0;
		let size = 8;
		let sizeF = 36;
		let followSpeed = 0.16;

		document.body.appendChild(cursor);
		document.body.appendChild(cursorF);

		if ('ontouchstart' in window) {
			cursor.style.display = 'none';
			cursorF.style.display = 'none';
		}

		cursor.style.setProperty('--size', size + 'px');
		cursorF.style.setProperty('--size', sizeF + 'px');

		window.addEventListener('mousemove', function (e) {
			pageX = e.clientX;
			pageY = e.clientY;
			cursor.style.left = e.clientX - size / 2 + 'px';
			cursor.style.top = e.clientY - size / 2 + 'px';
		});

		loop();

		//Press Up & Down Keyboard Arrow Event
		window.addEventListener('keydown', function (e) {
			if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
				go(1);
			} else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
				go(-1);
			}
		});

		window.addEventListener('mousedown', mousedown, false);
		window.addEventListener('touchstart', mousedown, false);
		window.addEventListener(
			'touchmove',
			function (e) {
				if (clicked) {
					endY = e.touches[0].clientY || e.targetTouches[0].clientY;
				}
			},
			false
		);
		window.addEventListener('touchend', mouseup, false);
		window.addEventListener('mouseup', mouseup, false);

		window.addEventListener('mousewheel', wheel, false);
		window.addEventListener('wheel', wheel, false);
	});
</script>

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

	html,
	body {
		padding: 0;
		margin: 0;
		overflow: hidden;
		font-family: 'poppins', sans-serif;
	}

	* {
		box-sizing: border-box;
		outline: none;
		-webkit-tab-highlight-color: transparent;
		cursor: none;
		user-select: none;
		-webkit-user-drag: none;
	}

	#main {
		display: flex;
	}

	h1 {
		font-family: 'Abril Fatface', sans-serif;
		font-weight: normal;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 0;
		right: 0;
		margin: auto;
		z-index: 99;
		color: #fff;
		text-align: center;
		font-size: 3.6em;
		mix-blend-mode: overlay;
		pointer-events: none;
	}

	.content {
		width: 90%;
		color: #fff;
		position: absolute;
		bottom: 20px;
		text-align: center;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 99;
		font-size: 0.8em;
		text-transform: uppercase;
	}

	.content p {
		margin: 0.5em auto;
	}

	.content span {
		width: auto;
		height: auto;
		border: 1px solid #fff;
		display: inline-block;
		border-radius: 3px;
		font-size: 0.9em;
		vertical-align: text-top;
		padding: 0px 10px;
	}

	.content a {
		color: rgba(227, 227, 227, 0.78);
		text-decoration: none;
		border-bottom: 1px solid currentColor;
	}

	.content a:hover {
		padding-bottom: 1px;
	}

	.buttons {
		position: absolute;
		right: 25px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 99;
	}

	.buttons button {
		border: none;
		background-size: contain;
		background: url(@/assets/images/images/down-arrow.png) no-repeat;
		background-position: center;
		width: 10px;
		height: 30px;
		display: block;
		margin: 20px 0;
		padding: 0 15px;
		transition-duration: 0.6s;
	}

	.buttons button.next {
		transform: scaleY(-1);
	}

	.buttons button.next:active {
		transform: scaleY(-1) translateY(8px);
	}
	.buttons button.prev:active {
		transform: translateY(8px);
	}

	#main .part {
		flex: 1;
	}

	#main .part .section {
		width: 100%;
		height: 100vh;
		position: relative;
		overflow: hidden;
	}

	#main .part .section img {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		position: absolute;
		left: var(--x);
		pointer-events: none;
	}

	.cursor {
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
		z-index: 999;
		pointer-events: none;
		mix-blend-mode: difference;
	}

	.cursor-f {
		width: var(--size);
		height: var(--size);
		position: absolute;
		top: 0;
		left: 0;
		background-image: url('@/assets/images/images/cursor_round.png');
		background-size: cover;
		mix-blend-mode: difference;
		pointer-events: none;
		opacity: 0.5;
	}
</style>
