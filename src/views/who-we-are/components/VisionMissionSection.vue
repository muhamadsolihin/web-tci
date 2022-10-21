<template>
	<section id="vision">
		<div class="container-custom">
			<BorderContainer
				:theme="'light'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
			<div class="d-flex flex-row align-items-center flex-wrap">
				<h2>Our Vision & Mission</h2>
				<SectionNumberComponent
					class="ms-auto d-none d-md-flex"
					:number="'04 / 07'"
					:section-name="'Our Vision & Mission'"
					:color="'#000000'"
				/>
			</div>
			<div
				class="d-flex flex-row align-items-start justify-content-between flex-wrap mt-4"
			>
				<div
					class="d-flex flex-column mt-3 order-2 order-md-1 order-lg-1 order-xl-1"
				>
					<h3
						class="monts-bold-35"
						:class="imageHover ? 'title-smaller' : 'title-bigger'"
					>
						Vision
					</h3>
					<ul>
						<li
							class="open-reg-24"
							:class="imageHover ? 'text-smaller' : 'text-bigger'"
						>
							Connecting human & technology as art
						</li>
						<li
							class="open-reg-24"
							:class="imageHover ? 'text-smaller' : 'text-bigger'"
						>
							Create opportunity for everyone
						</li>
					</ul>
				</div>
				<img
					class="vision-image order-1 order-md-2 order-lg-2 order-xl-2"
					:class="imageHover ? 'image-hover' : 'image-unhover'"
					src="@/assets/images/who-we-are/photo-4.png"
					alt="photo"
					@mouseenter="imageHover = true"
					@mouseleave="imageHover = false"
				/>
			</div>
			<div
				class="mission d-flex flex-row align-items-end justify-content-between flex-wrap"
			>
				<img
					class="mission-image"
					:class="imageHover ? 'image-hover' : 'image-unhover'"
					src="@/assets/images/who-we-are/photo-5.png"
					alt="photo"
					@mouseenter="imageHover = true"
					@mouseleave="imageHover = false"
				/>
				<div class="d-flex flex-column text-mission">
					<h3
						class="monts-bold-35"
						:class="imageHover ? 'title-smaller' : 'title-bigger'"
					>
						Mission
					</h3>
					<ul>
						<li
							class="open-reg-24"
							:class="imageHover ? 'text-smaller' : 'text-bigger'"
						>
							To be the professional IT company that inspires creativity,
							enables innovation, and realize success for our customers.
						</li>
					</ul>
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
	#vision {
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		background-color: white;
		.container-custom {
			padding: 80px 0;
			height: 100vh;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
			h2 {
				font-family: 'Montserrat', sans-serif;
				font-weight: 600;
				font-size: 3rem;
				line-height: 57px;
			}
			.mission {
				margin-top: -150px;
				.text-mission {
					margin-left: 40px;
					width: 50%;
				}
				.mission-image {
					width: 45%;
					margin: 0 auto 0 0;
				}
			}
			.vision-image {
				width: 45%;
				margin: 0 0 0 auto;
			}
		}
	}

	@media screen and (max-width: 768px) {
		#vision {
			padding: 0 30px;
			.container-custom {
				height: 100vh;
				padding: 80px 0;
				border: none;
				h2 {
					font-size: 20px;
					font-weight: 600;
					line-height: 20px;
				}
				h3 {
					font-size: 18px;
					font-weight: 600;
					line-height: 20px;
				}
				li {
					font-size: 14px;
					margin-top: 5px;
					line-height: 30px;
				}
				.mission {
					margin: 20px 0;
					.text-mission {
						margin-top: 20px;
						margin-left: 0;
						width: 100%;
					}
					.mission-image {
						width: 70%;
						margin: 0 auto;
					}
				}
				.vision-image {
					width: 70%;
					margin: 0 auto;
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
