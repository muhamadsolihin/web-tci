<template>
	<section id="diversity">
		<div class="container-custom">
			<BorderContainer
				:theme="'light'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-row"
				>
					<img
						class="mx-auto diversity-image"
						src="@/assets/images/who-we-are/photo-2.png"
						alt="photo"
					/>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<h2 class="mt-4 title">Diversity, Equity, Inclusion</h2>
						<p class="open-reg-24 mt-3 text-body">
							We believe that our colleagues have the rights to work in a safe place where they don’t need to worry about discrimination, bullying and harassment. With that in mind, we treat our colleagues based on their abilities and skills, regardless of their gender, race, age, physical condition, marital status, family circumstances or religious beliefs. We always make sure that our colleagues feel respected for who they are, because we support and uphold human rights principles.
						</p>
						<SectionNumberComponent
							class="mt-auto me-auto d-none d-md-flex"
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
	import { defineProps } from 'vue';

	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
	import BorderContainer from '@/components/BorderContainer.vue';

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
	#diversity {
		background-color: white;
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		.container-custom {
      padding: 80px 0;
			height: 100vh;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
        .diversity-image {
          width: 85%; object-fit: contain;
        }
			.title {
				font-family: 'Montserrat', sans-serif;
				font-weight: 600;
				font-size: 3rem;
				line-height: 57px;
			}
		}
	}
	@media screen and (max-width: 768px) {
		#diversity {
			padding: 0 30px;
			.container-custom {
				height: 100vh;
				padding: 80px 0;
				border: none;
        .diversity-image {
          width: 75%; object-fit: contain;
        }
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
