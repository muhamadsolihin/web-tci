<template>
	<section id="footer">
		<div class="container-custom">
			<BorderContainer
				:theme="'light'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
			<div class="row mx-1 h-100">
				<div class="col-12 py-5 discover">
					<h1 class="hashtag monts-bold-55">
						<span>#</span>Discover You Excellent
					</h1>
					<h1 class="title">
						Let us take you further<br />than you’ve ever been
					</h1>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end location"
				>
					<p class="ibm-semibold-16">Location</p>
					<p class="open-reg-12 text-regent-grey">
						PT. Teknologi Cakra Internasional<br />Jl. Batununggal Indah IV
						No.45, Mengger,<br />Kec. Bandung Kidul, Kota Bandung, Jawa Barat<br />40267
					</p>
				</div>
				<div
					class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end find-us"
				>
					<p class="ibm-semibold-16">Find Us</p>
					<p class="open-reg-12 text-regent-grey pointer">Facebook</p>
					<p class="open-reg-12 text-regent-grey pointer">Instagram</p>
					<p class="open-reg-12 text-regent-grey pointer">Linkedin</p>
					<div class="to-top d-flex flex-column pointer" @click="emit('toTop')">
						<img class="m-auto" src="@/assets/images/icons/arrow-up.svg" />
					</div>
				</div>
			</div>
		</div>
		<img class="tci-logo" src="@/assets/images/tci-logo.png" />
		<img class="asset-3" src="@/assets/images/asset-pattern.png" alt="asset" />
	</section>
</template>

<script setup>
	import { defineProps, defineEmits } from 'vue';

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

	const emit = defineEmits(['toTop']);
</script>

<style lang="scss">
	#footer {
		height: 100vh;
		width: 100%;
		padding: 0 140px;
		background-color: white;
    position: relative;
		.container-custom {
			padding: 80px 0 0 0;
			height: 100%;
			width: 100%;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
			.hashtag {
				span {
					color: #e78448;
				}
			}
			.title {
				font-family: 'Montserrat', sans-serif;
				font-weight: 500;
				font-size: 50px;
				line-height: 57px;
			}
			.discover {
				border-bottom: 1px solid #b8bdc6;
			}
			.location {
				padding: 0 40px;
				height: 50%;
			}
			.find-us {
				padding: 0 40px;
				height: 50%;
				border-left: 1px solid #b8bdc6;
				position: relative;
				.to-top {
					position: absolute;
					bottom: 0;
					right: -5px;
					height: 200px;
					width: 200px;
					border: 1px solid #b8bdc6;
					z-index: 1;
				}
			}
		}
		.tci-logo {
			position: absolute;
			height: 40%;
			top: 50%;
			right: 0;
			transform: translate(0, -50%);
		}
		.asset-3 {
			position: absolute;
			bottom: 0;
			right: 0;
			z-index: 0;
		}
	}

	@media screen and (max-width: 768px) {
		#footer {
			padding: 0 30px;
			.container-custom {
				height: 100vh;
				padding: 80px 0;
				border: none;
				.hashtag {
					font-size: 24px;
					line-height: 37px;
				}
				.title {
					font-size: 20px;
					line-height: 27px;
				}
				.discover {
					border-bottom: none;
				}
				.location {
					padding: 0;
					height: auto;
				}
				.find-us {
					padding: 0;
					border-left: none;
					height: auto;
					.to-top {
						height: 60px;
						width: 60px;
						img {
							height: 30px;
						}
					}
				}
			}
			.tci-logo {
				height: 20%;
				top: 30%;
				transform: translate(0, -30%);
			}
		}
	}
</style>
