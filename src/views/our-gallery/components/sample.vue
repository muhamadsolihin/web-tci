<template>
  <section id="gallery">
    <div class="container-custom">
      <div class="row g-3">
        <div class="col-12 col-md-6 col-lg-6 col-xl-6">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover hover-2 text-white rounded">
                <img :src="photoList[0]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description">
                    Photo Studio session Mr.Jeffry, Mr.Kiki, Mr.Iwan, Mr.Deny
                    with Mr. Andreas Reza, our commissioner.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[1]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-2">
                  <p class="hover-2-description">
                    Our employee attending the “Employee of the Month” event.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[2]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-2">
                  <p class="hover-2-description">
                    TCI representatives attending a meeting for Sedekah Ide
                    untuk Bandung with IAI and Mayor of Bandung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 col-lg-3 col-xl-3">
          <div class="hover-3 hover-2 text-white rounded">
            <img :src="photoList[3]" alt="photo" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-4">
              <p class="hover-2-description mb-5">
                Mrs. Karina being a speaker on her Public Lecture session.
              </p>
            </div>
          </div>
        </div>
        <div class="col-6 col-md-3 col-lg-3 col-xl-3">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[4]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-3">
                  <p class="hover-2-description">
                    The people behind TCI’s Company Profile video shoot.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[5]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-3">
                  <p class="hover-2-description">
                    Sales team attending as a speaker on a webinar held by
                    DISKOMINFO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 hide-on-mobile">
          <div class="d-flex flex-row h-100">
            <!-- <img
              :src="photoList[6]"
              alt="photo"
              style="width: 49%; height: 98%"
            /> -->
            <div class="hover-4 hover-2 text-white rounded">
              <img :src="photoList[6]" alt="photo" />
              <div class="hover-overlay"></div>
              <div class="hover-2-content px-5 py-3">
                <p class="hover-2-description mb-5">
                  Mr. Highlander being a speaker on her Public Lecture session,
                  with the theme Pengaruh Data terhadap kehidupan sehari - hari
                </p>
              </div>
            </div>

            <div class="d-flex flex-column ms-4">
              <div class="hover-5 hover-2 text-white rounded">
                <img :src="photoList[16]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-4 py-4">
                  <p class="hover-2-description mb-5">lorem ipsum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 hide-on-mobile">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover-6 hover-2 text-white rounded">
                <img :src="photoList[7]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-2">
                  <p class="hover-2-description">
                    Photo session Sedekah Ide untuk Bandung with IAI Jawa Barat
                    and Mayor of Bandung.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[8]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-3">
                  <p class="hover-2-description">
                    Our COO, Mr. Arief Rachman being a speaker on his Public
                    Lecture session.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[9]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-3">
                  <p class="hover-2-description">
                    Our employee dressing as national hero on the “Employee of
                    the Month” event that coincides with Indonesian National
                    Heroes Day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 hide-on-mobile">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[10]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content py-4">
                  <p class="hover-2-description">
                    Our CEO, Mrs. Rany Fardiany being a speaker on her Public
                    Lecture session.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="hover-1 mt-1 hover-2 text-white rounded">
                <img :src="photoList[11]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description">
                    Photo Session with BMTI after their internship program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-6 hide-on-mobile">
          <div class="row g-3 h-100">
            <div class="col-12">
              <div class="hover hover-2 text-white rounded">
                <img :src="photoList[12]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description">
                    Our commissioner is taking a visit to Cakra Building.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[13]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description">
                    Mrs. Rany Fardiany’s Public Lecture session.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="hover-1 hover-2 text-white rounded">
                <img :src="photoList[14]" alt="photo" />
                <div class="hover-overlay"></div>
                <div class="hover-2-content px-5 py-4">
                  <p class="hover-2-description">
                    Pre-launch event held for Makasi POS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 pb-3 hide-on-mobile">
          <div class="hover-5 hover-2 text-white rounded">
            <img :src="photoList[15]" alt="photo" />
            <div class="hover-overlay"></div>
            <div class="hover-2-content px-5 py-3">
              <p class="hover-2-description mb-5">
                Our CEO, Mrs. Rany Fardiany is giving her speech on a meeting
                for Sedekah Ide untuk Bandung with IAI and Mayor of Bandung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const photoList = ref([
  require("@/assets/images/our-gallery/photo-1.png"),
  require("@/assets/images/our-gallery/photo-2.png"),
  require("@/assets/images/our-gallery/photo-3.png"),
  require("@/assets/images/our-gallery/photo-4.png"),
  require("@/assets/images/our-gallery/photo-5.png"),
  require("@/assets/images/our-gallery/photo-6.png"),
  require("@/assets/images/our-gallery/photo-7.png"),
  require("@/assets/images/our-gallery/photo-8.png"),
  require("@/assets/images/our-gallery/photo-9.png"),
  require("@/assets/images/our-gallery/photo-10.png"),
  require("@/assets/images/our-gallery/photo-11.png"),
  require("@/assets/images/our-gallery/photo-12.png"),
  require("@/assets/images/our-gallery/photo-13.png"),
  require("@/assets/images/our-gallery/photo-14.png"),
  require("@/assets/images/our-gallery/photo-15.png"),
  require("@/assets/images/our-gallery/photo-16.png"),
  require("@/assets/images/our-gallery/photo-17.png"),
]);
</script>

<style lang="scss" scoped>
#gallery {
  width: 100%;
  padding: 50px 140px;
  .container-custom {
    margin-top: -170px;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .data-in-life {
      width: 100%;
      height: 100%;
      background: linear-gradient(136.6deg, #e78448 23.03%, #e09b3d 100%);
      box-shadow: 0px 10px 100px rgba(231, 132, 72, 0.45);
      .title {
        font-family: "Albert Sans";
        font-style: normal;
        font-weight: 600;
        font-size: 35px;
        line-height: 42px;
        color: white;
      }
      .subtitle {
        font-family: "Open Sans";
        font-style: italic;
        font-weight: 300;
        font-size: 12px;
        line-height: 30px;
        color: white;
      }
      .text-body {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: white !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #gallery {
    padding: 0 10px;
	padding-left: 20%;
    // width: 325px;
    height: 50vh;
    .img {
      width: 100vw;
      height: 100vh;
    }
    .container-custom {
      margin-top: -100px;
      .hide-on-mobile {
        display: none;
      }
      .hover-2-description {
        font-size: 0.5em;
      }
      .hover {
        padding-bottom: -90%;
      }
    }
  }
}

.hover {
  overflow: hidden;
  position: relative;
  padding-bottom: 40%;
}
.hover-1 {
  overflow: hidden;
  position: relative;
  padding-bottom: 80%;
}
.hover-3 {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.hover-4 {
  overflow: hidden;
  position: relative;
  height: 99%;
  width: 48%;
}
.hover-5 {
  overflow: hidden;
  position: relative;
  height: 99%;
  width: 100%;
}

.hover-6 {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.hover-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 90;
  transition: all 0.4s;
}

.hover img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.hover-1 img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.hover-3 img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}
.hover-4 img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.hover-content {
  position: relative;
  z-index: 99;
}

/* DEMO 2 ============================== */
.hover-2 .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
}

.hover-2-title {
  position: absolute;
  // top: 50%;
  left: 0;
  text-align: center;
  width: 100%;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2-description {
  width: 100%;
  position: absolute;
  bottom: 0;
  font-family: "Albert Sans";
  font-size: 1em;
  opacity: 0;
  padding: 5%;
  font-weight: 400;
  left: 0;
  text-align: center;
  z-index: 99;
  transition: all 0.3s;
}

.hover-2:hover .hover-2-title {
  transform: translateY(-1.5rem);
}

.hover-2:hover .hover-2-description {
  bottom: 0.5rem;
  opacity: 1;
}

.hover-2:hover .hover-overlay {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
}
</style>
