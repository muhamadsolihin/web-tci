<template>
	<section id="diversity">
		<div class="container">
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-row"
				>
					<img
						class="mx-auto"
						src="@/assets/images/who-we-are/photo-2.png"
						alt="photo"
						style="width: 85%; object-fit: contain"
					/>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<h2 class="mt-4">Diversity, Equity, Inclusion</h2>
						<p class="open-reg-24 mt-3">
							We believe that our colleagues have the rights to work in a safe place where they don’t need to worry about discrimination, bullying and harassment. With that in mind, we treat our colleagues based on their abilities and skills, regardless of their gender, race, age, physical condition, marital status, family circumstances or religious beliefs. We always make sure that our colleagues feel respected for who they are, because we support and uphold human rights principles.
						</p>
						<SectionNumberComponent
							class="mt-auto me-auto"
							:number="'06 / 07'"
							:section-name="'Diversity Equity Inclusion'"
							:color="'#000000'"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
</script>

<style lang="scss" scoped>
	#diversity {
		background-color: white;
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
