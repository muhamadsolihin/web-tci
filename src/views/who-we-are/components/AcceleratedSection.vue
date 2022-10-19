<template>
	<section id="accelerated">
		<div class="container-custom">
      <BorderContainer :theme="'light'" :sections-length="sectionsLength" :current-section="currentSection" />
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<h2 class="title mt-4">Accelerated ways of working</h2>
						<p class="text-body open-reg-24 mt-3">
							We combine Lean Startup principles, Skunkworks practices, and
							Agile methods. Working this way allows our high-speed teams to
							break off from unimaginative routines and achieve disruptive
							innovation autonomously, quickly, and on budget.
						</p>
						<SectionNumberComponent
							class="mt-auto me-auto"
							:number="'02 / 07'"
							:section-name="'How We Do It'"
							:color="'#000000'"
						/>
					</div>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
				>
					<img
						class="mx-auto"
						src="@/assets/images/who-we-are/photo-1.png"
						alt="photo"
						style="width: 100%; object-fit: contain"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { defineProps } from 'vue';

	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
  import BorderContainer from "@/components/BorderContainer.vue";

	const props = defineProps({
		sectionsLength: {
			type: Number,
			require: true,
		},
		currentSection: {
			type: Number,
			require: true,
		},
	});
</script>

<style lang="scss" scoped>
	#accelerated {
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		background-color: white;
		z-index: 1;
		.container-custom {
      padding: 80px 0;
			height: 100vh;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
			.title {
				font-family: 'Montserrat', sans-serif;
				font-weight: 600;
				font-size: 3rem;
				line-height: 57px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		#accelerated {
			padding: 0 30px;
			.container-custom {
				height: 100vh;
				padding: 80px 0;
				border: none;
				.title {
					font-size: 20px;
					font-weight: 600;
					line-height: 20px;
				}
        .text-body {
					font-size: 12px;
          margin-top: 5px;
					line-height: 30px;
        }
			}
		}
	}
</style>
