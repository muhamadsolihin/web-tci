<template>
  <section id="hero">
    <video autoplay muted loop id="bg-video">
      <source src="@/assets/images/video.mp4" type="video/mp4" />
    </video>
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex flex-column justify-content-center my-auto">
        <SectionNumberComponent
          class="mt-auto me-auto"
          :number="'01 / 11'"
          :section-name="'Home'"
          :color="'#ffffff'"
          :z-index="'99'"
        />
        <h1 class="hero-title mt-4">
          Generate <br />
          New Business <br />
          Ideas
        </h1>
        <div class="d-flex flex-row justify-content-start align-items-start w-75">
          <div class="shape-blue"></div>
          <p class="text-body text-white open-reg-24">
            We design and build solutions by connecting ideas and technology to solve
            problems and get new ideas to business lifecycle
          </p>
        </div>
      </div>
    </div>
    <img class="asset-1" src="@/assets/images/who-we-are/asset-1.png" alt="asset" />
    <img class="asset-3" src="@/assets/images/who-we-are/asset-3.png" alt="asset" />
  </section>
</template>

<script setup>
import BorderContainer from "@/components/BorderContainer.vue";
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
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
const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("hero");
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
#bg-video {
  position: fixed;
  background-size: cover;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}

#hero {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    z-index: 1;
    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 4.5rem;
      font-weight: 600;
      line-height: 83px;
      text-align: start;
      color: white;
      @media (max-width: 768px) {
        font-size: 40px !important;
        line-height: 49px;
        width: 379px;
      }
    }
    .text-body {
      color: white !important;
      width: 50%;
    }
    .shape-blue {
      width: 68px;
      height: 22px;
      background-color: #0c4aa9;
      margin-right: 20px;
      margin-top: 10px;
    }
  }
}
.asset-1 {
  position: absolute;
  bottom: -90px;
  left: 45%;
  @media (max-width: 768px) {
    display: none;
  }
}
.asset-3 {
  position: absolute;
  bottom: 0;
  right: 0;
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .text-body {
        font-size: 14px;
        margin-top: 5px;
        line-height: 30px;
        color: white !important;
        width: 75%;
      }
      .shape-blue {
        width: 38px;
        height: 22px;
        background-color: #0c4aa9;
        margin-right: 20px;
        margin-top: 10px;
      }
    }
  }
}
</style>
