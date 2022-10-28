<template>
  <section id="howwedo">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container  hero-collap">
        <div class="d-flex flex-row align-items-center">
          <h2 class="hero-title">Our Services</h2>
          <SectionNumberComponent
            class="ms-auto"
            :number="'05 / 11'"
            :section-name="'Our Services'"
            :color="'#000'"
          />
        </div>
        <div
          class="d-flex flex-row justify-content-start align-items-start w-100"
        >
          <div class="shape-blue"></div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <ul
              class="nav flex-center bg-transparent overflow-auto flex-nowrap p-2 mb-8"
            >
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
                      ><img src="@/assets/images/animate/dataanimate.svg"
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
            <div class="tab-content">
              <!--begin::Tab pane-->
              <div
                class="tab-pane fade active show"
                id="kt_lists_widget_3_tab_pane_1_consultant"
              >
                <!--begin::Section-->
                <el-col id="consultant" style="margin-top: 10%" :span="12"
                  ><div class="grid-content">
                    <div>
                      <div class="head1" style="text-align: justify">
                        IT Consultant
                      </div>

                      <div
                        class="subhead1 mt-4"
                        style="text-align: justify; width: 34em; margin-top: 2%"
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
                        style="text-align: justify; width: 34em; margin-top: 2%"
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
                        style="text-align: justify; width: 34em; margin-top: 2%"
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
                        style="text-align: justify; width: 34em; margin-top: 2%"
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

          <div class="row">
            <div
              class="col-12 col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
            >
              <img
                class="text-center batik-img "
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
import Hammer from 'hammerjs';
import { onMounted } from 'vue';


const emit = defineEmits(['swipeUp', 'swipeDown']);
onMounted(() => {
		var stage = document.getElementById('howwedo');
		var hammertime = new Hammer.Manager(stage);
		var Swipe = new Hammer.Swipe();
		hammertime.add(Swipe);
		hammertime.on('swipeup', function (ev) {
			emit('swipeUp');
		});
		hammertime.on('swipedown', function (ev) {
			emit('swipeDown');
		});
	});
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
    height: 100vh;
    margin-top: 5%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    @media screen and (max-width: 768px) {
      padding: 0;
      z-index: 5;
    }
  }
  .section-number {
    @media screen and (max-width: 768px) {
      margin-left: -10% !important;
    }
  }
  .row-menu {
    @media screen and (max-width: 768px) {
      margin-top: 3em;
      margin-left: -30% !important;
      width: 325px !important;
      
    }
  }

  .menu-1 {
    @media screen and (max-width: 768px) {
      margin-top: -40% !important;
      margin-left: 16em !important;
    }
  }
  .menu-2 {
    @media screen and (max-width: 768px) {
      margin-top: 35% !important;
      margin-left: -1em !important;
    }
  }
  .menu-3 {
    @media screen and (max-width: 768px) {
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
    @media screen and (max-width: 768px) {
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
}
.batik-img {
  margin-left: -12%;
  margin-top: -9.1% !important;
  display: none;
  @media screen and (max-width: 1920px) {
    margin-left: -12%;
    margin-top: 15.1% !important;

  }
  @media screen and (max-width: 768px) {
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
  @media screen and (max-width: 768px) {
    font-size: 30px !important;
    text-align: center !important;
    width: 241px !important;
    padding-top: 1em;
    margin-left: 1.5em;
  }
}
.hero-title {
  font-family: "Montserrat", sans-serif;
  font-size: 4.5rem;
  font-weight: 600;
  line-height: 83px;
  text-align: start;
  color: black;

  @media screen and (max-width: 768px) {
    display: none;
  }
}
.subhead1 {
  font-family: "montserrat";
  font-size: 1em;
  font-weight: 400;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 322px !important;
    text-align: center !important;
  }
}
.nav-link {
  border: none;
}

.btn-check:checked + .btn.btn-active-white,
.btn-check:active + .btn.btn-active-white,
.btn.btn-active-white:focus:not(.btn-active),
.btn.btn-active-white:hover:not(.btn-active),
.btn.btn-active-white:active:not(.btn-active),
.btn.btn-active-white.active,
.btn.btn-active-white.show,
.show > .btn.btn-active-white {
  color: #7e8299;
  border-color: #ffffff;
  border-width: 120px;
  border-bottom-width: 128px;
  background-color: #fff;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
  @media screen and (max-width: 768px) {
    box-shadow: 0px 10px 20px rgba(114, 112, 112, 0.15);
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
  border-color: #00b2ff;
  background-color: #00b2ff;
  box-shadow: 0px 10px 40px rgba(114, 112, 112, 0.15);
}
.btn.btn-primary i {
  color: #ffffff;
}
</style>
