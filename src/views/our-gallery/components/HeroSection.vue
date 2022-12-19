<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row">
        <div class="col-12 col-md-9 col-lg-9 col-xl-9 d-flex flex-column">
          <SectionNumberComponent
            class="mt-auto me-auto"
            :section-name="'Our Gallery'"
            :color="'#ffffff'"
          />
          <h1 class="hero-title mt-4">
            We do our job professionally quickly and precisely.
          </h1>
        </div>
      </div>
    </div>
    <img
      class="asset-3"
      src="@/assets/images/who-we-are/asset-3.png"
      alt="asset"
    />
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/our-gallery/hero-bg.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 80px;
      font-weight: 600;
      line-height: 83px;
      text-align: start;
      color: white;
    }
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
@media screen and (max-width: 992px) {
  .hero-title {
    font-size: 40px !important;
    font-weight: 600;
    line-height: 40px !important;
  }
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-image: url("@/assets/images/our-gallery/hero-bg-mobile.png");
    background-size: contain;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .hero-title {
        font-size: 40px;
        font-weight: 600;
        line-height: 48px;
      }
    }
  }
}
</style>
