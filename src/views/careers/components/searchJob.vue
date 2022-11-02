<template>
  <section id="footer">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="row hide-mobile mx-1">
        <div class="col-12 py-5 discover">
          <h1 class="hashtag title">
            path path into Meaningful work starts here
          </h1>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end location"
        >
          <p class="sub-title">
            We know that everyone has a lot of different skills and field
            interests. If you are a passionate person who is ready to share your
            vision and show the world what you got, no matter where you came
            from, we have a spot for you. Find the most suitable job here.
          </p>
          <img class="assets-3" src="@/assets/images/careers/search.svg" />
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end find-us"
        >
          <img class="asset-high" src="@/assets/images/careers/high.png" />
        </div>
      </div>

      <div class="row show-mobile mx-1 h-50">
        <div class="col-12 py-5 discover">
          <h1 class="hashtag title">
            path path into Meaningful work starts here
          </h1>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end location"
        >
          <p class="sub-title">
            We know that everyone has a lot of different skills and field
            interests. If you are a passionate person who is ready to share your
            vision and show the world what you got, no matter where you came
            from, we have a spot for you. Find the most suitable job here.
          </p>
          <img class="assets-3" src="@/assets/images/careers/search.svg" />
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end find-us"
        >
          <img class="asset-high-1" src="@/assets/images/careers/high.png" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

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

const emit = defineEmits(["toTop"]);
</script>

<style lang="scss" scoped>
#footer {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-image: url("@/assets/images/careers/Background.png");
  position: relative;
  @media screen and (max-width: 768px) {
    // font-weight: 700;
    // font-size: 30px !important;
    // line-height: 47px;
    // width: 325px;
  }
  .container-custom {
    padding: 80px 0 0 0;
    height: 100%;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 0px solid #b8bdc6;
    .hashtag {
      span {
        color: #e78448;
      }
    }
    .title {
      width: 546px;
      margin-left: 0.5em;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 67px;
      letter-spacing: -2.81895px;
      text-transform: capitalize;

      color: #ffffff;
      @media screen and (max-width: 768px) {
        font-weight: 700;
        font-size: 30px !important;
        line-height: 47px;
        width: 325px;
      }
    }
    .discover {
      border-bottom: 1px solid #b8bdc6;
    }
    .location {
      // padding: 0 40px;
      height: 50%;
    }
    .find-us {
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

  .assets-3 {
    width: 295px;
    height: 44px;
    @media screen and (max-width: 768px) {
      width: 158px;
      height: 25px;
    }
  }
}
.asset-high {
  width: 566px !important;
  height: 710px !important;
  margin-top: -50%;
  margin-left: 5.6em;

  @media screen and (min-width: 1920px) {
    margin-bottom: 15%;
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    width: 224.81px;
    height: 282px;
    margin-top: -60em;
    margin-left: 14em;
    // margin-bottom: -19%;
  }
}
.sub-title {
  width: 546px;

  /* Sub Body Text */
  margin-top: 10%;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  /* or 133% */

  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
    display: flex;
    margin-left: 1em;
    margin-top: -1rem !important;
    /* or 154% */
    width: 214px;
  }
}
@media screen and (max-width: 768px) {
  #footer {
    background-image: url("@/assets/images/careers/bg-mobile.png");
    background-size: contain;
    padding: 0 30px;
    margin-bottom: -49.4vh;
    .container-custom {
      height: 50vh !important;
      // padding: 80px 0;
      border: none;
      .hashtag {
        font-size: 24px;
        line-height: 37px;
      }
      .title {
        font-size: 30px;
        line-height: 37px;

        margin-top: -3em;
        margin-left: -0.1em;
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
.asset-high-1 {
  width: 224.81px;
  height: 282px;
  margin-top: -14em;
  margin-left: 14em;
}
.hide-mobile {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.show-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
</style>
