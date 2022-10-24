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
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="#" class="btn-touch">
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
                      <a href="#" class="btn-touch">
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
                      <a href="#" class="btn-touch">
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
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/fb.svg" />
                      </a>
                      <a href="#" class="btn-touch">
                        <img src="@/assets/images/ig.svg" />
                      </a>
                      <a href="#" class="btn-touch">
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
import Hammer from 'hammerjs';
import { onMounted } from 'vue';


const emit = defineEmits(['swipeUp', 'swipeDown']);
onMounted(() => {
		var stage = document.getElementById('hero');
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
      @media screen and (max-width:768px){
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

.section-number{
  @media screen and (max-width:768px){
    margin-left: -19em !important;
  }
}
.hide-mobile{
  @media screen and (max-width:768px){
    display: none;
  }
}
.head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 3%;
  margin-left: 0;
  
  @media screen and (max-width:768px){
    margin-top: 3em;
    margin-left: -3em;
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
