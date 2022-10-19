<template>
	<MenuComponent
		:theme="currentSection == 1 ? 'dark' : 'light'"
		:direction="direction"
	/>
	<transition :name="direction" @after-enter="listening = true" mode="out-in">
		<HeroSection :sections-length="sections.length" :current-section="currentSection" v-if="currentSection == 1" />
		<AcceleratedSection :sections-length="sections.length" :current-section="currentSection" v-else-if="currentSection == 2" />
		<VisionMissionSection :sections-length="sections.length" :current-section="currentSection" v-else-if="currentSection == 3" />
		<DiversitySection :sections-length="sections.length" :current-section="currentSection" v-else-if="currentSection == 4" />
		<DownloadAssetSection v-else-if="currentSection == 5" />
	</transition>
</template>

<script setup>
	import { onMounted, ref } from 'vue';

	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/HeroSection.vue';
	import AcceleratedSection from './components/AcceleratedSection.vue';
	import VisionMissionSection from './components/VisionMissionSection.vue';
	import DiversitySection from './components/DiversitySection.vue';
	import DownloadAssetSection from './components/DownloadAssetSection.vue';

	const sections = ref([1, 2, 3, 4, 5, 6]);
	const currentSection = ref(1);
	const listening = ref(false);
	const direction = ref('up');

	function go(dir) {
		listening.value = false;

		if (currentSection.value + dir < 1) {
			currentSection.value = 1;
			listening.value = true;
		} else if (currentSection.value + dir >= sections.value.length) {
			currentSection.value = sections.value.length - 1;
			listening.value = true;
		} else {
			currentSection.value += dir;
		}
	}

	//Mouse Wheel Scroll Transition
	let scrollTimeout;
	function wheel(e) {
		if (!listening.value) return false;
		clearTimeout(scrollTimeout);
		setTimeout(function () {
			if (e.deltaY < -40) {
				direction.value = 'up';
				go(-1);
			} else if (e.deltaY >= 40) {
				direction.value = 'down';
				go(1);
			}
		});
	}

	// Cursor Invent Target Touches
	let startY;
	let endY;
	let clicked = false;

	function mousedown(e) {
		clicked = true;
		startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
	}

	function mouseup(e) {
		endY = e.clientY || endY;
		if (clicked && startY && Math.abs(startY - endY) >= 40) {
      direction.value = !Math.min(0, startY - endY) ? 'down' : 'up';
			go(!Math.min(0, startY - endY) ? 1 : -1);
			clicked = false;
			startY = null;
			endY = null;
		}
	}

	onMounted(() => {
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

		//Press Up & Down Keyboard Arrow Event
		window.addEventListener('keydown', function (e) {
			if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
				direction.value = 'down';
				go(1);
			} else if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
				direction.value = 'up';
				go(-1);
			}
		});

		listening.value = true;
	});
</script>

<style lang="scss" scoped>
	section {
		min-height: 100vh;
		display: flex;
	}
</style>
