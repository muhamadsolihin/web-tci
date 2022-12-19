<template>
  <section id="howwedo">
    <div class="container-custom ">
      <BorderContainer
        :theme="'light'"
        :sections-length="sectionsLength"
        :current-section="currentSection"
      />
      <div class="row h-100  blog-row">
        <div
          class="col-12 section-blog col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <div class="d-flex flex-column justify-content-center h-100">
            <SectionNumberComponent
              class="mt-4 me-auto d-none d-md-flex"
              :number="'09 / 11'"
              :section-name="'Our Blog'"
              :color="'#000000'"
              style="margin-left: 10%"
            />
            <p class="headblog">Our Blog</p>
            <p class="subhead">
              The success of our clients is a big part of who we are and how we
              believe in our values. Their journey becomes our story of passion
              and persistence.
            </p>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2"
        >
          <div class="justify-content-center h-100">
            <el-carousel

              trigger="click"
              height="32.5em"
              width="37em"
              style="margin-top: 20%; margin-left: 4%"
            >
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none">
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Lif
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div></a>
              </el-carousel-item>
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none" >
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Life
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div>
              </a>
              </el-carousel-item>
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none" >
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Life
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
          
        </div>
      </div>

      <div class="row h-100 show-mobile">
        <div
          class="col-12 section-blog col-md-6 col-lg-6 col-xl-6 order-2 order-md-1 order-lg-1 order-xl-1"
        >
          <div class="d-flex flex-column justify-content-center h-100">
            <SectionNumberComponent
              class="mt-4 me-auto d-none d-md-flex"
              :number="'09 / 11'"
              :section-name="'Our Blog'"
              :color="'#000000'"
              style="margin-left: 3em"
            />
            <p class="headblog">Our Blog</p>
            <p class="subhead">
              The success of our clients is a big part of who we are and how we
              believe in our values. Their journey becomes our story of passion
              and persistence.
            </p>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 order-xl-2"
        >
          <div class="justify-content-center h-100">
            <el-carousel
              trigger="click"
              height="32.5em"
              width="37em"
              style="margin-top: 20%; margin-left: 4%"
            >
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none" >
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Life
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none" >
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Life
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div>
                </a>
              </el-carousel-item>
              <el-carousel-item>
                <a href="https://teknologicakrainternasional.com/blog/" style="text-decoration:none">
                <div class="card btn" style="width: 36.6em; border: none">
                  <img
                    src="@/assets/images/galerry/blog.png"
                    class="card-img-top"
                    alt="responsive"
                  />
                  <div class="card-body">
                    <h5 class="card-title">
                      How Data Could Impact Our Daily Life
                    </h5>
                    <p class="card-text">
                      Saat membicarakan soal data, apa yang pertama kali
                      terlintas dipikiranmu?
                    </p>
                  </div>
                </div>
                </a>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>

    </div>  
    
  </section>
  
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";

import Hammer from "hammerjs";
import { onMounted } from "vue";

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
  height: 100vh;
  width: 100%;
  padding: 0 140px;
  background-color: white;
  
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
  .container-custom {
    padding: 80px 0;
    height: 100vh;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
    @media screen and (max-width: 768px) {
      padding: 15px;
      border: none;
    }
  }
  .card {
    background: #ffffff;
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
    padding: 20px;
  }
  .blog-row {
    margin-top: -6em;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .card-title {
    @media screen and (max-width: 992px) {
      font-size: 18px !important;
      width: 50%;
      line-height: 22px;
    }
    @media screen and (max-width: 768px) {
      font-size: 18px !important;
      line-height: 22px;
    }
  }
  .show-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
      margin-top: 6em;
      margin-left: -2em !important;
    }
  }

  .headblog {
    font-family: "montserrat";
    font-size: 3.4em;
    font-weight: 600;
    line-height: 67px;
    /* identical to box height */
    text-align: left;
    margin-left: 6%;
    margin-top: 2%;
    letter-spacing: -2.81895px;
    @media screen and (max-width: 992px) {
      font-size: 30px;
      line-height: 37px;
    }
    @media screen and (max-width: 768px) {
      font-size: 30px;
      line-height: 37px;
    }
  }
  .subhead {
    font-family: "open sans";
    font-weight: 400;
    font-size: 2.1em;
    text-align: justify;

    line-height: 50px;
    margin-left: 6%;
    @media screen and (max-width: 992px) {
      font-size: 18px;
      line-height: 25px;
      /* or 192% */

      color: #8d8f9a;
    }
    @media screen and (max-width: 768px) {
      font-size: 18px;
      line-height: 25px;
      /* or 192% */

      color: #8d8f9a;
    }
  }
  .card-title {
    font-family: "montserrat";
    font-size: 1.87em;
    font-weight: 600;
    text-align: justify;
    margin-left: -3%;
  }
  .card-text {
    font-family: "montserrat";
    text-align: justify;
    font-weight: 400;
    font-size: 23px;
    line-height: 31px;
    margin-left: -3%;
    color: #b8bdc6;
    @media screen and (max-width: 768px) {
      font-size: 13px;
      line-height: 22px;
      width: 295px;
    }
  }

  .open-reg-26 {
    @media screen and (max-width: 768px) {
      font-size: 20px !important;
    }
  }
}

.section-blog {
  margin-top: -3em !important;
}

input[type="email"] {
  display: inline-block;
  z-index: 99;
  width: 924px;
  height: 100px;
  padding: 18px 36px;
  margin: 8px 0;
  box-sizing: border-box;
  height: 70px;
  margin-top: 4em;
  border-radius: 20px;
  border: none;
  background: #ffffff;
  box-shadow: 0px 80px 80px rgba(0, 0, 0, 0.05);
}
input,
input::-webkit-input-placeholder {
  font-size: 16px;
  line-height: 3;
}

.bt {
  margin-left: -160px;
  font-size: 16px;
  display: inline-block;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 20px;

  /* Only necessary for .btn */
  border: none;
  cursor: pointer;
  background-color: #48b774;
  color: #fff;
}
</style>
