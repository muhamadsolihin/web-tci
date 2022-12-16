<template>
  <section id="job-list">
    <div class="container-custom">
      <div id="container-body" class="row g-3">
        <div class="col-12">
          <SearchField />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchField from "./SearchField.vue";
</script>

<style lang="scss" scoped>
#job-list {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    width: 100%;
    padding: 0 100px;
    #container-body {
      margin-top: 200px;
    }
  }
}

@media screen and (max-width: 768px) {
  #job-list {
    padding: 0 10px;
    padding-left: 20%;
    // width: 325px;
    height: 50vh;
  }
}
</style>
