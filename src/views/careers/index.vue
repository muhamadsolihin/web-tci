<template>
	<MenuComponent :theme="'dark'" :direction="'down'" @goMenu="scrollToTop" />
	<div id="Careers">
		<HeroSection />
		
		<Culture
			:sections-length="4"
			:current-section="3"
      @toTop="scrollToTop"
		/>
		<Careerpage />
		<SearchJob
			:sections-length="4"
			:current-section="3"
      @toTop="scrollToTop"
		/>
		<FooterComponent
			:sections-length="4"
			:current-section="3"
      @toTop="scrollToTop"
		/>
	</div>
</template>

<script setup>
	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/sample.vue';
	import Careerpage from './components/providing.vue';
	import Culture from './components/culture.vue';
	import SearchJob from './components/searchJob.vue';
  import FooterComponent from '@/components/FooterComponent.vue';

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
