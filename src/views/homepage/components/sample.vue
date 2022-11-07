<template>
  <section id="vision">
    <div class="container-custom">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="d-flex flex-row align-items-center flex-wrap">
        <h2>How We Do It</h2>
        <SectionNumberComponent
          class="ms-auto d-none d-md-flex"
          :number="'03 / 22'"
          :section-name="'How We Do It'"
          :color="'#000000'"
        />
      </div>
      <div class="shape"></div>
      <div
          class="row h-80 "
          style="margin-top: 10%; padding-bottom: 0 !important;margin-left: 5em;"
        >
          <div class="row collapse-mobile">
            <div class="col-12">
              <ul class="nav bg-transparent pt-5">
                <div class="row row-menu" style="width: 300px">
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
                        <li class="nav-item menu-1 flex-equal">
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
                        <li class="nav-item" style="width: 20px">
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
            <ul class="nav p-2 mb-8">
              <div class="col-md-12">
                <!--begin::Tab nav-->
                <li class="nav-item active">
                  <a
                    class="nav-link btn btn-active-white head py-2 px-4 fs-6 fw-bold active"
                    data-bs-toggle="tab"
                    href="#kt_lists_widget_3_tab_pane_1"
                    style="
                      text-align: left;
                      /* margin-left: 106px; */
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
                      /* margin-left: 103px; */
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
                      /* margin-left: 103px; */
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
                      /* margin-left: 103px; */
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
            class="col-12 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
          >
            <div class="justify-content-center h-100">
              <div class="tab-content content-field">
                <!--begin::Tab pane-->
                <div
                  class="tab-pane active show"
                  id="kt_lists_widget_3_tab_pane_1"
                >
                  <!--begin::Section-->
                  <el-col id="#" style="margin-top: 10%" :span="12"
                    ><div class="grid-content">
                      <div>
                        <div
                          class="open-reg-26 tithe-field"
                          style="text-align: justify"
                        >
                          Positive impact in development
                        </div>

                        <div
                          class="subhead1"
                          style="text-align: justify; height: 180px"
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
                          class="open-reg-26"
                          style="text-align: justify; width: 574px"
                        >
                          Adaptive solution development
                        </div>
                        <div
                          class="subhead1"
                          style="
                            text-align: justify;
                            /* width: 34em; */
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
                            /* width: 34em; */
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
                            /* width: 34em; */
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
  </section>
</template>

<script setup>
import { defineProps, ref, onMounted } from "vue";
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

const imageHover = ref(false);

const emit = defineEmits(["swipeUp", "swipeDown"]);

onMounted(() => {
  var stage = document.getElementById("vision");
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
#vision {
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 3rem;
      line-height: 57px;
    }
    .shape {
      width: 38px;
      height: 22px;
      background-color: #0c4aa9;
      margin-top: 10px;
    }
    .mission {
      margin-top: -150px;
      .text-mission {
        margin-left: 40px;
        width: 50%;
      }
      .mission-image {
        width: 45%;
        margin: 0 auto 0 0;
      }
    }
    .vision-image {
      width: 45%;
      margin: 0 0 0 auto;
    }
  }
}

@media screen and (max-width: 768px) {
  #vision {
    padding: 0 30px;
    .container-custom {
      height: 100vh;
      padding: 80px 0;
      border: none;
      h2 {
        font-size: 20px;
        font-weight: 600;
        line-height: 20px;
      }
      h3 {
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
      }
      li {
        font-size: 14px;
        margin-top: 5px;
        line-height: 30px;
      }
      .mission {
        margin: 20px 0;
        .text-mission {
          margin-top: 20px;
          margin-left: 0;
          width: 100%;
        }
        .mission-image {
          width: 70%;
          margin: 0 auto;
        }
      }
      .vision-image {
        width: 70%;
        margin: 0 auto;
      }
    }

    .image-hover,
    .image-unhover,
    .title-smaller,
    .title-bigger,
    .text-smaller,
    .text-bigger {
      animation: 0s;
    }
  }
}

.image-hover {
  animation: popup 1s ease-out;
  transform: scale(1.1);
}
.image-unhover {
  animation: popdown 1s ease-out;
  transform: scale(1);
}
@keyframes popup {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes popdown {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.title-smaller {
  animation: smaller 1s;
  font-size: 30px;
}
@keyframes smaller {
  from {
    font-size: 35px;
  }
  to {
    font-size: 30px;
  }
}
.title-bigger {
  animation: bigger 1s;
  font-size: 35px;
}
@keyframes bigger {
  from {
    font-size: 30px;
  }
  to {
    font-size: 35px;
  }
}

.text-smaller {
  animation: textsmaller 1s;
  font-size: 21px;
}
@keyframes textsmaller {
  from {
    font-size: 24px;
  }
  to {
    font-size: 21px;
  }
}
.text-bigger {
  animation: textbigger 1s;
  font-size: 24px;
}
@keyframes textbigger {
  from {
    font-size: 21px;
  }
  to {
    font-size: 24px;
  }
}
</style>
