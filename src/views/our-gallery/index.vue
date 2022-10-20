<template>
	<MenuComponent :theme="'dark'" :direction="direction" />
	<HeroSection />
</template>

<script setup>
	import MenuComponent from '@/components/MenuComponent.vue';
	import HeroSection from './components/HeroSection.vue';
</script>

<style lang="scss" scoped>
	section {
		min-height: 100vh;
		display: flex;
	}
</style>
