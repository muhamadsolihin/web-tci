<template>
  <section id="hero">
    <div class="container-custom justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row">
        <div class="col-8 col-md-8 col-lg-8 col-xl-8">
          <h1 class="hero-title">
            We do our job professionally quickly and precisely.
          </h1>
          <p class="hero-title-mobile">
            Benefit <br />
            Working On TCI
          </p>

          <p class="sub-title">
            More than a place to work, Teknologi Cakra Internasional is a place
            where you could grow, learn, and collaborate with all your passion.
          </p>
        </div>
        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
          <img
            class="asset-3"
            src="@/assets/images/careers/batik-img.png"
            alt="asset"
          />
        </div>
      </div>
    </div>
  </section>
  <section id="hero1">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-9 col-lg-9 col-xl-9 d-flex flex-column">
            <img
              class="asset-4"
              src="@/assets/images/careers/animate.gif"
              alt="asset"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-color: #eeeaea;
  height: 346px !important;
  width: 100vw;
  margin-top: 1em;
  padding: 0 140px;
  overflow: hidden;
  .container-custom {
    height: 100vh;
    // border-left: 1px solid #b8bdc6;
    // border-right: 1px solid #b8bdc6;
    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 35px;
      width: 1124px !important;
      line-height: 43px;
      margin-top: 15%;
      margin-left: 15%;
      text-align: center;
      font-weight: 600;
      text-align: start;
      color: black;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    .hero-title-mobile {
      display: none;
      @media screen and (max-width: 768px) {
        display: block;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        line-height: 37px;
        margin-top: 3em;
        color: #000000;
      }
    }
    .sub-title {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 32px;
      /* or 133% */
      margin-left: 5%;
      text-align: center;
      width: 1069px !important;

      color: #000000;
      @media screen and (max-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        width: 325px !important;
        color: #8d8f9a;
        margin-left: 0;
        text-align: left;
      }
    }
  }
}
.asset-3 {
  width: 262px;
  height: 195px;
  float: right;
  justify-content: right;
  margin-right: -35%;
}
.asset-4 {
  float: center;
  align-items: center;
  justify-content: center;
  margin-top: 75px;
  padding-bottom: 90px;
  width: 1048px;
  height: 1277px;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
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

#hero1 {
  background-color: #fff;
  height: 100% !important;
  width: 100%;
  padding: 0 140px;
  overflow: hidden;
}
</style>
