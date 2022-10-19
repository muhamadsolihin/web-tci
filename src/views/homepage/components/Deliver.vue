<template>
  <section id="accelerated">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container">
        <div class="row h-100" style="margin-top: 0">
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
          >
            <img
              class="mx-auto pic-cto"
              src="@/assets/images/pkarief.png"
              alt="photo"
              style="width: 85%; object-fit: contain"
            />
          </div>

          <div
            class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
          >
            <div class="d-flex flex-column justify-content-center h-100">
              <SectionNumberComponent
                class="me-auto"
                :number="'02 / 11'"
                :section-name="'Mission'"
                :color="'#000000'"
                style="margin-top: 0"
              />
              <h2 class="mt-4">
                We Deliver <br />
                Consistent Solutions
              </h2>
              <p class="open-reg-25 mt-3">
                Using a combination of technology, process and talents we focus
                on our users needs and help to accelerate their business at any
                scale. We deliver consistent solutions and that is why we are
                all about the details and the end-users. <br />
                <br />
                We constantly listen to our user feedback through our
                development cycle to ensure a foundational setup for success.
                Whether it is to grow your business, get greater connection with
                customers.
              </p>
              <img
                class="mx-auto pic-cto-1"
                src="@/assets/images/imgGroup.png"
                alt="photo"
                style="width: 90%; object-fit: contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
</script>

<style lang="scss" scoped>
#accelerated {
  background-color: #eeeaea;
  height: 100vh;
  width: 100%;
  z-index: 1;
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
  }
  .asset-2 {
    position: absolute;
    left: 5%;
    top: 0;
    height: 711px;
    @media (max-width: 481px) {
      display: none;
    }
  }
  .container {
    padding: 80px;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      line-height: 57px;
      @media (max-width: 481px) {
        margin-left: -4em;
        font-size: 30px;
        line-height: 37px;
        width: 325px;
      }
    }
  }
}
.section-number {
  @media (max-width: 481px) {
    margin-left: -8em;
    margin-top: 20em !important;
  }
}
.open-reg-25 {
  @media (max-width: 481px) {
    font-size: 13px;
    line-height: 18px;
    width: 325px;
    margin-left: -9em;
  }
}
.pic-cto {
  @media (max-width: 481px) {
    width: 325.64px !important;
    height: 384px !important;
    margin-top: -105em;
    margin-left: -8em !important;
  }
}
.pic-cto-1 {
  @media (max-width: 481px) {
    width: 325.64px !important;
    height: 384px !important;
    margin-top: -8em;
    margin-left: -8em !important;
  }
}

.pic-cto {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.pic-cto:hover,
.pic-cto:focus,
.pic-cto:active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
