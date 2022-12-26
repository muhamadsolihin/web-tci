<template>
  <section id="job-list">
    <div class="container-custom">
      <div id="container-body" class="row g-3">
        <div class="col-12">
          <SearchField v-model:search="search" @doSearch="searchJob" />
        </div>
        <div class="col-12" v-if="loading">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <div class="col-12" v-if="jobs.length == 0 && !loading">
          <p class="mt-5">Oops.. Lowongan tidak ditemukan</p>
        </div>
        <div class="col-12 pt-4" v-if="jobs.length != 0 && !loading">
          <div class="job-card" v-for="(job, indexJob) in jobs" :key="indexJob">
            <div class="row">
              <div class="col-12 col-md-4 col-lg-4 col-xl-4">
                <h3 class="job-title mb-0">{{ job.name }}</h3>
                <p class="mb-0 job-subtitle">{{ job.working_type }}</p>
              </div>
              <div class="col-12 col-md-3 col-lg-3 col-xl-3">
                <p class="mb-0 job-subtitle">Skills</p>
                <p class="mb-0 job-description" v-if="job.skills.length > 0">
                  {{ genereateSkill(job.skills) }}
                </p>
                <p class="mb-0 job-description" v-else>-</p>
              </div>
              <div class="col-6 col-md-3 col-lg-3 col-xl-3">
                <p class="mb-0 job-subtitle">Location</p>
                <p class="mb-0 job-description">
                  <span v-for="(loc, indexLoc) in job.location" :key="indexLoc"
                    >{{ loc.name }}
                    <span v-if="indexLoc < job.location.length - 1">/ </span></span
                  >
                </p>
              </div>
              <div class="col-6 col-md-2 col-lg-2 col-xl-2">
                <button type="button" class="btn btn-apply" @click="goToApps(job.uuid)">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

import SearchField from "./SearchField.vue";

const props = defineProps({
  jobs: {
    type: Object,
    require: true,
    default: [],
  },
  loading: {
    type: Boolean,
    require: true,
    default: false,
  },
});
const emit = defineEmits(["doSearch"]);

const search = ref("");

const genereateSkill = (skills) => {
  let skillText = "";
  if (skills.length < 8) {
    skills.forEach((skill, indexSkill) => {
      if (indexSkill < skills.length - 1) {
        skillText += `${skill.name}, `;
      } else {
        skillText += skill.name;
      }
    });
  } else {
    skills.forEach((skill, indexSkill) => {
      if (indexSkill < skills.length - 1 && indexSkill < 7) {
        skillText += `${skill.name}, `;
      }
    });
    skillText += "...";
  }
  return skillText;
};

const goToApps = (uuid) => {
  window.open("https://apps.interconnectdata.com/job-vacancy/" + uuid);
};

const searchJob = () => {
  emit("doSearch", search.value);
};
</script>

<style lang="scss" scoped>
#job-list {
  min-height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    min-height: 100vh;
    width: 100%;
    padding: 0 100px;
    #container-body {
      margin-top: 200px;
      .job-card {
        margin-bottom: 20px;
        padding: 30px;
        background: #ffffff;
        box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
        .job-title {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 29px;
          color: #e78448;
        }
        .job-subtitle {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 30px;
          color: #8d8f9a;
        }
        .job-description {
          font-family: "Open Sans";
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #000000;
        }
        .btn-apply {
          width: 100%;
          height: 60px;
          color: white;
          background: linear-gradient(119.27deg, #e58146 0%, #e09b3d 100%);
          box-shadow: 0px 10px 30px rgba(231, 132, 72, 0.45);
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #job-list {
    padding: 0 30px;
    // width: 325px;
    min-height: 50vh;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
    }
  }
}
</style>
