<template>
  <section id="hero">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container">
        <div class="d-flex flex-row align-items-center">
          <h2 class="hero-title">Technology Stack</h2>
          <SectionNumberComponent
            class="ms-auto"
            :number="'04 / 11'"
            :section-name="'Technology Stack'"
            :color="'#fff'"
          />
        </div>

        <!-- <div class="row gallery-image" style="margin-bottom: 0">
            <div class="col-xl-6 gallery-image">
              <div class="img-box text-white rounded">
                <img
                class="img-box"
                  src="@/assets/images/galerry/pic1.png"
                  style="width: 35em; height: 15em"
                />
                <div class="transparent-box">
                  <div class="caption">
                    <p>Library</p>
                    <p class="opacity-low">Architect Design</p>
                  </div>
                </div>
              </div>

              <div class="row" style="margin-top: 30px; margin-left: -3em">
                <div class="col-6">
                  <img
                    src="@/assets/images/galerry/pic2.png"
                    style="width: 16.8em; height: 15em; float: right"
                  />
                </div>
                <div class="col-6">
                  <img
                    src="@/assets/images/galerry/pic3.png"
                    style="width: 16.8em; height: 15em; float: left"
                  />
                </div>
              </div>
            </div>

            <div class="col-xl-6">
              <div class="row" style="margin-bottom: 7.5em">
                <div class="col-6" style="margin-left: -2em">
                  <img
                    src="@/assets/images/galerry/pic4.png"
                    style="width: 17em; height: 31.7em"
                  />
                </div>
                <div class="col-6" style="margin-left: -1.5em">
                  <img
                    src="@/assets/images/galerry/pic5.png"
                    style="width: 17em; height: 15.3em"
                  />
                  <img
                    src="@/assets/images/galerry/pic6.png"
                    style="width: 17em; height: 15.3em; margin-top: 1em"
                  />
                </div>
              </div>
              
            </div>
          </div> -->




        <div class="gallery-image">
          <div class="img-box">
            <img
              class="img-box"
              src="@/assets/images/galerry/pic1.png"
              style="width: 35em; height: 15em"
            />
            <div class="transparent-box">
              <div class="caption">
                <p>Library</p>
                <p class="opacity-low">Architect Design</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img src="https://picsum.photos/350/250/?image=232" alt="" />
            <div class="transparent-box">
              <div class="caption">
                <p>Night Sky</p>
                <p class="opacity-low">Cinematic</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img src="https://picsum.photos/350/250/?image=431" alt="" />
            <div class="transparent-box">
              <div class="caption">
                <p>Tea Talk</p>
                <p class="opacity-low">Composite</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img src="https://picsum.photos/350/250?image=474" alt="" />
            <div class="transparent-box">
              <div class="caption">
                <p>Road</p>
                <p class="opacity-low">Landscape</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img src="https://picsum.photos/350/250?image=344" alt="" />
            <div class="transparent-box">
              <div class="caption">
                <p>Sea</p>
                <p class="opacity-low">Cityscape</p>
              </div>
            </div>
          </div>
          <div class="img-box">
            <img src="https://picsum.photos/350/250?image=494" alt="" />
            <div class="transparent-box">
              <div class="caption">
                <p>Vintage</p>
                <p class="opacity-low">Cinematic</p>
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
  width: 100%;
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
  padding: 20px;
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

.caption {
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box {
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.img-box:hover img {
  transform: scale(1.1);
}

.img-box:hover .transparent-box {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1;
}

.img-box:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}
</style>
