<template>
	<section id="downloadable">
		<div class="container">
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<SectionNumberComponent
							class="mt-4"
							:number="'07 / 07'"
							:section-name="'Corporate Responsibility'"
							:color="'#000000'"
						/>
						<h2 class="mt-3">Downloadable Assets</h2>
						<p class="open-reg-24 mt-3">
							Get to know us better through our downloadable public information
							assets such as Brochure, Company Booklet, and Videos.
						</p>
						<CtaComponent :cta-text="'Media Gallery'" />
					</div>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
				>
					<img
						class="mx-auto"
						src="@/assets/images/who-we-are/photo-3.png"
						alt="photo"
						style="width: 85%; object-fit: contain"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
	import CtaComponent from '@/components/CtaComponent.vue';
</script>

<style lang="scss" scoped>
	#downloadable {
		background-color: white;
		z-index: 1;
		.container {
			padding: 80px;
			h2 {
				font-family: 'Montserrat', sans-serif;
				font-weight: 600;
				font-size: 3rem;
				line-height: 57px;
			}
		}
	}
</style>
