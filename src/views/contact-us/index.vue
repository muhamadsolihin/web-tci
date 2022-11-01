<template>
  <MenuComponent :theme="'dark'" :direction="'down'" @goMenu="scrollToTop" />
  <div id="contact-us">
    <HeroSection />
    <FormSection />
    <FooterComponent :sections-length="3" :current-section="2" @toTop="scrollToTop" />
  </div>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import HeroSection from "./components/HeroSection.vue";
import FormSection from "./components/FormSection.vue";
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
