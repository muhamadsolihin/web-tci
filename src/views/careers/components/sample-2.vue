<template>
	<section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
      	:sections-length="4"
				:current-section="1"
      />
      <div class="row">
        <div class="col-12 col-md-12 col-lg-7 col-xl-7  justify-content-center">
          <h1 class="hero-title mb-auto">
            Unleash your capability, In the place where technology became one
              with art.
          </h1>
          <div class="col-12 mt-4 col-md-12 col-lg-7 col-xl-7  justify-content-center">
            <p class="albert-reg-20 text-white text-description">
              We have the vision to connect human and technology as art and we
              want to give that opportunity to everyone.
            </p>
          </div>
        </div>
      </div>
      </div>
		<img
			class="asset-3"
			src="@/assets/images/who-we-are/asset-3.png"
			alt="asset"
		/>
	</section>
    <section style="height:40vh">
    </section>
</template>

<script setup>
	import SectionNumberComponent from '@/components/SectionNumberComponent.vue';
	import BorderContainer from '@/components/BorderContainer.vue';
</script>

<style lang="scss" scoped>
	#hero {
  background-image: url("@/assets/images/contact/bg.png");
  background-size: cover;
  height: 60vh;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    .hero-title {
      font-size: 32px;
      font-family: "Montserrat", sans-serif;
      margin-top: -40%;
      width: 70vw;
      font-weight: 600;
      line-height: 60px;
      text-align: center;
      color: white;
      @media screen and (min-width:1920px){
        font-size: 80px;
        line-height: 83px;
      }
    }
    .section-number {
      border: 2px solid #b8bdc6;
      border-radius: 25px;
      margin-right: auto;
      padding: 5px 10px;
      font-family: "IBM Plex Mono", sans-serif;
      hr {
        width: 20px;
        border-top: 2px solid;
      }
    }
    .albert-reg-20{
        text-align: center;
        font-size: 16px !important;
          width: 70vw !important;
        }
    .shape-blue {
      width: 68px;
      height: 22px;
      background-color: #0c4aa9;
      margin-right: 20px;
      margin-top: 10px;
    }
  }
  .asset-2 {
    position: absolute;
    left: -1px;
    top: 30%;
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}


	@media screen and (max-width: 768px) {
		#hero {
			padding: 0 30px;
			background-image: url('@/assets/images/our-work/bg-mobile.png');
			background-size: contain;
			.container-custom {
				height: 100vh;
				padding: 0;
				border: none;
				.hero-title {
					font-size: 40px !important;
					font-weight: 600;
					line-height: 48px;
          width: 325px;
				}
        .albert-reg-20{
          width: 280px !important;
        }
			}
		}
	}
</style>
