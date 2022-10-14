<template>
  <header class="py-5 bg-image-full" style="height:57em">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <p class="head">Our Product</p>
        </div>
        <div class="col-xl-6 col-md-6"></div>
      </div>
    </div>
    <div class="container">
      <el-row>
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
              <ul class="list-group list-group-flush" style="border: none">
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
              <ul class="list-group list-group-flush" style="border: none">
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
              <ul class="list-group list-group-flush" style="border: none">
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
              <ul class="list-group list-group-flush" style="border: none">
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
  </header>
  <!-- Content section-->
  <Journey/>
</template>

<script>
import Journey from "./Journey.vue";
export default {
  components: {
    Journey
},
};
</script>

<style lang="scss" scoped>
header {
  background: url("@/assets/images/bgproduct.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}
.head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 3em;
  margin-left: 0;
  @media (min-width: 992px) {
    margin-left: -4.5em;
    margin-top: 2em;
  }
}

.card-ic {
  width: 17em;
  height: 33em;
  background-color: #fff;
  box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  @media (min-width: 992px) {
    margin-top: 2.5em;
    
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
