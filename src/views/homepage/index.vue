<template>
  <MenuComponent :theme="currentSection == 1 ? 'dark' : 'light'" :direction="direction" />
  <!-- <loader> -->
  <transition :name="direction" @after-enter="listening = true" mode="out-in">

    <Home
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-if="currentSection == 1"
    />
    <Deliver
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 2"
    />
    <HowWeDo
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 3"
    />
    <HowWork
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 4"
    />
    <Stack @swipeUp="swipeUp" @swipeDown="swipeDown" v-else-if="currentSection == 5" />
    <Services
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 6"
    />
    <Product
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      :theme="currentSection == 7 ? 'light' : 'dark'"
      v-else-if="currentSection == 7 "
    />
    <Journey
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 8"
    />
    <Gallery
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 9"
    />
    <OurTeam
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 10"
    />
    <Blog
      :sections-length="sections.length"
      :current-section="currentSection"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 11"
    />
    <!-- <Blog v-else-if="currentSection == 10" /> -->
    <FooterComponent
      :sections-length="sections.length"
      :current-section="currentSection"
      @toTop="currentSection = 1"
      @swipeUp="swipeUp"
      @swipeDown="swipeDown"
      v-else-if="currentSection == 12"
    />

  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import MenuComponent from "@/components/MenuComponent.vue";
// import loader from "@/components/Loader.vue";
import Home from "./components/home.vue";
import Deliver from "./components/sample.vue";
import HowWeDo from "./components/howWeDo.vue";
import HowWork from "./components/HowWork.vue";
import Stack from "./components/stack.vue";
import Services from "./components/services.vue";
import Product from "./components/Product.vue";
import Journey from "./components/Journey.vue";
import Gallery from "./components/Gallery.vue";
import OurTeam from "./components/OurTeam.vue";
import Blog from "./components/blog.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const sections = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
const currentSection = ref(1);
const listening = ref(false);
const direction = ref("up");

function go(dir) {
  listening.value = false;

  if (currentSection.value + dir < 1) {
    currentSection.value = 1;
    listening.value = true;
  } else if (currentSection.value + dir >= sections.value.length) {
    currentSection.value = sections.value.length - 1;
    listening.value = true;
  } else {
    currentSection.value += dir;
  }
}

//Mouse Wheel Scroll Transition
let scrollTimeout;
function wheel(e) {
  if (!listening.value) return false;
  clearTimeout(scrollTimeout);
  setTimeout(function () {
    if (e.deltaY < -40) {
      direction.value = "up";
      go(-1);
    } else if (e.deltaY >= 40) {
      direction.value = "down";
      go(1);
    }
  });
}

function swipeUp() {
  direction.value = "down";
  go(1);
}

function swipeDown() {
  direction.value = "up";
  go(-1);
}

onMounted(() => {
  window.addEventListener("mousewheel", wheel, false);
  window.addEventListener("wheel", wheel, false);

  //Press Up & Down Keyboard Arrow Event
  window.addEventListener("keydown", function (e) {
    if (["ArrowDown", "ArrowRight"].includes(e.key)) {
      direction.value = "down";
      go(1);
    } else if (["ArrowUp", "ArrowLeft"].includes(e.key)) {
      direction.value = "up";
      go(-1);
    }
  });

  listening.value = true;
});
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
}
</style>
