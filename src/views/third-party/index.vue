<template>
		<MenuComponent     :theme="currentSection == 1 ? 'dark' : 'light'"
    :direction="direction"/>
	<div id="our-works">
		<HeroSection />
		<Ourwork />
		<!-- <FooterComponent
			:sections-length="4"
			:current-section="3"
      @toTop="scrollToTop"
		/> -->
	</div>
</template>

<script setup>
	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/herosection.vue';
	import Ourwork from './components/bodysection.vue';
  import FooterComponent from "@/components/FooterComponent.vue";

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
</script>

<style lang="scss" scoped>
	section {
		min-height: 100vh;
		display: flex;
	}
</style>
