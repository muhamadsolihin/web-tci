<template>
  <section id="core-value">
    <BorderContainer
      :theme="'light'"
      :sections-length="sectionsLength"
      :current-section="currentSection"
    />
    <div class="container-custom">
      <div class="d-flex flex-column h-100 pt-4">
        <h1 class="title">Our Services</h1>
        <SectionNumberComponent
          class="ms-auto"
          :number="'03 / 11'"
          :section-name="'How We Do It'"
          :color="'#000'"
          style="margin-top: -3.5em"
        />
        <div class="shape"></div>

        <div class="row" style="margin-top: 10%">
          <div class="col-md-6">
            <ul class="nav flex-center bg-transparent flex-nowrap p-2 mb-8">
              <div class="row row-menu" style="margin-left: 18%">
                <div class="col-md-6" style="border: none">
                  <!--begin::Tab nav-->
                  <li class="nav-item menu-0 flex-equal">
                    <a
                      class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold active"
                      data-bs-toggle="tab"
                      href="#kt_lists_widget_3_tab_pane_1_consultant"
                      ><img
                        class="pic-nav"
                        src="@/assets/images/animate/consutant.svg"
                    /></a>
                  </li>

                  <!--end::Tab nav-->
                  <!--begin::Tab nav-->

                  <li
                    class="nav-item menu-1 flex-equal"
                    style="margin-top: 55px"
                  >
                    <a
                      class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                      data-bs-toggle="tab"
                      href="#kt_lists_data"
                      ><img
                        class="data-centre"
                        src="@/assets/images/animate/dataanimate.svg"
                    /></a>
                  </li>
                </div>
                <!--end::Tab nav-->
                <!--begin::Tab nav-->
                <div class="col-md-6">
                  <li class="nav-item menu-2 flex-equal mx-1">
                    <a
                      class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                      data-bs-toggle="tab"
                      href="#kt_lists_widget_3_tab_pane_2_digital"
                      ><img src="@/assets/images/animate/digital.svg"
                    /></a>
                  </li>
                  <li
                    class="nav-item menu-3 flex-equal"
                    style="margin-top: 55px"
                  >
                    <a
                      class="nav-link btn btn-active-white btn-color-gray-500 btn-active-color-gray-700 py-2 px-4 fs-6 fw-bold"
                      data-bs-toggle="tab"
                      href="#kt_lists_widget_3_tab_pane_4_cyber"
                      ><img src="@/assets/images/cyberanimate.svg"
                    /></a>
                  </li>
                </div>
                <!--end::Tab nav-->
              </div>
            </ul>
          </div>
          <!--end::Tabs-->
          <!--begin:Tab content-->
          <div class="col-md-6">
            <div class="tab-content content-field">
              <!--begin::Tab pane-->
              <div
                class="tab-pane fade active show"
                id="kt_lists_widget_3_tab_pane_1_consultant"
              >
                <!--begin::Section-->
                <el-col id="consultant" style="" :span="12"
                  ><div class="grid-content">
                    <div>
                      <div class="head1" style="text-align: justify">
                        IT Consultant
                      </div>

                      <div
                        class="subhead1 mt-4"
                        style="text-align: justify; margin-top: 2%"
                      >
                        With our IT Consultant services, we could help you
                        revamp your IT Environment and synchronize it with your
                        business needs, leveraging the experiences inside it. We
                        also offer consultancy on holistic, fast, and
                        cost-effective optimization of IT Systems and Processes
                        to ensure tangible business outcomes for you.
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
              <div
                class="tab-pane fade"
                id="kt_lists_widget_3_tab_pane_2_digital"
              >
                <!--begin::Chart-->
                <el-col id="consultant" style="margin-top: 10%" :span="12"
                  ><div class="grid-content">
                    <div>
                      <div class="head1" style="text-align: justify">
                        Digital Transformation
                      </div>

                      <div
                        class="subhead1 mt-4"
                        style="text-align: justify;  margin-top: 2%"
                      >
                        We are here to empower every enterprise across multiple
                        industries with the most suitable IT Solutions to build
                        up new technology-based business models that meet the
                        requirements of modern business environment.
                      </div>
                    </div>
                  </div>
                </el-col>
                <!--end::Chart-->
              </div>
              <!--end::Tab pane-->
              <!--begin::Tab pane-->
              <div class="tab-pane fade" id="kt_lists_data">
                <!--begin::Items-->
                <el-col id="consultant" style="margin-top: 10%" :span="12"
                  ><div class="grid-content">
                    <div>
                      <div class="head1" style="text-align: justify">
                        Data Center & Infrastructures
                      </div>

                      <div
                        class="subhead1 mt-4"
                        style="text-align: justify;  margin-top: 2%"
                      >
                        We will assist you in planning, designing, developing,
                        and implementing the infrastructure of your data center.
                        We deliver detailed documentation to facilitate the
                        upgrade, migration, and diagnostic processes.
                      </div>
                    </div>
                  </div>
                </el-col>
              </div>
              <div
                class="tab-pane fade"
                id="kt_lists_widget_3_tab_pane_4_cyber"
              >
                <el-col style="margin-top: 10%" :span="12"
                  ><div class="grid-content">
                    <div>
                      <div class="head1" style="text-align: justify">
                        Cyber Security
                      </div>

                      <div
                        class="subhead1 mt-4"
                        style="text-align: justify;  margin-top: 2%"
                      >
                        Our security experts develop a personal approach to each
                        customer based on best practices and enriched that with
                        our own experience. We offer a variety of services from
                        information security consulting to assessing, testing,
                        and improving the protection of applications and
                        networks for companies.
                      </div>
                    </div>
                  </div>
                </el-col>
              </div>
              <!--end::Items-->
            </div>
            <!--end::Tab pane-->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
import Hammer from "hammerjs";

import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";

const props = defineProps({
  sectionsLength: {
    type: Number,
    require: true,
  },
  currentSection: {
    type: Number,
    require: true,
  },
});
const emit = defineEmits(["swipeUp", "swipeDown"]);

onMounted(() => {
  var stage = document.getElementById("core-value");
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
#core-value {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  @media screen and (max-width: 567px) {
    padding: 0 40px 0;
  }
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    width: 100%;
    z-index: 2;
    @media screen and (max-width: 567px) {
      padding: 0;
      margin-top: 5em;
    }

    .title {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      line-height: 57px;
      @media screen and (max-width: 567px) {
        display: none;
      }
    }
    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin-top: 10px;
      @media screen and (max-width: 567px) {
        display: none;
      }
    }
    .cores {
      padding: 20px 0;
      width: 100%;
      overflow-x: scroll;
      .core {
        width: 350px;
        padding-right: 10px;
        transition: 0.5s ease-out;
        .description {
          font-family: "Albert Sans", sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 30px;
          color: #8d8f9a;
          margin-top: 20px;
          padding-right: 40px;
        }
        .circle {
          width: 18px;
          height: 18px;
          background: #e78448;
          border-radius: 30px;
        }
        .border-dash {
          width: 300px;
          height: 0px;
          border-top: 2px dashed #e78448;
          margin-left: 10px;
        }
      }
    }
  }
}

.row-menu {
  @media screen and (max-width: 567px) {
    margin-top: 3em;
    margin-left: -30% !important;
    width: 325px !important;
  }
}

.menu-1 {
  @media screen and (max-width: 567px) {
    margin-top: -40% !important;
    margin-left: 16em !important;
  }
}
.menu-2 {
  @media screen and (max-width: 567px) {
    margin-top: 35% !important;
    margin-left: -1em !important;
  }
}
.menu-3 {
  @media screen and (max-width: 567px) {
    margin-top: -40% !important;
    margin-left: 16em !important;
  }
}
.shape-blue {
  width: 68px;
  height: 22px;
  background-color: #0c4aa9;
  margin-right: 20px;
  margin-top: 10px;
  @media screen and (max-width: 567px) {
    display: none;
  }
}
.asset-2 {
  position: absolute;
  left: 5%;
  top: 0;
  height: 711px;
}
.container {
  // margin-top: -2em;
  padding: 80px;
  h2 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 3rem;
    line-height: 57px;
  }
}

.grid-content {
  transform: translateY(700px);
  animation: slideUp 1s ease-in-out forwards 0.5s;
}
@keyframes slideUp {
  0% {
    transform: translateY(300px);
  }
  100% {
    transform: translateY(0px);
  }
}

.batik-img {
  margin-left: -12%;
  margin-top: -9.1% !important;
  width: 262px;
  height: 195px;
  display: none;
  @media screen and (max-width: 1920px) {
    margin-left: -12%;
    margin-top: 11.5% !important;
    display: none;
  }
  @media screen and (max-width: 567px) {
    display: none;
  }
}
.head {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 500;
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
  @media screen and (max-width: 567px) {
    font-size: 30px !important;
    text-align: center !important;
    width: 241px !important;
    padding-top: 1em;
    margin-left: 1em;
  }
}
.hero-title {
  font-family: "Montserrat", sans-serif;
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 83px;
  text-align: start;
  color: black;

  @media screen and (max-width: 567px) {
    display: none;
  }
}
.subhead1 {
  font-family: "montserrat";
  font-size: 1em;
  width: 25em;
  font-weight: 400;
  color: #000000;
  @media screen and (max-width: 567px) {
    font-size: 12px;
    width: 322px !important;
    margin-left: -5% !important;
    text-align: center !important;
  }
}
.nav-link {
  border: none;
  
}


.btn.btn-active-white:focus:not(.btn-active),
.btn:hover{
  color: #7e8299;
  border-color: #ffffff;
  //   width: 120px;
  // height: 128px;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
  @media screen and (max-width: 768px) {
    // box-shadow: 0px 10px 20px rgba(114, 112, 112, 0.15);
    // width: 10px;
    margin-left: 0 !important;
    padding: 0;
    // padding: 50px;
    border-color: transparent !important;
    background: transparent !important;
  }
}


.data-centre {
  padding: 0 0 15px 0;
}
.btn.btn-active-white.show,
.show > .btn.btn-active-white {
  color: #7e8299;
  border-color: #ffffff;
  //   width: 120px;
  // height: 128px;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
  @media screen and (max-width: 768px) {
    // box-shadow: 0px 10px 20px rgba(114, 112, 112, 0.15);
    // width: 120px;
    // height: 128px;
    // padding: 50px;
    border-color: transparent !important;
    background: transparent;
  }
}
</style>
