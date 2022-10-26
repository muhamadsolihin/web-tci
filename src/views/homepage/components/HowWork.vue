<template>
  <section id="howwedo">
    <div
      class="container-fluid bg-biru"
      
    >
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
            class="d-flex row-title flex-row justify-content-start align-items-start w-10" 
          >
            <h2 class="hero-title">This is How We Work</h2>
            <img class="img-batik ms-auto" src="@/assets/images/batik2.svg" />
          </div>
          <div
            class="row text-body h-80"
            style="margin-top: 68px; padding-bottom: 0 !important"
          >
            <div
              class="col-12 card-1 col-md-4 col-lg-4 col-xl-4 order-2 order-md-1 order-lg-1 order-xl-1"
            >
              <p class="title">
                Discover,<br />
                design & build
              </p>
              <p class="subtitle">
                We delivered tailored Digital and IT Solutions by listening to
                our user needs, build prototype based on real feedback and apply
                user feedback into scalable MVP. The way our end products are
                built to give a great user experience.
              </p>
            </div>
            <div
              class="col-12 card-1 col-md-4 col-lg-4 col-xl-4 order-2 order-md-1 order-lg-1 order-xl-1"
            >
              <p class="title">
                We grow <br />
                your business
              </p>
              <p class="subtitle">
                Our expertise work passionately in each product cycle to make
                sure our users gain the benefit of growing their business. Our
                solution will make it easier for them to engage with customers
                and improve consistency.
              </p>
            </div>
            <div
              class="col-12 card-3 col-md-4 col-lg-4 col-xl-4 order-2 order-md-1 order-lg-1 order-xl-1"
            >
              <p class="title">
                Dedicated for <br />
                excellence
              </p>
              <p class="subtitle">
                Our team fully assessed in terms of skills, experience, and
                personality. Our objective is to deeply analyzed users’ needs to
                create solution that speaks to your specific demographic and
                meet your specified requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import Hammer from "hammerjs";
import { onMounted } from "vue";

const emit = defineEmits(["swipeUp", "swipeDown"]);
onMounted(() => {
  var stage = document.getElementById("howwedo");
  var hammertime = new Hammer.Manager(stage);
  var Swipe = new Hammer.Swipe();
  hammertime.add(Swipe);
  hammertime.on("swipeup", function (ev) {
    emit("swipeUp");
  });
  hammertime.on("swipedown", function (ev) {
    emit("swipeDown");
  });
});
</script>

<style lang="scss" scoped>
#howwedo {
  background-color: white;
  height: 100vh;
  margin-top: 0;
  z-index: 1;
  @media (max-width: 768px) {
     height: 100%;
    }
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;
    @media (max-width: 768px) {
      padding: 0 0px;
    }
  }
  .section-number {
    @media (max-width: 768px) {
      margin-left: 0em !important;
      margin-top: -3em;
    }
  }
  .img-batik {
    float: right;
    margin-top: -3.6em !important ;
    margin-right: -12em !important ;
    @media screen and (max-width: 1920px) {
      margin-top: 2em !important;
      margin-right: -24em !important ;
    }
    @media (max-width: 768px) {
      margin-right: -10em !important;
    }
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

.bg-biru{
background-color: #263a5f; height: 35vh; margin-top: 0;
@media screen and (max-width:768px){
  height: 20vh;
}
}
.row-title{
  @media screen and (max-width:768px){
  margin-top:-18em
  }
}

.hero-title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  color: #fff;
  margin-top: 21px;
  line-height: 57px;
  @media (max-width: 768px) {
    
    margin-left: 0 !important;
    font-size: 2rem !important ;
    margin-top: 9.5em !important;
    line-height: 35px !important; 
    width: 325px !important;
    margin-bottom: 1.5em !important;
  }
}
.card-1 {
  border-left: 1px solid #b8bdc6;
}

.card-3 {
  border-left: 1px solid #b8bdc6;
  border-right: 1px solid #b8bdc6;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  margin-top: 3em !important;
  font-size: 35px;
  line-height: 43px;
  letter-spacing: -1.82px;
  color: #000000;
  @media screen and (max-width:768px){
    font-size: 20px;
    width: 239px;

    line-height: 20px;
  }
}
.subtitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */

  color: #8d8f9a;
}
.text-body {
  margin-top: -13.5% !important;
}
</style>
