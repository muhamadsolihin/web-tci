<template>
	<section id="accelerated">
		<div class="container">
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<h2 class="mt-4">Accelerated<br />ways of working</h2>
						<p class="open-reg-24 mt-3">
							We combine Lean Startup principles, Skunkworks practices, and
							Agile methods. Working this way allows our high-speed teams to
							break off from unimaginative routines and achieve disruptive
							innovation autonomously, quickly, and on budget.
						</p>
						<SectionNumberComponent
							class="mt-auto"
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
						style="width: 85%; object-fit: contain"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
</script>

<style lang="scss" scoped>
	#accelerated {
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
