<template>
	<section id="accelerated">
		<div class="container-custom">
			<BorderContainer
				:theme="'light'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
			<div class="row h-100">
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
				>
					<div class="d-flex flex-column justify-content-center h-100">
						<h2
							class="title mt-4"
							:class="imageHover ? 'title-smaller' : 'title-bigger'"
						>
							Accelerated ways of working
						</h2>
						<p
							class="text-body open-reg-24 mt-3"
							:class="imageHover ? 'text-smaller' : 'text-bigger'"
						>
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
						:class="imageHover ? 'image-hover' : 'image-unhover'"
						src="@/assets/images/who-we-are/photo-1.png"
						alt="photo"
						style="width: 100%; object-fit: contain"
						@mouseenter="imageHover = true"
						@mouseleave="imageHover = false"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { defineProps, ref } from 'vue';

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

	const imageHover = ref(false);
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

			.image-hover,
			.image-unhover,
			.title-smaller,
			.title-bigger,
			.text-smaller,
			.text-bigger {
				animation: 0s;
			}
		}
	}

	.image-hover {
		animation: popup 1s ease-out;
		transform: scale(1.1);
	}
	.image-unhover {
		animation: popdown 1s ease-out;
		transform: scale(1);
	}
	@keyframes popup {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	}
	@keyframes popdown {
		from {
			transform: scale(1.1);
		}
		to {
			transform: scale(1);
		}
	}

	.title-smaller {
		animation: smaller 1s;
		font-size: 45px;
	}
	@keyframes smaller {
		from {
			font-size: 50px;
		}
		to {
			font-size: 45px;
		}
	}
	.title-bigger {
		animation: bigger 1s;
		font-size: 50px;
	}
	@keyframes bigger {
		from {
			font-size: 45px;
		}
		to {
			font-size: 50px;
		}
	}

	.text-smaller {
		animation: textsmaller 1s;
		font-size: 21px;
	}
	@keyframes textsmaller {
		from {
			font-size: 24px;
		}
		to {
			font-size: 21px;
		}
	}
	.text-bigger {
		animation: textbigger 1s;
		font-size: 24px;
	}
	@keyframes textbigger {
		from {
			font-size: 21px;
		}
		to {
			font-size: 24px;
		}
	}
</style>
