<template>
  <section id="vision">
    <div class="container-border">
      <img
        class="asset-2"
        src="@/assets/images/who-we-are/asset-2.png"
        alt=""
      />
      <div class="d-flex flex-row align-items-center">
        <h2 class="title">Our Works</h2>
        <SectionNumberComponent
          class="ms-auto section-number"
          :number="'02 / 02'"
          :section-name="'Our Works'"
          :color="'#000000'"
        />
      </div>
      <div
        class="d-flex flex-row  align-items-start justify-content-center mt-4"
      >
        <el-row class="py-5" :gutter="20" style="margin-top: 5px;">
          <div class="col-md-3">
            <div class="grid-content card-ic ">
              <div class="card" style="border: none">
                <img
                  src="@/assets/images/our-work/bmc.png"
                  class="card-img-top ic-image"
                  alt="responsive"
                />
                <hr
                  class="center"
                  style="width: 13.5em; margin: auto; margin-top: 4.5em"
                />
                <div class="card-body">
                  <h5 class="card-title">Batamec</h5>
                  <p class="card-text">
                    We did a rebrand and digital marketing planning for PT
                    Batamec Shipyard, a national shipyard company with its long
                    history.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3"> <div class="grid-content card-ic">
              <div class="card" style="border: none">
                <img
                  src="@/assets/images/our-work/collega.png"
                  class="card-img-top collega-img"
                  alt="responsive"
                />
                <hr
                  class="center"
                  style="width: 13.5em; margin: auto; margin-top: 4.5em"
                />
                <div class="card-body">
                  <h5 class="card-title">Collega</h5>
                  <p class="card-text">
                    We help Collega builds their Digital Banking product with
                    our experienced technical team.
                  </p>
                </div>
              </div>
            </div></div>
            <div class="col-md-3"><div class="grid-content card-ic">
              <div class="card" style="border: none">
                <img
                  src="@/assets/images/our-work/sedekah.png"
                  class="card-img-top sedekah-img"
                  alt="responsive"
                />
                <hr
                  class="center"
                  style="width: 13.5em; margin: auto; margin-top: 5.5em"
                />
                <div class="card-body">
                  <h5 class="card-title">Sedekah Ide untuk Bandung</h5>
                  <p class="card-text">
                    We did their Campaign Strategies, including their Digital
                    Marketing, Website Management, and Social Media Handling.
                  </p>
                </div>
              </div>
            </div></div>
            <div class="col-md-3"><div class="grid-content card-ic">
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
                  <p class="card-text">
                    We help Makasi POS build their Point of Sales app from
                    scratch.
                  </p>
                </div>
              </div>
            </div></div>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";

</script>

<style lang="scss" scoped>
#vision {
  background-color: #fff;
  background-size: cover;
  height: 100%;
  width: 100%;
  padding: 0 69px;
  position: relative;
  z-index: 1;
  @media screen and (min-width:1920px){
    padding: 0 85.8px;
  }
  .container-border {
    position: relative;
    padding-top: 5%;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;

    border-left: 1px solid #b8bdc6;
    @media screen and (max-width:768px){
          border:none;
  }
    .container {

        hr {
          width: 20px;
          border-top: 2px solid;
        }
      }
    }
    .asset-2 {
      position: absolute;
      left: -1px;
      top: 30%;
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

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 3rem;
  line-height: 57px;
  color: #000;
  @media screen and (max-width:768px){
    margin-top: 0.5em;
    font-size: 2em;
  }
}
.section-number {
  
        @media screen and (max-width:768px){
          display: none !important;
  }
}

.card-ic {
  width: 17em;
  height: 33em;
   z-index: 99;

  cursor: pointer;
  @media (min-width: 992px) {
    margin-top: 0;
  }
}

.card-ic {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transition: all 0.2s ease;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.card-ic:hover {

  transform: translateZ(0);
  box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.05);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  -webkit-transition-property: transform;
  transition-property: transform;
  z-index: 3;
}

.ic-image {
  width: 132px;
  height: 120px;
  margin-top: 4em;
  margin-left: 25%;
  float: center;
  justify-content: center;
}
.collega-img {
  margin-top: 21%;
  width: 250px;
  height: 125px;
}
.sedekah-img {
  margin-top: 15%;
  width: 226px;
  margin-left: 1.5em;
  height: 126px;
}

.card-title {
  font-family: "Albert Sans";
  font-size: 1.56em;
  font-weight: 600;
  text-align: left;
  margin-top: 10%;
 
  margin-left: 6%;
  @media screen and (max-width:768px){
          text-align: center;
          font-size: 25px;
  }
}


.card-text {
  font-family: "Open Sans";
  font-size: 1.125em;
  font-weight: 400;
  color: #8d8f9a;
  text-align: left;
  margin-left: 6%;

  line-height: 30px;
  /* or 167% */
  @media screen and (max-width:768px){
          text-align: justify;
          width: 250px;
          margin-left: 0;
  }
}
</style>
