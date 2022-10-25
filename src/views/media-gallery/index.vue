<template>
	<MenuComponent :theme="'dark'" :direction="'down'" @goMenu="scrollToTop" />
	<div id="our-gallery">
		<HeroSection />
		<!-- <ComproDownload /> -->
        <DownloadProduct />
        <DownloadVideo />
		<FooterComponent
			:sections-length="4"
			:current-section="3"
      @toTop="scrollToTop"
		/>
	</div>
</template>

<script setup>
	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/heroSection.vue';
	import ComproDownload from './components/downloadfile.vue';
    import DownloadProduct from './components/downloadproduct.vue';
    import DownloadVideo from './components/downloadVideo.vue';
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
