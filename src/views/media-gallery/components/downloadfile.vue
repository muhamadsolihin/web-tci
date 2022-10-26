<template>
  <section id="gallery">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active bg-transparent">
          <div
            class="cards-wrapper"
            v-for="(filesrc, index) in filesrcs"
            :key="index"
          >
            <div class="card bg-transparent">
              <div class="image-wrapper">
                <img
                  src="@/assets/images/media-gallery/arthboardtci.png"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <a
                  @click="downloadWithAxios(filesrc.src, filesrc.title)"
                  class="btn btn-primary"
                  style="float: center; margin-left: 30%"
                  >{{ index.title }} Company Profile</a
                >
              </div>
            </div>
            <div class="card">
              <div class="image-wrapper">
                <img src="@/assets/images/media-gallery/compro.png" alt="..." />
              </div>
              <div class="card-body">
                <a
                  href="#"
                  class="btn btn-primary"
                  style="float: center; margin-left: 10%"
                  >IT Solution Profile</a
                >
              </div>
            </div>
            <div
              class="card"
              @click="downloadWithAxios(filesrc.src1, filesrc.title1)"
            >
              <div class="image-wrapper">
                <img
                  src="@/assets/images/media-gallery/minicompro.png"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <a
                  class="btn btn-primary"
                  style="float: center; margin-left: 30%"
                  >{{ index.title1 }} Mino Company Profile</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>

    </div>



    <!-- <div class="container-custom">
      <v-container grid-list-xl>
        <v-layout justify-center wrap>
          <v-flex xs12 md8>
            <v-card raised>
              <v-card-title class="blue white--text"
                >Download Files</v-card-title
              >
              <br />
              <v-container class="bg-warning" py-0>
                <v-layout wrap>
                  <v-flex
                    v-for="(filesrc, index) in filesrcs"
                    :key="index"
                    xs12
                    md4
                  >
                    <v-card
                      @click="downloadWithAxios(filesrc.src, filesrc.title)"
                    >
                      <v-list>
                        <v-list-item>
                          <v-list-item-title>{{
                            filesrc.title
                          }} downloadfiles
						  
						
						</v-list-item-title>
                          <v-list-item-icon>
                            <v-icon class="primary-text">mdi-download</v-icon>
                          </v-list-item-icon>
                        </v-list-item>
                      </v-list>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div> -->

  </section>
</template>

<script>
import { ref } from "vue";
import BorderContainer from "@/components/BorderContainer.vue";

import axios from "axios";

export default {
  data() {
    return {
      filesrcs: [
        {
          title: "Company Profile.png",
          src: require("@/assets/images/galerry/blog.png"),
          title1: "Company.png",
          src1: require("@/assets/images/galerry/pic1.png"),
        },
      ],
    };
  },
  methods: {
    forceFileDownload(response, title) {
      console.log(title);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", title);
      document.body.appendChild(link);
      link.click();
    },
    downloadWithAxios(url, title) {
      axios({
        method: "get",
        url,
        responseType: "arraybuffer",
      })
        .then((response) => {
          this.forceFileDownload(response, title);
        })
        .catch(() => console.log("error occured"));
    },
  },
};
</script>

<style lang="scss" scoped>
#gallery {
  width: 100%;
  padding: 50px 140px;
  .container-custom {
    margin-top: -170px;
    z-index: 1;
  }
}
.card {
  border: none;
  border-radius: 0;
}
.carousel-inner {
  padding: 1em;
}
.carousel-control-prev,
.carousel-control-next {
  background-color: #000;
  width: 6vh;
  height: 6vh;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.carousel-control-prev span,
.carousel-control-next span {
  width: 1.5rem;
  height: 1.5rem;
}
.btn {
  background-color: #e28d41;
  border: none;
}
@media screen and (min-width: 577px) {
  .cards-wrapper {
    display: flex;
  }
  .card {
    margin: 0 0.5em;
    width: calc(100% / 2);
  }
  .image-wrapper {
    height: 20vw;
    margin: 0 auto;
  }
}
@media screen and (max-width: 576px) {
  .card:not(:first-child) {
    display: none;
  }
}

.image-wrapper img {
  max-width: 100%;
  max-height: 100%;
}
</style>
