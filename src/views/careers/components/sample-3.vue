<template>
  <section id="diversity">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row h-100">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="d-flex  flex-column justify-content-center h-100">
            <h2
              class="mt-5 py-5 pt-5 title text-white"
              
            >
              Path into Meaningful work starts here
            </h2>
            <p
              class="open-reg-24 mt-3 text-body text-white"
          
            >
              We know that everyone has a lot of different skills and field
              interests. If you are a passionate person who is ready to share
              your vision and show the world what you got, no matter where you
              came from, we have a spot for you. Find the most suitable job
              here.
            </p>
            <!-- <SectionNumberComponent
              class="mt-auto me-auto mb-auto d-none d-md-flex"
              :number="'06 / 07'"
              :section-name="'Diversity Equity Inclusion'"
              :color="'#000000'"
            /> -->
            <img class="assets-3  me-auto mb-auto d-none d-md-flex" src="@/assets/images/careers/search.svg" />
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-6 col-xl-6 d-flex flex-row">
          <img
            class="mb-auto diversity-image"
            src="@/assets/images/careers/high.png"
            alt="photo"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#diversity {
  background-image: url("@/assets/images/careers/Background.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .diversity-image {
      width: 82%;
      object-fit: contain;
      margin-left: 18% !important;
    }
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
      font-size: 55px;
line-height: 67px;
letter-spacing: -2.81895px;
text-transform: capitalize;

color: #FFFFFF;

    }
    .open-reg-24{
        color: #fff !important;
    }
  }
}
@media screen and (max-width: 768px) {
  #diversity {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .diversity-image {
        width: 45%;
        margin-top: -4%;
        margin-left:60% !important; 
        object-fit: contain;
      }
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        color: #fff !important;
        line-height: 30px;
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
