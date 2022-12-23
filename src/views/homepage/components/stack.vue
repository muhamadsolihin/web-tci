<template>
  <section id="howwedo">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container">
        <div class="d-flex flex-row align-items-center">
          <!-- <h2 class="hero-title">Technology Stack</h2>
          <SectionNumberComponent
            class="ms-auto"
            :number="'04 / 11'"
            :section-name="'Technology Stack'"
            :color="'#fff'"
          />-->
        </div>

        <div
          class="d-flex flex-row justify-content-start align-items-start w-50"
        ></div>
        <div class="row w-100 show-mobile">
          <div class="col-12 hide-on-mobile col-md-6">
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
            >
              <div class="col-2">
                <img :src="photoList[0]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[1]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[2]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[3]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[4]" alt="photo" class="img-stack" />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
            >
              <div class="col-2">
                <img :src="photoList[5]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[6]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img
                  :src="photoList[7]"
                  alt="photo"
                  class="img-stack"
                  style="width: 50%"
                />
              </div>
              <div class="col-2">
                <img :src="photoList[8]" alt="photo" class="img-stack" />
              </div>
              <div class="col-2">
                <img :src="photoList[9]" alt="photo" class="img-stack" />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
              style="margin-left: 7%"
            >
              <div class="col-4">
                <img
                  :src="photoList[10]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70%"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[11]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[12]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
              style="width: 80%; margin-left: 7%"
            >
              <div class="col">
                <img
                  :src="photoList[13]"
                  alt="photo"
                  class="img-stack"
                  style="width: 80% !important"
                />
              </div>
              <div class="col">
                <img
                  :src="photoList[14]"
                  alt="photo"
                  class="img-stack"
                  style="width: 80% !important"
                />
              </div>
              <div class="col">
                <img
                  :src="photoList[15]"
                  alt="photo"
                  class="img-stack"
                  style="width: 80% !important"
                />
              </div>
              <div class="col">
                <img
                  :src="photoList[16]"
                  alt="photo"
                  class="img-stack"
                  style="width: 100% !important"
                />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
              style="margin-left: 7%"
            >
              <div class="col-4">
                <img
                  :src="photoList[17]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70%"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[18]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[19]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
              style="margin-left: 7%"
            >
              <div class="col-4">
                <img
                  :src="photoList[20]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70%"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[21]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[22]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
            </div>
            <div
              class="d-flex flex-row mt-3 align-items-center justify-content-center"
              style="margin-left: 7%"
            >
              <div class="col-4">
                <img
                  :src="photoList[23]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70%"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[24]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
              <div class="col-4">
                <img
                  :src="photoList[25]"
                  alt="photo"
                  class="img-stack"
                  style="width: 70% !important"
                />
              </div>
            </div>
            <div class="row g-3 mt-4">
              <div class="col-md-7">
                <SectionNumberComponent
                  class="mx-auto"
                  :number="'04 / 11'"
                  :section-name="'Technology Stack'"
                  :color="'#000'"
                />
              </div>
            </div>
          </div>

          <!--end::Tabs-->
          <!--begin:Tab content-->
          <div class="col-md-6">
            <div class="title">
              <h2 class="hero-title">Technology Stack</h2>

              <div class="shape-blue"></div>
            </div>
            <div class="par">
              <p>
                We use the most compatible Technology Stack to ensure it evolves
                alongside our customer needs, making the process easier while
                driving our product to success.
              </p>
            </div>
            <div class="row mt-3 justify-content-center">
              <div class="col-12 col-md-12">
                <p class="sub-title">
                  Iwan Ridwan, <br />
                  Chief Technolgy Officer of Teknologi Cakra Internasional
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img
              class="hero-mobile"
              src="@/assets/images/img-stack/group-mobile.png"
            />
          </div>

          <div class="overlay"></div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <img
            class="batik-img"
            src="@/assets/images/img-stack/batik.png"
            style="
              float: right;
              justify-content: right;
              height: 195px;
              z-index: -2;
            "
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import Hammer from "hammerjs";
import { onMounted } from "vue";

import { ref } from "vue";

const photoList = ref([
  require("@/assets/images/img-stack/logo/1.svg"),
  require("@/assets/images/img-stack/logo/2.svg"),
  require("@/assets/images/img-stack/logo/3.svg"),
  require("@/assets/images/img-stack/logo/4.svg"),
  require("@/assets/images/img-stack/logo/5.svg"),
  require("@/assets/images/img-stack/logo/6.svg"),
  require("@/assets/images/img-stack/logo/7.svg"),
  require("@/assets/images/img-stack/logo/8.svg"),
  require("@/assets/images/img-stack/logo/9.svg"),
  require("@/assets/images/img-stack/logo/10.svg"),
  require("@/assets/images/img-stack/logo/11.svg"),
  require("@/assets/images/img-stack/logo/12.svg"),
  require("@/assets/images/img-stack/logo/13.svg"),
  require("@/assets/images/img-stack/logo/14.svg"),
  require("@/assets/images/img-stack/logo/15.svg"),
  require("@/assets/images/img-stack/logo/16.svg"),
  require("@/assets/images/img-stack/logo/17.svg"),
  require("@/assets/images/img-stack/logo/18.svg"),
  require("@/assets/images/img-stack/logo/19.svg"),
  require("@/assets/images/img-stack/logo/20.svg"),
  require("@/assets/images/img-stack/logo/21.svg"),
  require("@/assets/images/img-stack/logo/22.svg"),
  require("@/assets/images/img-stack/logo/23.svg"),
  require("@/assets/images/img-stack/logo/24.svg"),
  require("@/assets/images/img-stack/logo/25.svg"),
  require("@/assets/images/img-stack/logo/26.svg"),
]);

const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("howwedo");
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
#howwedo {
  background-color: white;
  height: 100vh;
  margin-top: -4em;
  z-index: 1;
  @media screen and (min-width: 1920px) {
    margin-top: 2em;
  }
  .container-border {
    position: relative;
    width: 100%;
    margin-top: 2%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    @media screen and (max-width: 768px) {
      padding: 0;
    }
  }
  .img-stack {
    width: 80%;
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

  .hero-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      margin-left: -5%;
      width: 300px !important;
      height: 447.96px !important;
    }
  }
  .container {
    margin-top: 2em;
    padding: 80px;
    .section-number {
      border: 2px solid #b8bdc6;
      border-radius: 25px;
      margin-right: auto;
      margin-top: 0;
      padding: 5px 10px;
      font-family: "IBM Plex Mono", sans-serif;
    }
    @media screen and (max-width: 768px) {
      border: 0;
    }
  }
  .hide-on-mobile {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .hide-on-mobile .hero-title {
    font-family: "Montserrat", sans-serif;
    font-size: 55px;
    font-weight: 700;
    line-height: 67px;
    text-align: start;
    color: black;
    @media screen and (max-width: 768px) {
      width: 325px !important;
    }
  }

  .sub-title {
    font-family: "Open Sans";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 30px;
    /* or 188% */

    text-align: right;

    color: #000000;
    @media screen and (max-width: 992px) {
      font-size: 12px;
      margin-top: -2em;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
      margin-top: -2em;
    }
  }
  .shape-blue {
    width: 68px;
    height: 22px;
    background-color: #0c4aa9;
    margin-right: 20px;
    margin-top: 17px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .asset-2 {
    position: absolute;
    left: 5%;
    top: 0;
    height: 711px;
  }
}
.show-mobile{
  margin-left: -15%;
  @media screen and (max-width:992px) {
  margin-left: 5% !important;
  }
}
.batik-img {
  margin-right: -48.7em;
  margin-top: -35% !important;
  display: none;
  @media screen and (min-width: 1920px) {
    margin-right: -60.7em;
    margin-top: -15% !important;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.sequence {
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  z-index: -10;
  background-color: var(--contrast-color);
}

.container_outer_img {
  margin-left: -3em;
  width: 100%;
  overflow: hidden;
}

.par {
  height: auto;
  overflow: hidden;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  margin-top: 24px;
  line-height: 32px;
  /* or 133% */

  color: #000000;
  @media screen and (max-width: 992px) {
    font-size: 13px;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
}

p {
  line-height: 28px;
  transform: translateY(300px);
  animation: slideUp 0.8s ease-in-out forwards 0.8s;
}

.title {
  overflow: hidden;
  height: auto;
}

h1 {
  font-size: 40px;
  color: var(--contrast-color);
  margin-bottom: 20px;
  transform: translateY(100px);
  animation: slideUp 0.8s ease forwards 0.5s;
}

@keyframes slideIn {
  0% {
    transform: translateX(500px) scale(0.2);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
}

.slideOut {
  animation-duration: 1s;
  animation-fill-mode: both;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.slideOut:hover,
.slideOut:focus,
.slideOut:hover {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.zoomInLeft {
  animation-name: zoomInLeft;
}
.zoomReverseIn {
  animation-name: zoomReverseIn;
}

/* zoomInLeft animation keyframes */
@keyframes zoomInLeft {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@keyframes zoomReverseIn {
  0% {
    opacity: 0;
    transform: scale(1.25);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

.animations-disabled {
  &,
  [data-animation] {
    animation: none !important;
    opacity: 1 !important;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes expand {
  0% {
    transform: translateX(1400px);
  }
  100% {
    transform: translateX(0px);
  }
}
@media screen and (max-width: 992px) {
  .hide-on-mobile {
    margin-left: -20%;
    width: 330px;
  }

  .stack-image1 {
    width: 40px !important;
    height: 50px !important;
  }

  .stack-image2 {
    width: 40px !important;
    height: 40px !important;
  }
  .stack-image3 {
    width: 50px !important;
    height: 30px !important;
  }
  .stack-image4 {
    width: 50px !important;
    height: 20px !important;
  }
  .stack-image5 {
    width: 100px !important;
    height: 30px !important;
  }

  .stack-image6 {
    width: 50px !important;
    height: 20px !important;
  }
  .stack-image7 {
    width: 70px !important;
    height: 20px !important;
  }
  .stack-image8 {
    display: none;
    width: 40px !important;
    height: 40px !important;
  }
  .stack-image9 {
    width: 70px !important;
    height: 20px !important;
  }

  .stack-image10 {
    width: 100px !important;
    height: 40px !important;
  }

  .stack-image11 {
    width: 70px !important;
    height: 35px !important;
  }
  .stack-image12 {
    width: 90px !important;
    height: 35px !important;
  }
  .stack-image13 {
    width: 130px !important;
    height: 35px !important;
  }
  .stack-image14 {
    width: 70px !important;
    height: 20px !important;
  }
  .stack-image15 {
    width: 70px !important;
    height: 20px !important;
  }
  .stack-image16 {
    width: 70px !important;
    height: 30px !important;
  }
  .stack-image17 {
    display: none;
  }
  .stack-image18 {
    width: 100px !important;
    height: 30px !important;
  }
  .stack-image19 {
    width: 120px !important;
    height: 40px !important;
  }
  .stack-image20 {
    width: 70px !important;
    height: 20px !important;
  }
  .stack-image21 {
    width: 70px !important;
    height: 30px !important;
  }
  .stack-image22 {
    width: 70px !important;
    height: 30px !important;
  }
  .stack-image23 {
    width: 70px !important;
    height: 30px !important;
  }
}
</style>
