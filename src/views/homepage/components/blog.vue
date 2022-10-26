<template>
  <section id="howwedo">
		<div class="container-custom">
			<BorderContainer
				:theme="'light'"
				:sections-length="sectionsLength"
				:current-section="currentSection"
			/>
      <div class="row h-100">
        <div class="col-12 section-blog col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1">
          <div class="d-flex flex-column justify-content-center h-100">
						<SectionNumberComponent
							class="mt-4 me-auto d-none d-md-flex"
							:number="'09 / 11'"
							:section-name="'Our Blog'"
							:color="'#000000'"
              style="margin-left:3em"
						/>
          <p class="headblog">Our Blog</p>
          <p class="subhead">
            The success of our clients is a big part of who we are and how we
            believe in our values. Their journey becomes our story of passion
            and persistence.
          </p>
        </div></div>
        <div
            class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2"
          >
            <div class=" justify-content-center h-100">
              <el-carousel
          trigger="click"
          height="32.5em"
          width="37em"
          style="margin-top: 20%; margin-left: 4%"
        >
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
                </p>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
                </p>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";


import Hammer from "hammerjs";
import { onMounted } from "vue";

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


	const emit = defineEmits(['swipeUp', 'swipeDown']);

	onMounted(() => {
		var stage = document.getElementById('howwedo');
		var hammertime = new Hammer.Manager(stage);
		var Swipe = new Hammer.Swipe();
		hammertime.add(Swipe);
		hammertime.on('swipeup', function (ev) {
			emit('swipeUp');
		});
		hammertime.on('swipedown', function (ev) {
			emit('swipeDown');
		});
	});
</script>

<style lang="scss" scoped>
#howwedo {
	height: 100vh;
		width: 100%;
		padding: 0 140px;
		background-color: white;
		.container-custom {
			padding: 80px 0;
			height: 100vh;
			border-left: 1px solid #b8bdc6;
			border-right: 1px solid #b8bdc6;
  
  }

  .headblog {
    font-family: "montserrat";
    font-size: 3.4em;
    font-weight: 600;
    line-height: 67px;
    /* identical to box height */
    text-align: left;
    margin-left: 6%;
    margin-top: 2%;
    letter-spacing: -2.81895px;
  }
  .subhead {
    font-family: "open sans";
    font-weight: 400;
    font-size: 2.1em;
    text-align: justify;
    
    line-height: 50px;
    margin-left: 6%;
  }
  .card-title {
    font-family: "montserrat";
    font-size: 1.87em;
    font-weight: 600;
    text-align: justify;
    margin-left: -3%;
  }
  .card-text {
    font-family: "montserrat";
    text-align: justify;
    font-weight: 400;
    font-size: 23px;
    line-height: 31px;
    margin-left: -3%;
    color: #b8bdc6;
  }

  .open-reg-26 {
    @media screen and (max-width: 768px) {
      font-size: 20px !important;
    }
  }
}


.section-blog{
  margin-top: -3em !important;
}
</style>
