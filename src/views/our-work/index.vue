<template>
	  <MenuComponent
    :theme="currentSection == 1 ? 'dark' : 'light'"
    :direction="direction"
  />
	<transition :name="direction" @after-enter="listening = true" mode="out-in">
		<Homepage v-if="currentSection == 1" />
		<Ourwork v-else-if="currentSection == 2" />
		<FooterComponent
			:sections-length="sections.length"
			:current-section="currentSection"
      @toTop="currentSection = 1"
			v-else-if="currentSection == 3"
		/>
	</transition>
	
</template>

<script setup>
	import { onMounted, ref } from 'vue';

	import Homepage from "./components/Home.vue";
	import Ourwork from './components/ourwork.vue';
	import MenuComponent from '@/components/MenuComponent.vue';
	import FooterComponent from "@/components/FooterComponent.vue";


	const sections = ref([1, 2, 3, 4, 5, 6, 7]);
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

//   function swipeUp() {
// 			direction.value = 'down';
// 			go(1);
//   }

//   function swipeDown() {
// 			direction.value = 'up';
// 			go(-1);
//   }

	onMounted(() => {
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