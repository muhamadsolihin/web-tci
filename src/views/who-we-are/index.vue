<template>
  <HeroSection />
	<section class="two">
		<h1>Second Page</h1>
	</section>
	<section class="three">
		<h1>Third Page</h1>
	</section>
	<section class="four">
		<h1>Fourth Page</h1>
	</section>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
</script>

<style lang="scss" scoped>
	section {
		height: 100vh;
		display: flex;
		color: white;
		scroll-snap-align: start;
		scroll-behavior: smooth;
	}
	
	.two {
		background: rgb(36, 164, 138);
	}
	.three {
		background: rgb(67, 91, 175);
	}
	.four {
		background: lightsalmon;
	}
</style>
