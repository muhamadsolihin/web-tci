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
        width: 546px;
  
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 600;
        font-size: 45px;
        line-height: 67px;
        letter-spacing: -2.81895px;
        text-transform: capitalize;
  
        color: #ffffff;
      }
      .discover {
        border-bottom: 1px solid #b8bdc6;
      }
      .location {
        padding: 0 40px;
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
    }
  }
  .asset-high {
    width: 566px;
    height: 710px;
    margin-bottom: -8%;
    @media screen and (max-width: 1920px) {
      margin-bottom: -15%;
    }
  }
  .sub-title {
    width: 546px;
  
    /* Sub Body Text */
    margin-top: -10%;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
  
    color: #ffffff;
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
  