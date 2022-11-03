<template>
  <Section id="hero">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active btn"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          class="btn"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          class="btn"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block d-lg-block d-xl-block">
            <p class="hero-title">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <p class="hero-title">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <p class="hero-title">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
      </div>
      <!-- <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> -->
    </div>

    <div
      id="carouselExampleCaptions"
      class="carousel show-mobile slide"
      data-bs-ride="carousel"
    >
    
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active btn"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          class="btn"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          class="btn"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        
      </div>
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <img
            src="@/assets/images/careers/bg-carousel.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-md-block d-lg-block d-xl-block">
            <p class="hero-title-1">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/careers/bg-carousel.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <p class="hero-title">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/images/careers/bg-carousel.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <p class="hero-title">
              Unleash your capability, In the place where technology became one
              with art.
            </p>
            <p class="hero-subtitle mt-4">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
            <button type="button" class="buttons btn btn-primary">
              See Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
</script>

<style lang="scss" scoped>
.btn {
  margin-top: -9em;
}
.hero-title {
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
  font-weight: 600;
  margin-top: -8em;
  line-height: 63px;
  text-align: center;
  color: white;
  @media screen and (max-width:567px){

  }
}
.hero-subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px !important;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;
  letter-spacing: -0.5px;

  color: #ffffff;
}
.buttons {
  width: 180px;
  height: 50px;
  margin-top: 1em;

  background: rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(7px);
}
.buttons:hover {
  background-color: #555555;
  color: white;
}

.carousel {
  @media screen and (max-width: 567px) {
    display: none;
  }
}
.show-mobile {
  display: none;
  @media screen and (max-width: 567px) {
    display: block;
    z-index: -3;
  }
}

@media screen and (max-width: 567px) {
  #hero {
    padding: 0;
    background-size: cover;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;

    }
  }
  .buttons{
        float: left;
      }
}
.hero-title-1 {
  font-size: 30px !important;
line-height: 39px;
text-align: left;
font-weight: 700;
color: #FFFFFF;
      }
      .hero-subtitle {
        text-align: left;
      }

</style>
