<template>
  <section id="hero">
    <div class="container-border">
      <img
        class="asset-2"
        src="@/assets/images/who-we-are/asset-2.png"
        alt=""
      />
      <div class="d-flex flex-row align-items-center">
        <h2 class="head">Our Gallery</h2>
        <SectionNumberComponent
          class="ms-auto"
          :number="'08 / 11'"
          :section-name="'Our Gallery'"
          :color="'#fff'"
        />
      </div>
      <div class="container d-flex flex-column justify-content-center">
        <div
          class="d-flex gallery-image flex-column align-items-start justify-content-start"
        >
          <div class="row" style="margin-bottom: 0">
            <div class="col-xl-6">
              <div class="img-box text-white rounded">
                <img
                  class="img-box"
                  src="@/assets/images/galerry/pic1.png"
                  style="width: 35em; height: 15em"
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Photo Studio</p>
                  </div>
                </div>
              </div>

              <div class="row g-4" style="margin-top:2px ; margin-left: 0">
                <div class="col-xl-6 col-md-6 img-box1">
                  <img
                  class="img-box1 img "
                    src="@/assets/images/galerry/pic2.png"
                    style="width: 16.8em; height: 15em;float: right"
                  />
                  <div class="transparent-box1">
                  <div class="caption1">
                    <p>Employee Of The Month</p>
                  </div>
                </div>
                </div>
                <div class="col-6 img-box1">
                  <img
                  class="img-box1 img"
                    src="@/assets/images/galerry/pic3.png"
                    style="width: 16.8em; height: 15em; margin-left: -2em !important; float: left"
                  />
                  <div class="transparent-box2" style="margin-left:-1.1em !important">
                  <div class="caption1">
                    <p>Prelaunch Makasi - POS</p>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div class="col-xl-6">
              <div class="row gallery-image" style="margin-bottom: 7.5em">
                <div class="col-6 img-box3 img" style="margin-left: -2em">
                  <img
                  class="img-box3 img"
                    src="@/assets/images/galerry/pic4.png"
                    style="width: 17em; height: 31.7em"
                  />
                  <div class="transparent-box3" style="margin-left:0 !important">
                  <div class="caption3">
                    <p>Kuliah Umum </p>
                  </div>
                </div>
                </div>
                <div class="col-6 " style="margin-left: -1.5em">
                  <img
                  class="img-box4"
                    src="@/assets/images/galerry/pic5.png"
                    style="width: 17em; height: 15.3em; z-index: 3;"
                  />
                  <div class="transparent-box4" style="margin-left:0 !important">
                  <div class="caption4">
                    <p>Video Shooting</p>
                  </div>
                </div>
                <div class="img-box5">
                  <img
                  class="img-box5"
                    src="@/assets/images/galerry/pic6.png"
                    style="width: 17em; height: 15.3em; margin-top: 1em"
                  />
                  <div class="transparent-box5" style="margin-left:0 !important">
                  <div class="caption5">
                    <p>Employee of The Month</p>
                  </div>
                </div>
              </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
</script>

<style lang="scss" scoped>
#hero {
  background-color: #263a5f;
  background-size: cover;
  height: 100vh;
  padding: 0 80px;
  position: relative;
  z-index: 1;
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
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
        border: 2px solid #b8bdc6;
        border-radius: 25px;
        margin-right: auto;
        padding: 5px 10px;
        font-family: "IBM Plex Mono", sans-serif;
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

.head {
  font-family: "Albert Sans";
  font-size: 3.4em;
  color: #fff;
  font-weight: 600;
  margin-top: 3%;
  margin-left: 0;
}

.gallery-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  transform: scale(1);
  transition: transform 0.4s ease;
}

.img-box {
  box-sizing: content-box;

  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
}

.img-box1 {
  box-sizing: content-box;
  width: 16.8em; height: 15em;
  margin-left: 0;
  overflow: hidden;
  display: inline-block;
  color: #fff;
  position: relative;
  background-color: transparent;
}

.caption {
  position: absolute;
  text-align: left;
  bottom: 5px;
  left: 5%;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.caption1 {
  position: absolute;
  text-align: left;
  bottom: 20px;
  z-index: 3;
  left: 5%;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}


.transparent-box {
  width: 35em;
  height: 15em;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}
.transparent-box1 {
  width: 16.8em; height: 15em;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  margin-left: 0;
  transition: background-color 0.3s ease;
}
.transparent-box2 {
  width: 15.9em; height: 15em;
  background-color: rgba(0, 0.5, 0, 0);
  position: absolute;
  top: 0;
  margin-left: 0;
  transition: background-color 0.3s ease;
}


// .img-box:hover img {
//   transform: scale(1.1);
// }

.img-box:hover .transparent-box {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1;
}


.img-box1:hover {
  cursor: pointer;
}

// .img-box1:hover img {
//   transform: scale(1.1);
// }

.img-box1:hover .transparent-box1 {
  background-color: rgba(0, 0, 0, 0.5);
}
.img-box1:hover .transparent-box2 {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box1:hover .caption1 {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box1:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}
.caption1 > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}


.img-box3 {

  box-sizing: content-box;

  margin-left: 0;
  overflow: hidden;
  display: inline-block;
  color: #fff;
  position: relative;
  background-color: transparent;
  

}

.caption3 {
  position: absolute;
  text-align: left;
  bottom: 5px;
  left: 5%;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.transparent-box3 {
  width: 17em; height: 31.7em;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  margin-left: 0;
  transition: background-color 0.3s ease;
}

.img-box3:hover {
  cursor: none;
}

// .img-box3:hover img {
//   transform: scale(1.1);
// }

.img-box3:hover .transparent-box3 {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box3:hover .caption3 {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box3:hover {
  cursor: pointer;
}

.caption3 > p:nth-child(2) {
  font-size: 0.8em;
}


.img-box4 {

box-sizing: content-box;

margin-left: 0;
overflow: hidden;
display: inline-block;
color: #fff;
position: relative;
background-color: transparent;


}

.caption4 {
position: absolute;
text-align: left;
bottom: 5px;
left: 5%;
opacity: 0;
transition: transform 0.3s ease, opacity 0.3s ease;
}
.transparent-box4 {
  width: 17em; height: 15.3em;
background-color: rgba(0, 0, 0, 0);
position: absolute;
top: 0;
margin-left: 0;
transition: background-color 0.3s ease;
}

.img-box4:hover {
cursor: none;
}

// .img-box3:hover img {
//   transform: scale(1.1);
// }

.img-box4:hover .transparent-box4 {
background-color: rgba(0, 0, 0, 0.5);
}

.img-box4:hover .caption4 {
transform: translateY(-20px);
opacity: 1;
}

.img-box4:hover {
cursor: pointer;
}

.caption3 > p:nth-child(2) {
font-size: 0.8em;
}



.img-box5 {

box-sizing: content-box;

margin-left: 0;
overflow: hidden;
display: inline-block;
color: #fff;
position: relative;
background-color: transparent;


}

.caption5 {
position: absolute;
text-align: left;
bottom: 5px;
left: 5%;
opacity: 0;
transition: transform 0.3s ease, opacity 0.3s ease;
}
.transparent-box5 {
  width: 17em; height: 15.3em;
background-color: rgba(0, 0, 0, 0);
position: absolute;
top: 0;
margin-left: 0;
transition: background-color 0.3s ease;
}

.img-box5:hover {
cursor: none;
}

// .img-box3:hover img {
//   transform: scale(1.1);
// }

.img-box5:hover .transparent-box4 {
background-color: rgba(0, 0, 0, 0.5);
}

.img-box5:hover .caption4 {
transform: translateY(-20px);
opacity: 1;
}

.img-box5:hover {
cursor: pointer;
}

.caption3 > p:nth-child(2) {
font-size: 0.8em;
}


</style>
