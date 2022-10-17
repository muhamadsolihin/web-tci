<template>
  <HeroSection />
  <AcceleratedSection />
	<section class="three">
		<h1>Third Page</h1>
	</section>
	<section class="four">
		<h1>Fourth Page</h1>
	</section>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AcceleratedSection from "./components/AcceleratedSection.vue";
</script>

<style lang="scss" scoped>
	section {
		height: 100vh;
		display: flex;
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
