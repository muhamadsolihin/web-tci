<template>
  <section id="howwedo">
    <div class="container-fluid" style="background-color: #263a5f; height: 43vh; margin-top: 0;">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container hero-collap">
        <div class="d-flex flex-row align-items-center">
          <SectionNumberComponent
            class="ml-auto"
            :number="'04 / 11'"
            :section-name="'What We Do'"
            :color="'#fff'"
          />

        </div>
        <div
          class="d-flex flex-row justify-content-start align-items-start w-20"
        >
        <h2 class="hero-title">This is How We Work</h2>
        <img class="img-batik ms-auto"  src="@/assets/images/batik2.svg" />
        </div>
        <div
          class="row h-80"
          style="margin-top: 68px; padding-bottom: 0 !important"
        >
          <div
            class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
          >
           
          </div>

          <div
            class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
          >
            <div class="d-flex flex-column justify-content-center h-100">
              

     
            </div>
          </div>
        </div>
        <div class="container-fluid mt-5 pt-5">
          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
            >
              <img
                class="text-center batik-img mt-3"
                src="@/assets/images/batik-1.svg"
                style="
                  float: left;
                  justify-content: left;
                  height: 195px;
                  z-index: -2;
                "
              />
            </div>
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
#howwedo {
  background-color: white;
  height: 100vh;
  margin-top: 0;
  z-index: 1;
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;

  }
  .img-batik {
    float: right;
    margin-right: -12em !important; 
  }
 
  .asset-2 {
    position: absolute;
    left: 5%;
    top: 0;
    height: 711px;
  }
  .container {
    padding: 80px;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      line-height: 57px;
    }
  }
}
.batik-img {
  margin-left: -12em;
}
.head {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #b8bdc6;
}
.head1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */

  color: #000000;
}
.hero-title {

      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      color: #fff;
      margin-top:21px;
      line-height: 57px;
      @media (max-width: 768px) {
        margin-left: -4em;
        font-size: 30px;
        margin-top: 0.1em !important;
        line-height: 37px;
        width: 325px;
      }
    }

.shape-blue {
  width: 68px;
  height: 22px;
  background-color: #0c4aa9;
  margin-right: 20px;
  margin-top: 10px;
}
.head1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */

  color: #b8bdc6;
}
.subhead1 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  margin-top: 1.8em;
  font-size: 18px;
  z-index: 9;
  height: 200px;
  line-height: 30px;
  /* or 167% */

  color: #000000 !important;
}
.tab-pane {
  margin-top: -5em;
  height: 180px;
}
.nav-link {
  border-radius: 36px;
  width: 25em;
}
li:last-child {
  border-right: hidden !important;
}
.btn-check:checked + .btn.btn-active-white,
.btn-check:active + .btn.btn-active-white,
.btn.btn-active-white:focus:not(.btn-active),
.btn.btn-active-white:hover:not(.btn-active),
.btn.btn-active-white:active:not(.btn-active),
.btn.btn-active-white.active,
.btn.btn-active-white.show,
.show > .btn.btn-active-white {
  color: #000;
  border: 1px solid #e78448 !important;
  width: 25em;
  background-color: #ffffff;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn-check:checked + .btn.btn-active-white i,
.btn-check:active + .btn.btn-active-white i,
.btn.btn-active-white:focus:not(.btn-active) i,
.btn.btn-active-white:hover:not(.btn-active) i,
.btn.btn-active-white:active:not(.btn-active) i,
.btn.btn-active-white.active i,
.btn.btn-active-white.show i,
.show > .btn.btn-active-white i {
  color: #7e8299;
}
.btn-check:checked
  + .btn.btn-active-white
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn-check:active
  + .btn.btn-active-white
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:focus:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:hover:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:active:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-white.active .svg-icon svg [fill]:not(.permanent):not(g),
.btn.btn-active-white.show .svg-icon svg [fill]:not(.permanent):not(g),
.show > .btn.btn-active-white .svg-icon svg [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
  fill: #7e8299;
}
.btn-check:checked
  + .btn.btn-active-white
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn-check:active
  + .btn.btn-active-white
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:focus:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:hover:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-white:active:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-white.active .svg-icon svg:hover [fill]:not(.permanent):not(g),
.btn.btn-active-white.show .svg-icon svg:hover [fill]:not(.permanent):not(g),
.show
  > .btn.btn-active-white
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
}
.btn-check:checked + .btn.btn-active-white.dropdown-toggle:after,
.btn-check:active + .btn.btn-active-white.dropdown-toggle:after,
.btn.btn-active-white:focus:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-white:hover:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-white:active:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-white.active.dropdown-toggle:after,
.btn.btn-active-white.show.dropdown-toggle:after,
.show > .btn.btn-active-white.dropdown-toggle:after {
  color: #7e8299;
}

.btn.btn-light {
  color: #7e8299;
  border-color: #f5f8fa;

  background-color: #f5f8fa;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn.btn-light i {
  color: #7e8299;
}
.btn.btn-light .svg-icon svg [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
  fill: #7e8299;
}
.btn.btn-light .svg-icon svg:hover [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
}
.btn.btn-light.dropdown-toggle:after {
  color: #7e8299;
}
.btn-check:checked + .btn.btn-light,
.btn-check:active + .btn.btn-light,
.btn.btn-light:focus:not(.btn-active),
.btn.btn-light:hover:not(.btn-active),
.btn.btn-light:active:not(.btn-active),
.btn.btn-light.active,
.btn.btn-light.show,
.show > .btn.btn-light {
  color: #7e8299;

  border-color: #e4e6ef;
  background-color: #e4e6ef;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn-check:checked + .btn.btn-light i,
.btn-check:active + .btn.btn-light i,
.btn.btn-light:focus:not(.btn-active) i,
.btn.btn-light:hover:not(.btn-active) i,
.btn.btn-light:active:not(.btn-active) i,
.btn.btn-light.active i,
.btn.btn-light.show i,
.show > .btn.btn-light i {
  color: #7e8299;
}
.btn-check:checked + .btn.btn-light .svg-icon svg [fill]:not(.permanent):not(g),
.btn-check:active + .btn.btn-light .svg-icon svg [fill]:not(.permanent):not(g),
.btn.btn-light:focus:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-light:hover:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-light:active:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-light.active .svg-icon svg [fill]:not(.permanent):not(g),
.btn.btn-light.show .svg-icon svg [fill]:not(.permanent):not(g),
.show > .btn.btn-light .svg-icon svg [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
  fill: #7e8299;
}
.btn-check:checked
  + .btn.btn-light
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn-check:active
  + .btn.btn-light
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-light:focus:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-light:hover:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-light:active:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-light.active .svg-icon svg:hover [fill]:not(.permanent):not(g),
.btn.btn-light.show .svg-icon svg:hover [fill]:not(.permanent):not(g),
.show > .btn.btn-light .svg-icon svg:hover [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
}
.btn-check:checked + .btn.btn-light.dropdown-toggle:after,
.btn-check:active + .btn.btn-light.dropdown-toggle:after,
.btn.btn-light:focus:not(.btn-active).dropdown-toggle:after,
.btn.btn-light:hover:not(.btn-active).dropdown-toggle:after,
.btn.btn-light:active:not(.btn-active).dropdown-toggle:after,
.btn.btn-light.active.dropdown-toggle:after,
.btn.btn-light.show.dropdown-toggle:after,
.show > .btn.btn-light.dropdown-toggle:after {
  color: #7e8299;
}

.btn.btn-bg-light {
  border-color: #f5f8fa;

  background-color: #f5f8fa;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn-check:checked + .btn.btn-active-light,
.btn-check:active + .btn.btn-active-light,
.btn.btn-active-light:focus:not(.btn-active),
.btn.btn-active-light:hover:not(.btn-active),
.btn.btn-active-light:active:not(.btn-active),
.btn.btn-active-light.active,
.btn.btn-active-light.show,
.show > .btn.btn-active-light {
  color: #7e8299;
  border-color: #f5f8fa;

  background-color: #f5f8fa;
}
.btn-check:checked + .btn.btn-active-light i,
.btn-check:active + .btn.btn-active-light i,
.btn.btn-active-light:focus:not(.btn-active) i,
.btn.btn-active-light:hover:not(.btn-active) i,
.btn.btn-active-light:active:not(.btn-active) i,
.btn.btn-active-light.active i,
.btn.btn-active-light.show i,
.show > .btn.btn-active-light i {
  color: #7e8299;
}
.btn-check:checked
  + .btn.btn-active-light
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn-check:active
  + .btn.btn-active-light
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:focus:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:hover:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:active:not(.btn-active)
  .svg-icon
  svg
  [fill]:not(.permanent):not(g),
.btn.btn-active-light.active .svg-icon svg [fill]:not(.permanent):not(g),
.btn.btn-active-light.show .svg-icon svg [fill]:not(.permanent):not(g),
.show > .btn.btn-active-light .svg-icon svg [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
  fill: #7e8299;
}
.btn-check:checked
  + .btn.btn-active-light
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn-check:active
  + .btn.btn-active-light
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:focus:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:hover:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-light:active:not(.btn-active)
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g),
.btn.btn-active-light.active .svg-icon svg:hover [fill]:not(.permanent):not(g),
.btn.btn-active-light.show .svg-icon svg:hover [fill]:not(.permanent):not(g),
.show
  > .btn.btn-active-light
  .svg-icon
  svg:hover
  [fill]:not(.permanent):not(g) {
  transition: fill 0.3s ease;
}
.btn-check:checked + .btn.btn-active-light.dropdown-toggle:after,
.btn-check:active + .btn.btn-active-light.dropdown-toggle:after,
.btn.btn-active-light:focus:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-light:hover:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-light:active:not(.btn-active).dropdown-toggle:after,
.btn.btn-active-light.active.dropdown-toggle:after,
.btn.btn-active-light.show.dropdown-toggle:after,
.show > .btn.btn-active-light.dropdown-toggle:after {
  color: #7e8299;
}

.btn.btn-primary {
  color: #ffffff;
  border-color: #b8bdc6;
  border: none;
  background-color: #b8bdc6;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn.btn-primary i {
  color: #ffffff;
}
</style>
