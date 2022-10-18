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

<script>const sections = document.querySelectorAll("section");
const images = document.querySelectorAll(".bg");
const headings = gsap.utils.toArray(".section-heading");
const outerWrappers = gsap.utils.toArray(".outer");
const innerWrappers = gsap.utils.toArray(".inner");

document.addEventListener("wheel", handleWheel);
document.addEventListener("touchstart", handleTouchStart);
document.addEventListener("touchmove", handleTouchMove);
document.addEventListener("touchend", handleTouchEnd);

let listening = false,
  direction = "down",
  current,
  next = 0;

const touch = {
  startX: 0,
  startY: 0,
  dx: 0,
  dy: 0,
  startTime: 0,
  dt: 0
};

const tlDefaults = {
  ease: "slow.inOut",
  duration: 1.25
};

const splitHeadings = headings.map((heading) => {
  return new SplitText(heading, {
    type: "chars, words, lines",
    linesClass: "clip-text"
  });
});

function revealSectionHeading() {
  return gsap.to(splitHeadings[next].chars, {
    autoAlpha: 1,
    yPercent: 0,
    duration: 1,
    ease: "power2",
    stagger: {
      each: 0.02,
      from: "random"
    }
  });
}

gsap.set(outerWrappers, { yPercent: 100 });
gsap.set(innerWrappers, { yPercent: -100 });

// Slides a section in on scroll down
function slideIn() {
  // The first time this function runs, current is undefined
  if (current !== undefined) gsap.set(sections[current], { zIndex: 0 });

  gsap.set(sections[next], { autoAlpha: 1, zIndex: 1 });
  gsap.set(images[next], { yPercent: 0 });
  gsap.set(splitHeadings[next].chars, { autoAlpha: 0, yPercent: 100 });

  const tl = gsap
    .timeline({
      paused: true,
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        current = next;
      }
    })
    .to([outerWrappers[next], innerWrappers[next]], { yPercent: 0 }, 0)
    .from(images[next], { yPercent: 15 }, 0)
    .add(revealSectionHeading(), 0);

  if (current !== undefined) {
    tl.add(
      gsap.to(images[current], {
        yPercent: -15,
        ...tlDefaults
      }),
      0
    ).add(
      gsap
        .timeline()
        .set(outerWrappers[current], { yPercent: 100 })
        .set(innerWrappers[current], { yPercent: -100 })
        .set(images[current], { yPercent: 0 })
        .set(sections[current], { autoAlpha: 0 })
    );
  }

  tl.play(0);
}

// Slides a section out on scroll up
function slideOut() {
  gsap.set(sections[current], { zIndex: 1 });
  gsap.set(sections[next], { autoAlpha: 1, zIndex: 0 });
  gsap.set(splitHeadings[next].chars, { autoAlpha: 0, yPercent: 100 });
  gsap.set([outerWrappers[next], innerWrappers[next]], { yPercent: 0 });
  gsap.set(images[next], { yPercent: 0 });

  gsap
    .timeline({
      defaults: tlDefaults,
      onComplete: () => {
        listening = true;
        current = next;
      }
    })
    .to(outerWrappers[current], { yPercent: 100 }, 0)
    .to(innerWrappers[current], { yPercent: -100 }, 0)
    .to(images[current], { yPercent: 15 }, 0)
    .from(images[next], { yPercent: -15 }, 0)
    .add(revealSectionHeading(), ">-1")
    .set(images[current], { yPercent: 0 });
}

function handleDirection() {
  listening = false;

  if (direction === "down") {
    next = current + 1;
    if (next >= sections.length) next = 0;
    slideIn();
  }

  if (direction === "up") {
    next = current - 1;
    if (next < 0) next = sections.length - 1;
    slideOut();
  }
}

function handleWheel(e) {
  if (!listening) return;
  direction = e.wheelDeltaY < 0 ? "down" : "up";
  handleDirection();
}

function handleTouchStart(e) {
  if (!listening) return;
  const t = e.changedTouches[0];
  touch.startX = t.pageX;
  touch.startY = t.pageY;
}

function handleTouchMove(e) {
  if (!listening) return;
  e.preventDefault();
}

function handleTouchEnd(e) {
  if (!listening) return;
  const t = e.changedTouches[0];
  touch.dx = t.pageX - touch.startX;
  touch.dy = t.pageY - touch.startY;
  if (touch.dy > 10) direction = "up";
  if (touch.dy < -10) direction = "down";
  handleDirection();
}

slideIn();

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
