<template>
  <section id="core-value">
    <BorderContainer
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="d-flex flex-column h-100 pt-4">
        <div class="d-flex flex-row flex-wrap align-items-center w-100">
          <h1 class="title mb-0">Our Product</h1>
          <SectionNumberComponent
            class="ms-auto mt-auto"
            :number="'06 / 11'"
            :section-name="'Our Product'"
            :color="'#fff'"
          />
        </div>
        <div class="shape"></div>

        <div class="cores  d-flex flex-row align-items-start my-auto">
          <div
            class="grid-content card-ic"
            :style="`
                transform: translateX(-${posX}px);
              `"
          >
            <div class="card" style="border: none">
              <img
                src="@/assets/images/iclogo.svg"
                class="card-img-top ic-image"
                alt="responsive"
              />
              <hr
                class="center"
                style="width: 20.5em; margin: auto; margin-top: 4.5em"
              />
              <div class="card-body">
                <h5 class="card-title">InterconnectDATA</h5>
                <p class="card-text">2021</p>
              </div>
              <ul class="list-group list-group-flush" style="border: none">
                <li class="list-group-item contact">Contact :</li>
              </ul>
              <div class="card-body" style="border: none">
                <a
                  href="https://www.facebook.com/Official.ICData/"
                  target="_blank"
                  class="btn-touch"
                >
                  <img src="@/assets/images/fb.svg" />
                </a>
                <a
                  href="https://www.instagram.com/interconnectdata/"
                  target="_blank"
                  class="btn-touch"
                >
                  <img src="@/assets/images/ig.svg" />
                </a>
                <a
                  href="https://mobile.twitter.com/icdata"
                  target="_blank"
                  class="btn-touch"
                >
                  <img src="@/assets/images/twit.svg" />
                </a>
              </div>
            </div>
          </div>
          <div
            class="grid-content card-ic"
            :style="`
                transform: translateX(-${posX}px);margin-left:1em;
              `"
          >
                <div class="card" style="border: none">
                  <img
                    src="@/assets/images/rbilogo.png"
                    class="card-img-top ic-image"
                    alt="responsive"
                  />
                  <hr
                    class="center"
                    style="width: 20.5em; margin: auto; margin-top: 4.5em"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Reliable Bussiness Service</h5>
                    <p class="card-text">2021</p>
                  </div>
                  <ul class="list-group list-group-flush" style="border: none">
                    <li class="list-group-item contact">Contact :</li>
                  </ul>
                  <div class="card-body" style="border: none">
                    <a href="#" class="btn-touch">
                      <img src="@/assets/images/fb.svg" />
                    </a>
                    <a
                      href="https://www.instagram.com/reliablebusinessservices/"
                      target="_blank"
                      class="btn-touch"
                    >
                      <img src="@/assets/images/ig.svg" />
                    </a>
                    <a href="#" class="btn-touch">
                      <img src="@/assets/images/twit.svg" />
                    </a>
                  </div>
                </div></div
            >
          <div
            class="grid-content card-ic"
            :style="`
                transform: translateX(-${posX}px);margin-left:1em;
              `"
          >
                <div class="card" style="border: none">
                  <img
                    src="@/assets/images/artlogo.svg"
                    class="card-img-top ic-image"
                    alt="responsive"
                  />
                  <hr
                    class="center"
                    style="width: 20.5em; margin: auto; margin-top: 4.5em"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Arthology Branding Consultant</h5>
                    <p class="card-text">2021</p>
                  </div>
                  <ul class="list-group list-group-flush" style="border: none">
                    <li class="list-group-item contactart">Contact :</li>
                  </ul>
                  <div class="card-body" style="border: none">
                    <a href="#" class="btn-touch">
                      <img src="@/assets/images/fb.svg" />
                    </a>
                    <a
                      href="https://www.instagram.com/arthology.id/"
                      target="_blank"
                      class="btn-touch"
                    >
                      <img src="@/assets/images/ig.svg" />
                    </a>
                    <a href="#" class="btn-touch">
                      <img src="@/assets/images/twit.svg" />
                    </a>
                  </div>
                </div></div
            >
          <div
            class="grid-content card-ic"
            :style="`
                transform: translateX(-${posX}px);
                margin-left:1em;
              `"
          >
                <div class="card" style="border: none">
                  <img
                    src="@/assets/images/product/logo-makasi.svg"
                    class="card-img-top ic-image"
                    alt="responsive"
                  />
                  <hr
                    class="center"
                    style="width: 20.5em; margin: auto; margin-top: 4.5em"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Makasi</h5>
                    <p class="card-text">2021</p>
                  </div>
                  <ul class="list-group list-group-flush" style="border: none">
                    <li class="list-group-item contact">Contact :</li>
                  </ul>
                  <div class="card-body" style="border: none">
                    <a
                      href="https://www.facebook.com/people/Makasi-Indonesia/100083488881963/"
                      target="_blank"
                      class="btn-touch"
                    >
                      <img src="@/assets/images/fb.svg" />
                    </a>
                    <a
                      href="https://www.instagram.com/makasipos/"
                      target="_blank"
                      class="btn-touch"
                    >
                      <img src="@/assets/images/ig.svg" />
                    </a>
                    <a
                      href="https://twitter.com/makasipos"
                      target="_blank"
                      class="btn-touch"
                    >
                      <img src="@/assets/images/twit.svg" />
                    </a>
                  </div>
                </div></div
            >
          
          <!-- <div
            class="core d-flex flex-column"
            :style="`
                transform: translateX(-${posX}px);
              `"
            v-for="(core, indexCore) in coreValues"
            :key="indexCore"
          >
            <SectionNumberComponent
              class="me-auto"
              :number="''"
              :section-name="`- 0${indexCore + 1} ${core.name}`"
              :color="'#000000'"
            />
            <div class="d-flex flex-row align-items-center mt-4">
              <div class="circle"></div>
              <div class="border-dash"></div>
            </div>
            <p class="mb-0 description">{{ core.description }}</p>
          </div> -->
        </div>

        <div class="d-flex flex-row d-none justify-content-end w-100">
          <button
            type="button"
            class="btn btn-small btn-arrow"
            :class="posX == 0 ? 'disabled' : ''"
            @click="minPos"
          >
            <img src="@/assets/images/icons/caret-left.svg" alt="icon" />
          </button>
          <button
            type="button"
            class="btn btn-small btn-arrow ms-2"
            :class="posX == 2400 ? 'disabled' : ''"
            @click="addPos"
          >
            <img src="@/assets/images/icons/caret-right.svg" alt="icon" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import Hammer from "hammerjs";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
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
const emit = defineEmits(["swipeUp", "swipeDown"]);

const posX = ref(0);
const addPos = () => {
  posX.value += 300;
};
const minPos = () => {
  posX.value -= 300;
};

onMounted(() => {
  var stage = document.getElementById("core-value");
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
#core-value {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-image: url("@/assets/images/bgproduct.png");
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
      color: #fff;
    }
    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin-top: 10px;
    }
    .cores {
      padding: 20px 0;
      width: 100%;
      height: 100%;
      overflow-x: scroll;
      .core {
        width: 350px;
        padding-right: 10px;
        transition: 0.5s ease-out;
        .description {
          font-family: "Albert Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #8d8f9a;
          margin-top: 20px;
          padding-right: 40px;
        }
        .circle {
          width: 18px;
          height: 18px;
          background: #e78448;
          border-radius: 30px;
        }
        .border-dash {
          width: 300px;
          height: 0px;
          border-top: 2px dashed #e78448;
          margin-left: 10px;
        }
      }
    }
    .card-ic {
  width: 27em;
  height: 43em;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  // @media (min-width: 992px) {
  //   margin-top: -2em;
  // }
  // @media screen and (max-width: 567px) {
  //   margin-left: 50%;
  // }
}
.ic-image {
  width: 18.5em;
  height: 6em;
  margin-top: 1em;
  // margin-left: 10%;
}
.contact {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 20%;
  // margin-left: 6%;
  text-align: justify;
}
.contactrbi {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 6%;
  margin-left: 6%;
  text-align: justify;
}
.contactart {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top:10%;
  // margin-left: 6%;
  text-align: justify;
}
.card-title {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  text-align: left;
  margin-top: 10%;
  // margin-left: 6%;
}

img {
  text-align: center;
  margin: 5%;
  margin-top: 1%;
}
  }
}

@media screen and (max-width: 768px) {
  #core-value {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      .title {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
      }
      .text-body {
        font-size: 12px;
        margin-top: 5px;
        line-height: 30px;
      }
    }
  }
}
</style>
