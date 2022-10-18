<template>
  <transition :name="direction" @after-enter="listening = true" mode="out-in">
    <Home v-if="currentSection == 1" />
    <Deliver v-else-if="currentSection == 2" />
    <HowWeDo v-else-if="currentSection == 3" />
    <HowWork v-else-if="currentSection == 4" />
    <Stack v-else-if="currentSection == 5" />
    <Product v-else-if="currentSection == 6" />
    <Journey v-else-if="currentSection == 7" />
    <Gallery v-else-if="currentSection == 8" />
	<Gallery v-else-if="currentSection == 9" />

  </transition>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Home from "./components/home.vue";
import Deliver from './components/Deliver.vue';
import HowWeDo from "./components/howWeDo.vue";
import HowWork from "./components/HowWork.vue";
import Stack from "./components/stack.vue";
import Services from "./components/services.vue";
import Product from "./components/Product.vue";
import Journey from "./components/Journey.vue";
import Gallery from "./components/Gallery.vue";

const sections = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
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
  console.log(currentSection.value);
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

onMounted(() => {
  window.addEventListener("mousewheel", wheel, false);
  window.addEventListener("wheel", wheel, false);

  listening.value = true;
});
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
}
.down-enter-from {
  opacity: 0;
  transform: translateY(180px);
}
.down-leave-to {
  opacity: 0;
  transform: translateY(-180px);
}
.down-enter-to,
.down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.down-enter-active {
  transition: all 0.8s;
}
.down-leave-active {
  transition: all 0.2s;
}

.up-enter-from {
  opacity: 0;
  transform: translateY(-180px);
}
.up-leave-to {
  opacity: 0;
  transform: translateY(180px);
}
.up-enter-to,
.up-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.up-enter-active {
  transition: all 0.8s;
}
.up-leave-active {
  transition: all 0.2s;
}

.two {
  background: rgb(36, 164, 138);
}
.three {
  background: rgb(67, 91, 175);
}
.four {
  background: lightsalmon;
}
</style>
