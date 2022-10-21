<template>
	<section id="downloadable">
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
						<SectionNumberComponent
							class="mt-4 me-auto d-none d-md-flex"
							:number="'07 / 07'"
							:section-name="'Corporate Responsibility'"
							:color="'#000000'"
						/>
						<h2 class="mt-3 title"
						:class="imageHover ? 'title-smaller' : 'title-bigger'">Downloadable Assets</h2>
						<p class="open-reg-24 mt-3 text-body"
							:class="imageHover ? 'text-smaller' : 'text-bigger'">
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
					:class="imageHover ? 'image-hover' : 'image-unhover'"
						src="@/assets/images/who-we-are/photo-3.png"
						alt="photo"
						style="width: 85%; object-fit: contain"
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
	import CtaComponent from '@/components/CtaComponent.vue';
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

	const imageHover = ref(false);
</script>

<style lang="scss" scoped>
	#downloadable {
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		background-color: white;
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
		#downloadable {
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
		font-size: 30px;
	}
	@keyframes smaller {
		from {
			font-size: 35px;
		}
		to {
			font-size: 30px;
		}
	}
	.title-bigger {
		animation: bigger 1s;
		font-size: 35px;
	}
	@keyframes bigger {
		from {
			font-size: 30px;
		}
		to {
			font-size: 35px;
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
