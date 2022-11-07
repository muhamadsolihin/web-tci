<template>
  <section id="gallery">
    <div id="container-custom" class="container-custom w-100">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex flex-row flex-wrap align-items-center w-100">
        <h1 class="title mb-0 text-white">Our Gallery</h1>
        <SectionNumberComponent
          class="ms-auto d-none d-md-flex"
          :number="'08 / 11'"
          :section-name="'Our Gallery'"
          :color="'#fff'"
        />
      </div>
			<div class="row  g-3 mt-3 mb-3">
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
			
			</div>
		</div>
	</section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hammer from "hammerjs";
  import BorderContainer from "@/components/BorderContainer.vue";
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";

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

	const photoList = ref([
		require('@/assets/images/our-gallery/photo-1.png'),
		require('@/assets/images/our-gallery/photo-2.png'),
		require('@/assets/images/galerry/pic3.png'),
		require('@/assets/images/our-gallery/photo-4.png'),
		require('@/assets/images/our-gallery/photo-5.png'),
		require('@/assets/images/galerry/pic6.png'),
	
	]);
  const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("gallery");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });
});
</script>

<style lang="scss" scoped>
	#gallery {
    height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: #263A5F;
  z-index: 1;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
    }
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
