<template>
	<MenuComponent :theme="'dark'" :direction="direction" />
	<div id="our-gallery">
		<HeroSection />
		<GallerySection />
	</div>
</template>

<script setup>
	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/HeroSection.vue';
	import GallerySection from './components/GallerySection.vue';
</script>

<style lang="scss" scoped>
	#our-gallery {
		overflow-y: scroll !important;
	}
	section {
		min-height: 100vh;
		display: flex;
	}
</style>
