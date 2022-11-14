<template>
  <MenuComponent :theme="'dark'" :direction="'down'" @goMenu="scrollToTop" />
  <div id="our-works">
    <HeroSection />
    <!-- <Ourwork /> -->
    <Sample />
    <FooterComponent :sections-length="4" :current-section="3" @toTop="scrollToTop" />
  </div>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import HeroSection from "./components/Home.vue";
import Ourwork from "./components/ourwork.vue";
import Sample from "./components/sample.vue";
import FooterComponent from "@/components/FooterComponent.vue";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
}
</style>
