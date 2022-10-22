<template>
  <section id="gallery">
    <div class="container-custom">
      <div class="row bg-warning">
        <div
          class="col-12 justify-content-center align-items-center col-md-12 col-lg-12 col-xl-12"
        ></div>
        <h1 class="hero-title text-center mt-4">Get in touch with us</h1>
        <h1 class="hero-subtitle text-center mt-4">
          We look forward to collaborate with you in your amazing journey. You
          can tell us what you need using this form.
        </h1>
      </div>
      <div class="row g-3">
        <div
          class="col-12 contact justify-content-center align-items-center col-md-6 col-lg-6 col-xl-6"
        >
          <div class="row g-3 h-100">
            <div class="col-md-12"></div>
          </div>
        </div>
        <div class="col-6 col-md-3 col-lg-3 col-xl-3 pb-3"></div>
        <div class="col-6 col-md-3 col-lg-3 col-xl-3"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
#gallery {
  width: 100%;
  padding: 50px 140px;
  .container-custom {
    margin-top: -170px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .contact {
      margin-left: 9.5em;
      margin-top: -6em;
      width: 1020px;
      height: 530px;
      background-color: #fff;
      background: #ffffff;
      box-shadow: 30px 30px 120px rgba(0, 0, 0, 0.03);
    }
    .data-in-life {
      width: 100%;
      height: 100%;
      background: linear-gradient(136.6deg, #e78448 23.03%, #e09b3d 100%);
      box-shadow: 0px 10px 100px rgba(231, 132, 72, 0.45);
      .title {
        font-family: "Albert Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 42px;
        color: white;
      }
      .subtitle {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 300;
        font-size: 12px;
        line-height: 30px;
        color: white;
      }
      .text-body {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: white !important;
      }
    }
  }
}
.hero-title {
  font-family: "Montserrat", sans-serif;
  margin-top: -4em !important;
  margin-left: 25%;
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  width: 690px !important;
  color: white;
}
.hero-subtitle{
	font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
/* identical to box height, or 150% */
margin-top: -8em !important;
  margin-left: 2%;
text-align: center;
letter-spacing: -0.5px;

color: #FFFFFF;

}

@media screen and (max-width: 768px) {
  #gallery {
    padding: 0 30px;
    .container-custom {
      margin-top: -180px;
      .hide-on-mobile {
        display: none;
      }
    }
  }
}
</style>
