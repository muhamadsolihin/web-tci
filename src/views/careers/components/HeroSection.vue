<template>
  <section id="hero">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
      style="height: 80vh !important;"
    >
	<div class="container-custom justify-content-center">

      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active btn-control "
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
			<div class="container-custom d-flex flex-column justify-content-center">
			<BorderContainer
				:theme="'dark'"
				:sections-length="4"
				:current-section="1"
			/>
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
          <div class="container">
            <div class="carousel-caption d-none d-md-block" style="margin-top">
              <h1 class="hero-title mt-4">
                Unleash your capability, In the place where technology became
                one with art.
              </h1>
              <p class="hero-subtitle mt-4">
                We have the vision to connect human and technology as art and we
                want to give that opportunity to everyone.
              </p>
			  <button type="button" class="buttons btn btn-primary">See Detail</button>
            </div>
			
          </div>
        </div></div>
        <div class="carousel-item">
			<div class="container-custom d-flex flex-column justify-content-center">
			<BorderContainer
				:theme="'dark'"
				:sections-length="4"
				:current-section="1"
			/>
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
		  <div class="container">
            <div class="carousel-caption d-none d-md-block" style="margin-top">
              <h1 class="hero-title mt-4">
                Unleash your capability, In the place where technology became
                one with art.
              </h1>
              <p class="hero-subtitle mt-4">
                We have the vision to connect human and technology as art and we
                want to give that opportunity to everyone.
              </p>
			  <button type="button" class="buttons btn btn-primary">Primary</button>
            </div>
			
          </div></div>
		  
        </div>
        <div class="carousel-item">
			<div class="container-custom d-flex flex-column justify-content-center">
			<BorderContainer
				:theme="'dark'"
				:sections-length="4"
				:current-section="1"
			/>
          <img
            src="@/assets/images/contact/bg.png"
            class="d-block w-100"
            alt="..."
          />
		  <div class="container">
            <div class="carousel-caption d-none d-md-block" style="margin-top">
              <h1 class="hero-title mt-4">
                Unleash your capability, In the place where technology became
                one with art.
              </h1>
              <p class="hero-subtitle mt-4">
                We have the vision to connect human and technology as art and we
                want to give that opportunity to everyone.
              </p>
			  <button type="button" class="buttons btn btn-primary">Primary</button>
            </div>
			
          </div></div>
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
#carouselExampleIndicators {
  background-size: cover;
  height: 100vh !important;
  width: 100%;
  z-index: -2;	
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
	z-index: 3;

    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 55px !important;
      font-weight: 600;
      line-height: 83px;
      text-align: center;
      color: white;
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
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}

.carousel-caption {
  top: 30%;
  left: 25%;
  right: 25%;

  button {
    margin: 30px 20px 0px 0px;
	
  }
}
.carousel-indicators {
  margin-top: -10%;
}
.buttons{
	width: 180px;
height: 50px;


background: rgba(255, 255, 255, 0.3);
border: 1px solid rgba(255, 255, 255, 0.3);
backdrop-filter: blur(7px);
}
.buttons:hover {
  background-color: #555555;
  color: white;
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
