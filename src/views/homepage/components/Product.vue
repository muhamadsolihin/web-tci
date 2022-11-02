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
          class="mx-auto mt-auto"
          :number="'06 / 11'"
          :section-name="'Our Product'"
          :color="'#fff'"
          style="margin-left:45em !important"
        />
      </div>
      <div class="container d-flex flex-column justify-content-center">
        <div class="d-flex flex-column align-items-start justify-content-start">
          <div class="container mt-5 pt-3">
            <el-row class="hide-mobile">
              <el-col :span="6"
                ><div class="grid-content card-ic">
                  <div class="card" style="border: none">
                    <img
                      src="@/assets/images/iclogo.svg"
                      class="card-img-top ic-image"
                      alt="responsive"
                    />
                    <hr
                      class="center"
                      style="width: 13.5em; margin: auto; margin-top: 4.5em"
                    />
                    <div class="card-body">
                      <h5 class="card-title">InterconnectDATA</h5>
                      <p class="card-text">2021</p>
                    </div>
                    <ul
                      class="list-group list-group-flush"
                      style="border: none"
                    >
                      <li class="list-group-item contact">Contact :</li>
                    </ul>
                    <div class="card-body" style="border: none">
                      <a href="https://www.facebook.com/Official.ICData/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="https://www.instagram.com/interconnectdata/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="https://mobile.twitter.com/icdata" target="_blank" class="btn-touch">
                        <img src="@/assets/images/twit.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6"
                ><div class="grid-content card-ic">
                  <div class="card" style="border: none">
                    <img
                      src="@/assets/images/rbilogo.png"
                      class="card-img-top ic-image"
                      alt="responsive"
                    />
                    <hr
                      class="center"
                      style="width: 13.5em; margin: auto; margin-top: 4.5em"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Reliable Bussiness Service</h5>
                      <p class="card-text">2021</p>
                    </div>
                    <ul
                      class="list-group list-group-flush"
                      style="border: none"
                    >
                      <li class="list-group-item contactrbi">Contact :</li>
                    </ul>
                    <div class="card-body" style="border: none">
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="https://www.instagram.com/reliablebusinessservices/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/twit.svg" />
                      </a>
                    </div>
                  </div></div
              ></el-col>
              <el-col :span="6"
                ><div class="grid-content card-ic">
                  <div class="card" style="border: none">
                    <img
                      src="@/assets/images/artlogo.svg"
                      class="card-img-top ic-image"
                      alt="responsive"
                    />
                    <hr
                      class="center"
                      style="width: 13.5em; margin: auto; margin-top: 4.5em"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Arthology Branding Consultant</h5>
                      <p class="card-text">2021</p>
                    </div>
                    <ul
                      class="list-group list-group-flush"
                      style="border: none"
                    >
                      <li class="list-group-item contactrbi">Contact :</li>
                    </ul>
                    <div class="card-body" style="border: none">
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="https://www.instagram.com/arthology.id/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/twit.svg" />
                      </a>
                    </div>
                  </div></div
              ></el-col>
              <el-col :span="6"
                ><div class="grid-content card-ic">
                  <div class="card" style="border: none">
                    <img
                      src="@/assets/images/makasilogo.svg"
                      class="card-img-top ic-image"
                      alt="responsive"
                    />
                    <hr
                      class="center"
                      style="width: 13.5em; margin: auto; margin-top: 4.5em"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Makasi</h5>
                      <p class="card-text">2021</p>
                    </div>
                    <ul
                      class="list-group list-group-flush"
                      style="border: none"
                    >
                      <li class="list-group-item contact">Contact :</li>
                    </ul>
                    <div class="card-body" style="border: none">
                      <a href="https://www.facebook.com/people/Makasi-Indonesia/100083488881963/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="https://www.instagram.com/makasipos/" target="_blank" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="https://twitter.com/makasipos" target="_blank" class="btn-touch">
                        <img src="@/assets/images/twit.svg" />
                      </a>
                    </div>
                  </div></div
              ></el-col>
            </el-row>
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
  var stage = document.getElementById("hero");
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
#hero {
  background-image: url("@/assets/images/bgproduct.png");
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 0 80px;
  position: relative;

  .container-border {
    width: 100%;
    padding: 0 0 0 120px;
    height: 100vh;

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

@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
  }
}

.section-number {
  @media screen and (max-width: 768px) {
    margin-top: -2em !important;
    margin-left: -19em !important;
  }
}

// @media screen and (max-width:768px){
//   display: none;
// }
@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;

    .container {
      overflow-x: scroll;
      width: 460px;
      margin-left: -7.8em;
      height: 589px !important;
      .hide-mobile {
        width: 1200px;
      }
    }
  }
}

.head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 6%;
  margin-left: -1em;
  @media screen and (min-width: 1920px) {
    margin-top: 6%;
  margin-left: 3em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 2em;
    margin-left: -2em;
  }
}
.card-ic {
  width: 17em;
  height: 33em;
  background-color: #fff;
  box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  @media (min-width: 992px) {
    margin-top: 0;
  }
  @media screen and (max-width: 768px) {
    margin-left: 50%;
  }
}

.ic-image {
  width: 12.5em;
  height: 4em;
  margin-top: 4em;
  margin-left: 10%;
}

.card-title {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  text-align: left;
  margin-top: 10%;
  margin-left: 6%;
}

.card-text {
  font-family: "Albert Sans";
  font-size: 1.125em;
  font-weight: 400;
  color: #8d8f9a;
  text-align: justify;
  margin-left: 6%;
}

.contact {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 20%;
  margin-left: 6%;
  text-align: justify;
}

.contactrbi {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  line-height: 1.8em;
  color: #000;
  margin-top: 10%;
  margin-left: 6%;
  text-align: justify;
}
img {
  text-align: center;
  margin: 5%;
  margin-top: 1%;
}
</style>
