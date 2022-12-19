<template>
  <MenuComponent :theme="'light'" :direction="'down'" @goMenu="scrollToTop" />
  <div id="jobs">
    <JobsListSection :jobs="jobList" :loading="loading" @doSearch="searchJob" />
    <FooterComponent :sections-length="3" :current-section="2" @toTop="scrollToTop" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import MenuComponent from "@/components/MenuComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import JobsListSection from "./components/JobsListSection.vue";

const jobList = ref([]);
const search = ref("");
const loading = ref(false);

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const searchJob = (val) => {
  search.value = val;
  getJobList();
};

const getJobList = () => {
  loading.value = true;
  axios
    .get(
      "https://api.interconnectdata.com/v1/auth/tci-career/?page=1&perpage=100&search=" +
        search.value
    )
    .then((res) => {
      if (res.data.status) {
        jobList.value = res.data.data;
        loading.value = false;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(() => {
  getJobList();
});
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  display: flex;
}
</style>
