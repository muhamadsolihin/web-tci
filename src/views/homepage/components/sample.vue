<template>
  <section id="hero">
    <div class="container-border">
      <img
        class="asset-2"
        src="@/assets/images/who-we-are/asset-2.png"
        alt=""
      />
      <div class="d-flex flex-row align-items-center">
        <h2 class="head">Our Product</h2>
        <SectionNumberComponent
          class="ms-auto section-number"
          :number="'06 / 11'"
          :section-name="'Our Product'"
          :color="'#fff'"
        />
      </div>
      <div class="container d-flex flex-column justify-content-center">
        <carousel :items-to-show="1">
    <slide v-for="Photolist in 5" :key="Photolist">
{{Photolist}}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
        
      </div>
    </div>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const Photolist = ref([
		require('@/assets/images/our-gallery/photo-1.png'),
		require('@/assets/images/our-gallery/photo-2.png'),
		require('@/assets/images/our-gallery/photo-3.png'),
		require('@/assets/images/our-gallery/photo-4.png'),
		require('@/assets/images/our-gallery/photo-5.png'),
		require('@/assets/images/our-gallery/photo-6.png'),
		require('@/assets/images/our-gallery/photo-7.png'),
		require('@/assets/images/our-gallery/photo-8.png'),
		require('@/assets/images/our-gallery/photo-9.png'),
		require('@/assets/images/our-gallery/photo-10.png'),
		require('@/assets/images/our-gallery/photo-11.png'),
		require('@/assets/images/our-gallery/photo-12.png'),
		require('@/assets/images/our-gallery/photo-13.png'),
		require('@/assets/images/our-gallery/photo-14.png'),
		require('@/assets/images/our-gallery/photo-15.png'),
		require('@/assets/images/our-gallery/photo-16.png'),
	]);

export default {
  name: 'App',
  components: {
    Carousel,
    Photolist,
    Pagination,
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
#hero {
  background-image: url("@/assets/images/bgproduct.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 80px;
  position: relative;
  z-index: 1;
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 0 0 120px;

    .container {
      height: 100vh;
      padding: 0;

      .hero-title {
        font-family: "Montserrat", sans-serif;
        font-size: 4.5rem;
        font-weight: 600;
        line-height: 83px;
        text-align: start;
        color: white;
      }
      .section-number {
        hr {
          width: 20px;
          border-top: 2px solid;
        }
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
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
  }
  .asset-1 {
    position: absolute;
    bottom: -90px;
    left: 45%;
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
  }
}
</style>
