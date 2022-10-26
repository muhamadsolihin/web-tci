<template>
  <section id="our-team">
    <div class="container-custom w-100">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex flex-row align-items-center w-100">
        <h1 class="title mb-0">Our Team</h1>
        <SectionNumberComponent
          class="ms-auto"
          :number="'10 / 11'"
          :section-name="'Our Team'"
          :color="'#000000'"
        />
      </div>
      <div class="photo-section">
        <div
          class="photo-container"
          v-for="(team, indexTeam) in teamList"
          :key="indexTeam"
        >
          <img :src="team.photo" alt="photo" class="photo" />
          <div class="cover"></div>
          <p class="mb-0 team-name">{{ team.name }}</p>
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

const teamList = ref([
  { photo: require("@/assets/images/team/pak-reza.png"), name: "Reza" },
  { photo: require("@/assets/images/team/bu-maya.png"), name: "Maya" },
  { photo: require("@/assets/images/team/bu-rany.png"), name: "Rany" },
  { photo: require("@/assets/images/team/pak-iwan.png"), name: "Iwan" },
  { photo: require("@/assets/images/team/pak-arief.png"), name: "Arief" },
  { photo: require("@/assets/images/team/pak-kiki.png"), name: "Kiki" },
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
    // border-left: 1px solid #b8bdc6;
    // border-right: 1px solid #b8bdc6;
    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
    }
    .photo-section {
      margin-top: 30px;
      width: 100%;
      height: 88%;
      display: flex;
      flex-direction: row;
      .photo-container {
        margin: 0 2px;
        flex-grow: 1;
        border-left: 1px solid lightblue;
        position: relative;
        .photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
  }
}
</style>
