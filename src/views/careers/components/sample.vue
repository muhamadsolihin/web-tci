<template>
  <section id="diversity">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row h-100">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-row">
          <img
            class="mb-auto diversity-image"
            src="@/assets/images/careers/img-group.png"
            alt="photo"
          />
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="d-flex flex-column justify-content-center h-100">
            <h2
              class="mt-4 title"
            >
              Seizing Opportunities
            </h2>
            <p
              class="open-reg-24 mb-auto text-body"
              :class="imageHover ? 'text-smaller' : 'text-bigger'"
            >
              We always thrilled to try something new because we embrace the
              opportunities to learn and improve in order to excel our quality
              while we cooperate with our community and partners around the
              world. We put forward our loyalty and keeping a dynamic
              value-based solutions to succeed in our business, professionally.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Section id="providing" style="background-color: #eeeaea; height: 40vh; margin-top: 15%;">
    <div class="d-flex mt-5 flex-row align-items-center flex-wrap">
      <!-- <h2 class="ml-5 pl-5">Our Vision & Mission</h2> -->
      <img
        class="ms-auto d-none d-md-flex"
        src="@/assets/images/careers/batik.svg"
        alt="asset"
      />
    </div>
    <div class="container" style="padding-left: 0; margin-top: -9%">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12">
        <h1 class="hero-title">Providing the best, So you could do the rest</h1>
        <p class="sub-title">
          More than a place to work, Teknologi Cakra Internasional is a place
          where you could grow, learn, and collaborate with all your passion.
        </p>
      </div>
    </div>
  </Section>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#diversity {
  background-color: white;
  height: 60vh;
  // margin-top: -20%;
  width: 100%;
  padding: 0 140px;
  .container-custom {
    padding: 80px 0;
    height: 80vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .diversity-image {
      width: 85%;
      object-fit: contain;
    }
    .open-reg-24{
      // font-size: 14px;
      line-height: 24px;
    }
  }
}
// #providing{
//   display: none;
// }

.hero-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 2em;
  text-align: center !important;
  line-height: 57px;
}
.sub-title {
  font-size: 20px;
  line-height: 32px;
  /* or 133% */

  text-align: center;

  color: #000000;
}

@media screen and (max-width: 768px) {
  #diversity {
    padding: 0 30px;
    height: 100vh;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .diversity-image {
        width: 75%;
        object-fit: contain;
      }
      .title {
        font-size: 45px !important;
        font-weight: 600;
        line-height: 50px;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 25px;
      }
  
    }

    .image-hover,
    .image-unhover,
    .title-smaller,
    .title-bigger,
    .text-smaller,
    .text-bigger {
      animation: 0s;
    }
    
  }
  .hero-title{
    margin-top: 15%;
    line-height: 34px;
  }
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

.title-smaller {
  animation: smaller 1s;
  font-size: 45px;
}
@keyframes smaller {
  from {
    font-size: 50px;
  }
  to {
    font-size: 45px;
  }
}
.title-bigger {
  animation: bigger 1s;
  font-size: 50px;
}
@keyframes bigger {
  from {
    font-size: 45px;
  }
  to {
    font-size: 50px;
  }
}

.text-smaller {
  animation: textsmaller 1s;
  font-size: 21px;
}
@keyframes textsmaller {
  from {
    font-size: 24px;
  }
  to {
    font-size: 21px;
  }
}
.text-bigger {
  animation: textbigger 1s;
  font-size: 24px;
}
@keyframes textbigger {
  from {
    font-size: 21px;
  }
  to {
    font-size: 24px;
  }
}
</style>
