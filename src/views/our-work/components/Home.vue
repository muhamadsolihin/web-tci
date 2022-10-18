<template>
	<section id="hero">
		<div class="container-border">
			<img
				class="asset-2"
				src="@/assets/images/who-we-are/asset-2.png"
				alt=""
			/>
			<div class="container d-flex flex-column justify-content-center">
				<div class="d-flex flex-column align-items-start justify-content-start">
          <SectionNumberComponent class="mt-auto" :number="'01 / 10'" :section-name="'Our Work'" :color="'#ffffff'" />
          <h1 class="hero-title mt-4">
            We believe in the <br />
            creativity in software<br />
            innovation
          </h1>
          <div
            class="d-flex flex-row justify-content-start align-items-start w-50"
          >
            <div class="shape-blue"></div>
            <p class="albert-reg-27 text-white" style="width: 960px;">
              Our IT Solution is committed to give unparalleled quality,
              delighting our  customers while staying within the budget. We're
              best to deliver our clients <br/> real high quality products with
              unlimited features & options
            </p>
          </div>
				</div>
			</div>
		</div>
		<img
			class="asset-1"
			src="@/assets/images/who-we-are/asset-1.png"
			alt="asset"
		/>
		<img
			class="asset-3"
			src="@/assets/images/who-we-are/asset-3.png"
			alt="asset"
		/>
	</section>

</template>

<script setup>

// import Sample from './components/sample.vue';

import SectionNumberComponent from '@/components/SectionNumberComponent.vue';

</script>

<style lang="scss" scoped>
	#hero {
		background-image: url('@/assets/images/our-work/bg-ourwork.png');
		background-size: cover;
		height: 100vh;
		width: 100%;
		padding: 0 80px;
		position: relative;
    z-index: -1;
		.container-border {
			position: relative;
			width: 100%;
			padding: 0 80px;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
			.container {
				height: 100vh;
				padding: 0;
				border-left: 1px solid #b8bdc6;
				border-right: 1px solid #b8bdc6;
				.hero-title {
					font-family: 'Montserrat', sans-serif;
					font-size: 4.5rem;
					font-weight: 600;
					line-height: 83px;
					text-align: start;
          color: white;
				}
				.section-number {
					border: 2px solid #b8bdc6;
					border-radius: 25px;
					margin-right: auto;
					padding: 5px 10px;
					font-family: 'IBM Plex Mono', sans-serif;
					hr {
						width: 20px;
						border-top: 2px solid;
					}
				}
				.shape-blue {
					width: 68px;
					height: 22px;
					background-color: #0c4aa9;
					margin-right: 20px;
					margin-top: 10px;
				}
			}
			.asset-2 {
				position: absolute;
				left: -1px;
				top: 30%;
			}
		}
		.asset-1 {
			position: absolute;
			bottom: -90px;
			left: 45%;
		}
		.asset-3 {
			position: absolute;
			bottom: 0;
		}
	}
</style>





