<template>
  <section id="our-team">
    <div id="container-custom" class="container-custom w-100">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex flex-row flex-wrap align-items-center w-100">
        <h1 class="title mb-0">Our Team</h1>
        <SectionNumberComponent
          class="ms-auto d-none d-md-flex"
          :number="'10 / 11'"
          :section-name="'Our Team'"
          :color="'#000000'"
        />
      </div>
      <div class="section-body">
        <div class="photo-section">
          <div
            class="photo-container"
            :class="activeTeam != indexTeam ? 'photo-inactive' : 'photo-active'"
            v-for="(team, indexTeam) in teamList"
            :key="indexTeam"
            @click="activeTeam = indexTeam"
            @mouseleave="activeTeam = null"
          >
            <div class="inside">
              <img :src="team.photo" alt="photo" class="photo" />
              <div class="cover"></div>

              <transition name="ease" mode="out-in">
                <p class="mb-0 team-name" v-if="activeTeam != indexTeam">
                  {{ team.name }}
                </p>
              </transition>
              <transition name="ease" mode="out-in" appear>
                <div v-if="activeTeam == indexTeam">
                  <p class="mb-0 active-name">{{ team.name }}</p>
                  <p class="mb-0 active-description">{{ team.description }}</p>
                </div>
              </transition>
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

const activeTeam = ref(null);

const teamList = ref([
  {
    photo: require("@/assets/images/team/pak-reza.png"),
    photo2: require("@/assets/images/team/pak-reza2.png"),
    name: "Reza",
    description:
      "Mr. Reza has 20 years of extensive experience in the Mining and Property business.",
  },
  {
    photo: require("@/assets/images/team/bu-maya.png"),
    photo2: require("@/assets/images/team/bu-maya2.png"),
    name: "Maya",
    description:
      "Our President Commissioner is a sociopreneur, womenpreneur, and business owner.",
  },
  {
    photo: require("@/assets/images/team/bu-rany.png"),
    photo2: require("@/assets/images/team/bu-rany2.png"),
    name: "Rany",
    description:
      "Mrs. Rany is an IT Specialist that has participated in a lot of certifications, including Windows Forensics and Cyber Intelligence Investigator",
  },
  {
    photo: require("@/assets/images/team/pak-iwan.png"),
    photo2: require("@/assets/images/team/pak-iwan2.png"),
    name: "Iwan",
    description:
      "He has more than 20 years of experience in IT Industry, IT Manufactures, Core Banking System and Database Specialist.",
  },
  {
    photo: require("@/assets/images/team/pak-arief.png"),
    photo2: require("@/assets/images/team/pak-arief2.png"),
    name: "Arief",
    description:
      "Mr. Arief had his Bachelor Degree of Mathematics and Computer Science from Padjadjaran University and has more than 15 years of experience as an IT Developer.",
  },
  {
    photo: require("@/assets/images/team/pak-kiki.png"),
    photo2: require("@/assets/images/team/pak-kiki2.png"),
    name: "Kiki",
    description: "Mr. Kiki has expertise in technology and investigation fields.",
  },
]);

const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("our-team");
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
#our-team {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  z-index: 1;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
    }
    .section-body {
      width: 100%;
      height: 100%;
    }
    .photo-section {
      margin-top: 30px;
      width: 100%;
      height: 88%;
      display: flex;
      flex-direction: row;
      .photo-container {
        margin: 0 2px;
        border-left: 1px solid lightblue;
        position: relative;
        .inside {
          width: 100%;
          height: 100%;
          background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
          color: white;
          text-align: center;
          transition: 1s ease;
          .active-name {
            font-size: 20px;
            font-weight: 600;
            margin: 15px 0;
          }
          .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.6;
            transition: 0.5s ease;
          }
          .cover:hover {
            background-color: black;
            opacity: 0;
            cursor: pointer;
          }
          .team-name {
            position: absolute;
            top: 50%;
            left: 50%;
            color: white;
            font-size: 24px;
            font-family: "Open Sans", sans-serif;
            transform: rotate(-90deg) translate(-50%, -50%);
          }
        }
      }
      .photo-active {
        width: 650px;
        padding: 20px;
        background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
        animation: wide 1s ease-out;
        img {
          height: 60%;
          width: 100%;
          object-fit: cover;
          animation: small 0.2s ease-in-out;
        }
      }
      @keyframes wide {
        from {
          width: 450px;
          padding: 0px;
        }
        to {
          width: 650px;
          padding: 20px;
        }
      }
      @keyframes small {
        from {
          height: 100%;
        }
        to {
          height: 60%;
        }
      }
      .photo-inactive {
        width: 450px;
        padding: 0px;
        background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
        animation: unwide 1s ease-out;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          animation: unsmall 0.2s ease-in-out;
        }
      }
      @keyframes unwide {
        from {
          width: 650px;
          padding: 20px;
        }
        to {
          width: 450px;
          padding: 0px;
        }
      }
      @keyframes unsmall {
        from {
          height: 60%;
        }
        to {
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #our-team {
    padding: 0 30px;
    .container-custom {
      .section-body {
        overflow-x: scroll;
      }
      .photo-section {
        width: 1200px;
      }
    }
  }
}
</style>
