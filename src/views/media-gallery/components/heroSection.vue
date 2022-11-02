<template>
  <section id="hero">
    <div class="container-custom d-flex flex-column justify-content-center">
      <BorderContainer
        :theme="'dark'"
        :sections-length="4"
        :current-section="1"
      />
      <div class="row mx-1">
        <div
          class="col-12 col-md-12 col-lg-12 col-xl-12 justify-content-center text-center align-items-center"
        >
          <h1 class="hero-title text-center" style="margin-left: 0">
            TCI Media Gallery
          </h1>
          <p class="sub-heading mt-4 ml-5">
            Welcome to our Media Gallery. This is the place where you could see,
            watch, and download a variety of our resources.
          </p>

          <!-- <div class="subtitle" style="padding-left:7em">Welcome to our Media Gallery. This is the place where you could see, watch,  and download a variety of our resources.</div> -->
        </div>
      </div>
    </div>
    <img
      class="asset-3"
      src="@/assets/images/who-we-are/asset-3.png"
      alt="asset"
    />
  </section>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column">
        <h1 class="heading mt-4 ml-5">Corporate Information <br /></h1>
      </div>
    </div>
  </div>
  <section id="gallery" class="hide-mobile">
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
                  href="https://drive.google.com/file/d/1o7rPERMtLBxM1kdNVm3ImHy_p2MYqx1m/view"
                  class="btn btn1 btn-primary"
                  >Company Profile &nbsp;
                  <img src="@/assets/images/media-gallery/icon-download.svg"
                /></a>
              </div>
            </div>
            <div class="card">
              <div class="image-wrapper">
                <img src="@/assets/images/media-gallery/compro.png" alt="..." />
              </div>
              <div class="card-body">
                <a
                  href="https://drive.google.com/file/d/1fWdoz8xKvzkaGokDGSECIC4KagVDR5jD/view?usp=sharing"
                  class="btn btn-primary"
                  style="float: center; margin-left: 10%"
                  >IT Solution Profile &nbsp;<img
                    src="@/assets/images/media-gallery/icon-download.svg"
                  />
                </a>
              </div>
            </div>
            <div class="card">
              <div class="image-wrapper">
                <img
                  src="@/assets/images/media-gallery/minicompro.png"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <a
                  href="https://drive.google.com/file/d/1gx7II_pfH_Si6Uf9KvVg6wvIqs54Pw2s/view?usp=sharing"
                  class="btn btn-primary"
                  style="float: center; margin-left: 30%"
                  >Mini Company Profile &nbsp;<img
                    src="@/assets/images/media-gallery/icon-download.svg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <button
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
      </button> -->
    </div>
  </section>

  <section
    id="show-mobile"
    style="margin-left: 3em; margin-top: 1em; width: 405px"
  >
    <div class="row">
      <div class="col-6">
        <div class="card bg-transparent">
          <div class="image-wrapper" style="margin-left: 1em">
            <img
              src="@/assets/images/media-gallery/arthboardtci.png"
              alt="..."
            />
          </div>
          <div class="card-body">
            <a
              href="https://drive.google.com/file/d/1o7rPERMtLBxM1kdNVm3ImHy_p2MYqx1m/view"
              class="btn btn1 btn-primary"
              style="
                position: absolute;
                width: 145px;
                height: 39px;
                font-size: 12px;
                margin-left: -1em;
              "
              >Company Profile &nbsp;
              <img
                style="width: 19.31px; height: 17.83px"
                src="@/assets/images/media-gallery/icon-download.svg"
            /></a>
          </div>
        </div>
      </div>

      <div class="col-6">
        <div class="card bg-transparent">
          <div class="image-wrapper" style="margin-left: -2em">
            <img
              style="width: 200px"
              src="@/assets/images/media-gallery/compro.png"
              alt="..."
            />
          </div>
          <div class="card-body">
            <a
              href="https://drive.google.com/file/d/1fWdoz8xKvzkaGokDGSECIC4KagVDR5jD/view?usp=sharing"
              class="btn btn1 btn-primary"
              style="
                position: absolute;
                width: 175px;
                height: 39px;
                font-size: 12px;
                margin-left: -2.5em;
              "
              >IT Solution Profile &nbsp;
              <img
                style="width: 19.31px; height: 17.83px"
                src="@/assets/images/media-gallery/icon-download.svg"
            /></a>
          </div>
        </div>
      </div>
      <div class="col-6 mt-5" style="margin-bottom: 2em">
        <div class="card bg-transparent">
          <div class="image-wrapper" style="margin-left: -1em">
            <img
              style="width: 100%"
              src="@/assets/images/media-gallery/minicompro.png"
              alt="..."
            />
          </div>
          <div class="card-body">
            <a
              href="https://drive.google.com/file/d/1gx7II_pfH_Si6Uf9KvVg6wvIqs54Pw2s/view?usp=sharing"
              class="btn btn1 btn-primary"
              style="
                position: absolute;
                width: 175px;
                height: 39px;
                font-size: 12px;
                margin-left: -1em;
              "
              >Mini Company Profile &nbsp;
              <img
                style="width: 19.31px; height: 17.83px"
                src="@/assets/images/media-gallery/icon-download.svg"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import BorderContainer from "@/components/BorderContainer.vue";
import { ref } from "vue";

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
#hero {
  background-color: #fff;
  background-size: cover;
  height: 30vh !important;
  width: 100%;
  padding: 0 140px;
  position: relative;
  .container-custom {
    height: 100vh;
    justify-content: center;
    // border-left: 1px solid #b8bdc6;
    // border-right: 1px solid #b8bdc6;
    .hero-title {
      font-family: "Montserrat", sans-serif;
      font-size: 80px;
      font-weight: 600;
      margin-top: -3em;
      line-height: 83px;
      text-align: center;
      color: black;
      @media screen and (min-width: 1920px) {
        margin-top: -4em;
      }
    }
  }
  .asset-3 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
#show-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}
.heading {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  width: 305px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 10px;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 13px;
    margin-left: 30%;
    width: 154px;
  }
}
.sub-heading {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: -2em;
  line-height: 30px;
  /* or 167% */

  text-align: center;

  color: #000000;
  @media screen and (max-width: 768px) {
    width: 325px;
    margin-left: 5%;
  }
}
.btn1 {
  margin-left: 18%;
  @media screen and (min-width: 1920px) {
    margin-left: 26%;
  }
}
@media screen and (max-width: 768px) {
  #hero {
    padding: 0 30px;
    background-color: #fff;
    background-size: contain;
    .container-custom {
      height: 100vh;
      padding: 0;
      border: none;
      .hero-title {
        font-size: 40px;
        font-weight: 600;
        margin-top: -8em;
        line-height: 48px;
      }
      .carousel-inner {
        width: 345px;
      }
    }
  }
}

#gallery {
  height: 70vh;
  width: 100%;
  padding: 50px 140px;
  background-size: contain;
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
  width: 231px;
  height: 45px;
  border: none;
  border-radius: 0;
  padding: 10px;

  background: linear-gradient(93.03deg, #e28d41 3.11%, #e0983e 97.13%);
  box-shadow: 0px 4px 18px rgba(224, 149, 62, 0.25);
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
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 150px;
  }
}

.hide-mobile {
  @media screen and (max-width: 768px) {
    display: none;
  }
}
</style>
