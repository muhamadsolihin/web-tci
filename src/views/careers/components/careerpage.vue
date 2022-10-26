<template>
	<section id="gallery">
		<div class="container-custom">
			<div class="row g-3">
				<div class="col-12 col-md-6 col-lg-6 col-xl-6">
					<div class="row g-3 h-100">
						<div class="col-12">
							<img :src="photoList[0]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[1]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[2]" alt="photo" />
						</div>
					</div>
				</div>
				<div class="col-6 col-md-3 col-lg-3 col-xl-3 pb-3">
					<img :src="photoList[3]" alt="photo" />
				</div>
				<div class="col-6 col-md-3 col-lg-3 col-xl-3">
					<div class="row g-3 h-100">
						<div class="col-12">
							<img :src="photoList[4]" alt="photo" />
						</div>
						<div class="col-12">
							<img :src="photoList[5]" alt="photo" />
						</div>
					</div>
				</div>
				<div class="col-6 hide-on-mobile">
					<div class="d-flex flex-row data-in-life h-100">
						<img :src="photoList[6]" alt="photo" style="width: 45%" />
						<div class="d-flex flex-column p-5">
							<h3 class="title">
								Pengaruh Data terhadap kehidupan sehari-hari
							</h3>
							<p class="subtitle">Oleh: Highlander Chris Subaron</p>
							<p class="text-body">
								Saat membicarakan soal data, apa yang pertama kali terlintas di
								pikiranmu? Deretan angka biner maupun rangkaian teknologi dengan
								berbagai istilah asing seringkali membuat
								<span class="pointer">(Read More)</span>
							</p>
						</div>
					</div>
				</div>
				<div class="col-6 hide-on-mobile">
					<div class="row g-3 h-100">
						<div class="col-12">
							<img :src="photoList[7]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[8]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[9]" alt="photo" />
						</div>
					</div>
				</div>
				<div class="col-3 hide-on-mobile">
					<div class="row g-3 h-100">
						<div class="col-12">
							<img :src="photoList[10]" alt="photo" />
						</div>
						<div class="col-12">
							<img :src="photoList[11]" alt="photo" />
						</div>
					</div>
				</div>
				<div class="col-6 hide-on-mobile">
					<div class="row g-3 h-100">
						<div class="col-12">
							<img :src="photoList[12]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[13]" alt="photo" />
						</div>
						<div class="col-6">
							<img :src="photoList[14]" alt="photo" />
						</div>
					</div>
				</div>
				<div class="col-3 pb-3 hide-on-mobile">
					<img :src="photoList[15]" alt="photo" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { ref } from 'vue';

	const photoList = ref([
		require('@/assets/images/our-gallery/photo-1.png'),
		require('@/assets/images/our-gallery/photo-2.png'),
		require('@/assets/images/our-gallery/photo-3.png'),
		require('@/assets/images/our-gallery/photo-4.png'),
		require('@/assets/images/our-gallery/photo-5.png'),
		require('@/assets/images/our-gallery/photo-6.png'),
		require('@/assets/images/our-gallery/photo-7.png'),
		require('@/assets/images/our-gallery/photo-8.png'),
		require('@/assets/images/our-gallery/photo-9.png'),
		require('@/assets/images/our-gallery/photo-10.png'),
		require('@/assets/images/our-gallery/photo-11.png'),
		require('@/assets/images/our-gallery/photo-12.png'),
		require('@/assets/images/our-gallery/photo-13.png'),
		require('@/assets/images/our-gallery/photo-14.png'),
		require('@/assets/images/our-gallery/photo-15.png'),
		require('@/assets/images/our-gallery/photo-16.png'),
	]);
</script>

<style lang="scss" scoped>
	#gallery {
		width: 100%;
		padding: 50px 140px;
		.container-custom {

			z-index: 1;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
			.data-in-life {
				width: 100%;
				height: 100%;
				background: linear-gradient(136.6deg, #e78448 23.03%, #e09b3d 100%);
				box-shadow: 0px 10px 100px rgba(231, 132, 72, 0.45);
				.title {
					font-family: 'Albert Sans';
					font-style: normal;
					font-weight: 600;
					font-size: 35px;
					line-height: 42px;
					color: white;
				}
				.subtitle {
					font-family: 'Open Sans';
					font-style: italic;
					font-weight: 300;
					font-size: 12px;
					line-height: 30px;
					color: white;
				}
				.text-body {
					font-family: 'Open Sans';
					font-style: normal;
					font-weight: 400;
					font-size: 16px;
					line-height: 30px;
					color: white !important;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		#gallery {
			padding: 0 30px;
			.container-custom {
				margin-top: -180px;
				.hide-on-mobile {
					display: none;
				}
			}
		}
	}
</style>
