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
		<div class="row g-3 mt-3 mb-3">
		  <div class="col-12 col-md-6 col-lg-6 col-xl-6">
			<div class="row g-3 h-100">
			  <div class="col-12">
				<div class="hover hover-2 text-white rounded">
				  <img :src="photoList[0]" alt="photo" />
				  <div class="hover-overlay"></div>
				  <div class="hover-2-content px-5 py-4">
					<p class="hover-2-description mb-5">Photo Studio</p>
				  </div>
				</div>
			  </div>
			  <div class="col-6">
				<div class="hover-1 hover-2 text-white rounded">
				  <img :src="photoList[1]" alt="photo" />
				  <div class="hover-overlay"></div>
				  <div class="hover-2-content px-5 py-4">
					<p class="hover-2-description mb-5">
					  Employee Of <br />
					  The Month
					</p>
				  </div>
				</div>
			  </div>
			  <div class="col-6">
				<div class="hover-1 hover-2 text-white rounded">
				  <img :src="photoList[2]" alt="photo" />
				  <div class="hover-overlay"></div>
				  <div class="hover-2-content px-5 py-4">
					<p class="hover-2-description mb-5">
					  Prelaunch <br />
					  Makasi - POS
					</p>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		  <div class="col-6 col-md-3 col-lg-3 col-xl-3 ">
			<div class="hover-3 hover-2 text-white rounded">
			  <img :src="photoList[3]" alt="photo" />
			  <div class="hover-overlay"></div>
			  <div class="hover-2-content px-5 py-4">
				<p class="hover-2-description mb-5">
					 Kuliah Umum
					</p>
			  </div>
			</div>
		  </div>
		  <div class="col-6 col-md-3 col-lg-3 col-xl-3">
			<div class="row g-3 h-100">
			  <div class="col-12">
				<div class="hover-1 hover-2 text-white rounded">
				  <img :src="photoList[4]" alt="photo" />
				  <div class="hover-overlay"></div>
				  <div class="hover-2-content px-5 py-4">
					<p class="hover-2-description mb-5">
					  Video Shooting
					</p>
				  </div>
				</div>
			  </div>
			  <div class="col-12">
				<div class="hover-1 hover-2 text-white rounded">
				  <img :src="photoList[5]" alt="photo" />
				  <div class="hover-overlay"></div>
				  <div class="hover-2-content px-5 py-4">
					<p class="hover-2-description mb-5">
					  Employee Of <br />
					  The Month
					</p>
				  </div>
				</div>
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
	require("@/assets/images/our-gallery/photo-1.png"),
	require("@/assets/images/our-gallery/photo-2.png"),
	require("@/assets/images/galerry/pic3.png"),
	require("@/assets/images/our-gallery/photo-4.png"),
	require("@/assets/images/our-gallery/photo-5.png"),
	require("@/assets/images/galerry/pic6.png"),
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
	background-color: #263a5f;
	z-index: 1;
	// @media screen and (max-width: 992px) {
	// 	  margin-top: -6em;
	// 	  }
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
		  font-family: "Albert Sans";
		  font-style: normal;
		  font-weight: 600;
		  font-size: 35px;
		  line-height: 42px;
		  color: white;

		}
		.subtitle {
		  font-family: "Open Sans";
		  font-style: italic;
		  font-weight: 300;
		  font-size: 12px;
		  line-height: 30px;
		  color: white;
		}
		.text-body {
		  font-family: "Open Sans";
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
	  padding: 0 20px;
	  .container-custom {
		margin-top: -20px;
		margin-bottom: 1em;
		.hide-on-mobile {
		  display: none;
		}
	  }
	}
  }
  
  /*
  *
  * ==========================================
  * CUSTOM UTIL CLASSES
  * ==========================================
  *
  */
  
  /* DEMO GENERAL ============================== */
  .hover {
	overflow: hidden;
	position: relative;
	padding-bottom: 40%;
  }
  .hover-1 {
	overflow: hidden;
	position: relative;
	padding-bottom: 80%;
  }
  .hover-3 {
	overflow: hidden;
	position: relative;
	height: 100%;
  }
  
  .hover-overlay {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 90;
	transition: all 0.4s;
  }
  
  .hover img {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s;
  }
  .hover-1 img {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s;
  }
  .hover-3 img {
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s;
  }
  
  .hover-content {
	position: relative;
	z-index: 99;
  }
  
  /* DEMO 2 ============================== */
  .hover-2 .hover-overlay {
	background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  }
  
  .hover-2-title {
	position: absolute;
	// top: 50%;
	left: 0;
	text-align: center;
	width: 100%;
	z-index: 99;
	transition: all 0.3s;
  }
  
  .hover-2-description {
	width: 100%;
	position: absolute;
	bottom: 0;
	font-family: "Albert Sans";
	font-size: 1.5em;
	opacity: 0;
	font-weight: 600;
	left: 7%;
	text-align: left;
	z-index: 99;
	transition: all 0.3s;
  }
  
  .hover-2:hover .hover-2-title {
	transform: translateY(-1.5rem);
  }
  
  .hover-2:hover .hover-2-description {
	bottom: 0.5rem;
	opacity: 1;
  }
  
  .hover-2:hover .hover-overlay {
	background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
  }
  </style>
  