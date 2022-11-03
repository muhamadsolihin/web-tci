<template>
  <section id="culture">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="row mx-1 h-100 hide-on-mobile">
        <div
          class="text-center mt-5 pt-5 discover col-12 col-md-12 col-lg-12 col-xl-12"
        >
          <h2 class="hero-title">Our Culture</h2>
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end location"
        >
          <img class="img-group" src="@/assets/images/careers/img-group.png" />
        </div>
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-column justify-content-end find-us"
        >
          <div class="tab-content">
            <div
              class="open-reg-26 mt-5 pt-5"
              style="text-align: justify; width: 574px"
            >
              Seizing Opportunities
            </div>

            <div class="subhead1">
              We always thrilled to try something new because we embrace the
              opportunities to learn and improve in order to excel our quality
              while we cooperate with our community and partners around the
              world. We put forward our loyalty and keeping a dynamic
              value-based solutions to succeed in our business, professionally.
            </div>
          </div>
        </div>
      </div>
      <div class="row show-mobile">
        <div class="col-md-6">
          <img
            src="@/assets/images/careers/img-group.png"
            style="width: 345px; height: 345px"
          />
        </div>
		<div class="col-md-6">
			<h5 class="hero-title-mobile">Our Culture</h5>
			<div class="sub-title">
              We always thrilled to try something new because we embrace the
              opportunities to learn and improve in order to excel our quality
              while we cooperate with our community and partners around the
              world. We put forward our loyalty and keeping a dynamic
              value-based solutions to succeed in our business, professionally.
            </div>
        </div>
      </div>
    </div>
    <img class="asset-3" src="@/assets/images/asset-pattern.png" alt="asset" />
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
.hide-on-mobile {
  @media screen and (max-width: 567px) {
    display: none;
  }
}
.show-mobile {
  display: none;
  @media screen and (max-width: 567px) {
    margin-top: 40%;
    margin-left: -7em;
    display: block;
  }
}
#culture {
  height: 100vh;
  width: 100%;
  margin-top: -6%;
  padding: 0 140px;
  background-color: white;
  position: relative;
  .container-custom {
    height: 100%;
    width: 100%;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    @media screen and (max-width: 567px) {
      border: 0;
    }

    .hashtag {
      span {
        color: #e78448;
      }
    }
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 50px;
      line-height: 57px;
    }
    .discover {
      border-bottom: 1px solid #b8bdc6;
    }
    .location {
      margin-top: 16%;
      padding: 0 40px;
      height: 50%;
    }
    .find-us {
      padding: 0 40px;
      height: 55%;
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
  .hero-title {
    font-family: "Montserrat", sans-serif;
    font-size: 4.5rem;
    font-weight: 600;
    line-height: 83px;
    text-align: center;

    color: black;
    @media screen and (max-width: 567px) {
      font-size: 30px;
      margin-top: 10% !important;
    }
  }
  .hero-title-mobile{
	font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
/* identical to box height */
margin-top: 20px;

color: #000000;
  }
  .sub-title{
	font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 24px;
/* or 160% */
width: 325px;

color: #000000;

  }
  .subhead1 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    margin-top: 20px;
    font-size: 24px;
    width: 530px;
    text-align: left;
    line-height: 38px;
    /* or 160% */

    color: #000000;

    @media screen and (max-width: 567px) {
      font-size: 13px !important;

      width: 325px !important;
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
.img-group {
  width: 557px;
  margin-top: 50%;
  @media screen and (max-width: 567px) {
    width: 325px;
    height: 325px;
  }
}
@media screen and (max-width: 567px) {
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
