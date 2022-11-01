<template>
  <section id="howwedo">
    <div class="container-border">
      <BorderContainer
        :theme="'dark'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container hero-collap">
        <div class="d-flex flex-row align-items-center">
          <h2 class="hero-title">How We Do It</h2>
          <SectionNumberComponent
            class="ms-auto"
            :number="'03 / 11'"
            :section-name="'How We Do It'"
            :color="'#000'"
            
          />
        </div>
        <div
          class="d-flex  flex-row justify-content-start align-items-start w-20"
        >
          <div class="shape-blue"></div>
        </div>
         
        
        <div
          class="row h-80 b"
          style="margin-top: 68px; padding-bottom: 0 !important"
        >

 
        <div class="row  collapse-mobile">
              <div class="col-12">
                <ul
                  class="nav flex-center justify-content-left bg-transparent pt-5"
                >
                  <div class="row  row-menu" style="width: 300px">
                    <div class="col-md-12" style="border: none">
                      <div class="row g-5">
                        <div class="col-2">
                          <!--begin::Tab nav-->
                          <li class="nav-item menu-0 flex-equal">
                            <a
                              class="nav-link btn btn-active-white text-center btn-color-gray-500 btn-active-color-gray-700 px-4 fs-6 fw-bold active"
                              data-bs-toggle="tab"
                              style="text-align: center"
                              href="#kt_lists_widget_3_tab_pane_1"
                              ><p class="no-title">01</p></a
                            >
                          </li>
                        </div>
                        <div class="col-2">
                          <li class="nav-item menu-1  flex-equal">
                            <a
                              class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                              data-bs-toggle="tab"
                              href="#kt_lists_adaptive"
                              ><p class="no-title">02</p></a
                            >
                          </li>
                        </div>
                        <div class="col-2">
                          <li class="nav-item menu-2 flex-equal">
                            <a
                              class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                              data-bs-toggle="tab"
                              href="#kt_lists_orien"
                              ><p class="no-title">03</p></a
                            >
                          </li>
                        </div>
                        <div class="col-2">
                          <li class="nav-item  " style="width:20px">
                            <a
                              class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                              data-bs-toggle="tab"
                              href="#kt_lists_sustainable"
                              ><p class="no-title">04</p></a
                            >
                          </li>
                        </div>
  
                       
                      </div>
                    </div>
                    <!--end::Tab nav-->
                    <!--begin::Tab nav-->
                    <div class="col-md-6"></div>
                    <!--end::Tab nav-->
                  </div>
                </ul>
              </div>
            </div>




          <div
            class="col-12 hide-mobile col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
          >
            <ul class="nav flex-center bg-transparent flex-nowrap p-2 mb-8">
              <div class="col-md-12">
                <!--begin::Tab nav-->
                <li class="nav-item active ">
                  <a
                    class="nav-link btn btn-active-white head py-2 px-4 fs-6 fw-bold active"
                    data-bs-toggle="tab"
                    href="#kt_lists_widget_3_tab_pane_1"
                    style="
                      text-align: left;
                      margin-left: 106px;
                      font-weight: 500 !important;
                    "
                    >01 &nbsp;Positive impact in development</a
                  >
                </li>

                <!--end::Tab nav-->
                <!--begin::Tab nav-->

                <li class="nav-item mt-3 flex-equal">
                  <a
                    class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists_adaptive"
                    style="
                      text-align: left;
                      margin-left: 103px;
                      font-weight: 500 !important;
                    "
                    >02 &nbsp;Adaptive solution development</a
                  >
                </li>
                <li class="nav-item mt-3 flex-equal">
                  <a
                    class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists_orien"
                    style="
                      text-align: left;
                      margin-left: 103px;
                      font-weight: 500 !important;
                    "
                    >03 &nbsp;User oriented group of talents</a
                  >
                </li>
                <li class="nav-item mt-3 flex-equal">
                  <a
                    class="nav-link btn btn-active-white head btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                    data-bs-toggle="tab"
                    href="#kt_lists_sustainable"
                    style="
                      text-align: left;
                      margin-left: 103px;
                      font-weight: 500 !important;
                    "
                    >04 &nbsp;Sustainable way of achieving</a
                  >
                </li>
              </div>
              <!--end::Tab nav-->
              <!--begin::Tab nav-->
              <!--end::Tab nav-->
            </ul>
          </div>

          <div
            class="col-12  col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
          >
            <div class="d-flex  flex-column justify-content-center h-100">
              <div class="tab-content ">
                <!--begin::Tab pane-->
                <div
                  class="tab-pane  active show"
                  id="kt_lists_widget_3_tab_pane_1"
                >
                  <!--begin::Section-->
                  <el-col id="#" style="margin-top: 10%" :span="12"
                    ><div class="grid-content ">
                      <div>
                        <div
                          class="open-reg-26"
                          style="text-align: justify; width: 574px"
                        >
                          Positive impact in development
                        </div>

                        <div
                          class="subhead1 "
                          style="
                            text-align: justify;
                            width: 34em;
                            height: 180px;
                          "
                        >
                          At every stage of product cycle we design solutions to
                          meet user needs and are easy to use. We invest our
                          time in costumer research, behavior learning and put
                          all data into the test. We leverage end-user centered
                          in our process to deliver creative solutions, create a
                          seamless customer experiences and explore new
                          opportunities.
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <!--end::Section-->
                  <!--begin::Section-->

                  <!--end::Section-->
                </div>
                <!--end::Tab pane-->
                <!--begin::Tab pane-->
                <div class="tab-pane -in" id="kt_lists_adaptive">
                  <!--begin::Chart-->
                  <el-col id="#" style="margin-top: 10%" :span="12"
                    ><div class="grid-content">
                      <div>
                        <div
                          class="open-reg-26 "
                          style="text-align: justify; width: 574px"
                        >
                          Adaptive solution development
                        </div>
                        <div
                          class="subhead1"
                          style="
                            text-align: justify;
                            width: 34em;
                            height: 180px;
                          "
                        >
                          We work with partners around The world from individual
                          Employers & regional start ups to multinational
                          enterprises In the public & private sectors, goverment
                          and communities. We work with partners around The
                          world from individual Employers & regional start ups
                          to multinational enterprises In the public & private
                          sectors, goverment and communities.
                        </div>
                      </div>
                    </div>
                  </el-col>
                  <!--end::Chart-->
                </div>
                <!--end::Tab pane-->
                <!--begin::Tab pane-->
                <div class="tab-pane fade" id="kt_lists_orien">
                  <!--begin::Items-->
                  <el-col id="#" style="margin-top: 10%" :span="12"
                    ><div class="grid-content">
                      <div>
                        <div
                          class="open-reg-26"
                          style="text-align: justify; width: 574px"
                        >
                          User oriented group of talents
                        </div>

                        <div
                          class="subhead1"
                          style="
                            text-align: justify;
                            width: 34em;
                            height: 180px;
                          "
                        >
                          We communicate and co-operate with each other and With
                          our communities. We communicate and co-operate with
                          each other and With our communities. We communicate
                          and co-operate with each other and With our
                          communities. We communicate and co-operate with each
                          other and With our communities. We communicate and
                          co-operate with each other and With our communities.
                        </div>
                      </div>
                    </div>
                  </el-col>
                </div>
                <div class="tab-pane fade" id="kt_lists_sustainable">
                  <el-col style="margin-top: 10%" :span="12"
                    ><div class="grid-content">
                      <div>
                        <div
                          class="open-reg-26"
                          style="text-align: justify; width: 574px"
                        >
                          Sustainable way of achieving
                        </div>

                        <div
                          class="subhead1"
                          style="
                            text-align: justify;
                            width: 34em;
                            height: 180px;
                          "
                        >
                          We question conventional wisdom & Challenge the status
                          quo. If there is a better way, we'll find it. We're
                          excited By ingenuity and thrilled to try something
                          new. We question conventional wisdom & Challenge the
                          status quo. If there is a better way, we'll find it.
                          We're excited By ingenuity and thrilled to try
                          something new. We question conventional wisdom &
                          Challenge the status quo. If there is a better way,
                          we'll find it. We're excited By ingenuity and thrilled
                          to try something new.
                        </div>
                      </div>
                    </div>
                  </el-col>
                </div>

                <!--end::Items-->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <img
            class="text-center batik-img"
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
  z-index: 2;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    @media screen and (max-width: 768px) {
      padding: 0;
      border: 0;
    }
  }
  .section-number {
    @media screen and (max-width: 768px) {
      margin-top: -7em;
      margin-left: -21em !important;
    }
  }

  .open-reg-26 {
    @media screen and (max-width: 768px) {
      font-size: 20px !important;
      width: 350px !important;
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
    margin-top:10%;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      line-height: 57px;
    }
  }
}

.nav-item {

  @media screen and (max-width: 768px) {
    margin-top: -20% !important;
    margin-left: -20% !important;
   
  }
}
.batik-img {
  margin-left: -12%;
  margin-top: -35%!important;

  @media screen and (min-width: 1920px) {
    margin-left: -12%;
    margin-top: 5.5% !important;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
}
.head {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height */

  color: #b8bdc6;
  @media screen and (max-width: 768px) {
  }
}
.hide-mobile{
  @media screen and (max-width: 768px) {
    display: none;
  }
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
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 83px;
  text-align: start;

  color: black;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 10% !important;
  }
}
.shape-blue {
  width: 68px;
  height: 22px;
  background-color: #0c4aa9;
  margin-right: 20px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
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
.grid-content{
  transform: translateY(600px);
  animation: slideUp 1s ease-in-out forwards 0.5s;
}

.collapse-mobile {
  display: none;
  @media screen and (max-width:768px){
    display: block;
    width: 350px;
    margin-left: 5.5em;
    padding-left: 2em;
    margin-top: -4em;
    margin-bottom: 4em;
  }

}
.sub-1-title {
  font-style: normal;
  font-weight: 500;
  position: absolute;
  font-size: 14px;
  width: 145px;
  margin-top: -5.2em;
  margin-bottom: 5em;
  padding-top: 9px;
  height: 42px;
  margin-left: -3em;
  text-align: center;
  line-height: 21px;
  /* identical to box height */
  color: #000000;
  border: 1px solid #000000;
  border-radius: 36px;
}
.no-title {
  width: 32px;
  height: 18px;
  text-align: center;
  margin-left: -18px;
  padding-top: 8px;
  font-size: 18px !important;
  line-height: 18px;
  font-weight: 400;
  color: #000000;
}
// .nav-link {
//   border: 1px solid #000000;
//   border-radius: 100%;
// }
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
  @media screen and (max-width: 768px) {
    font-size: 13px !important;

    width: 325px !important;
  }
}
.tab-content{
  @media screen and (max-width: 768px) {
 

    width: 325px !important;
  }
}
@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}
.tab-pane {
  margin-top: -5em;
  height: 180px;
}
.nav-link {
  border-radius: 36px;
  width: 25em;
  border: 1px solid #b8bdc6;
border-radius: 36px;
@media screen and (max-width:768px){
  border-radius: 100%;
  width: 20px;
}
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
  @media screen and (max-width:768px){

  width: 20px;
}
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
