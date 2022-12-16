<template>
  <MenuComponent :theme="'light'" :direction="'down'" @goMenu="scrollToTop" />
  <div id="jobs">
    <JobsListSection />
    <FooterComponent :sections-length="3" :current-section="2" @toTop="scrollToTop" />
  </div>
</template>

<script setup>
import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import JobsListSection from "./components/JobsListSection.vue";

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
