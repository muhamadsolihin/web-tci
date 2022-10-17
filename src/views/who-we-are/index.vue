<template>
  <HeroSection />
  <AcceleratedSection />
  <DiversitySection />
  <DownloadAssetSection />
	<section class="four">
		<h1>Fourth Page</h1>
	</section>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AcceleratedSection from "./components/AcceleratedSection.vue";
import DiversitySection from "./components/DiversitySection.vue";
import DownloadAssetSection from "./components/DownloadAssetSection.vue";
</script>

<style lang="scss" scoped>
	section {
		min-height: 100vh;
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
