<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-7 col-lg-7 col-xl-7 d-flex flex-column">
        <h1 class="hero-title mt-4 ml-5">Our Videos</h1>
      </div>
    </div>
  </div>
  <section id="gallery">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active bg-transparent">
          <div class="cards-wrapper">
            <div class="card bg-transparent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                class="btn btn-transparent popup-youtube image-wrapper"
              >
                <img src="@/assets/images/media-gallery/bg-yt1.png" alt="..." />
              </div>
            </div>
            <div class="card bg-transparent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-1"
                class="btn btn-transparent popup-youtube image-wrapper"
              >
                <img src="@/assets/images/media-gallery/bg-yt2.png" alt="..." />
              </div>
            </div>
            <div class="card bg-transparent">
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal-2"
                class="btn btn-transparent popup-youtube image-wrapper"
              >
                <img src="@/assets/images/media-gallery/bg-yt3.png" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-transparan">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item yt-3"
                  src="https://www.youtube.com/embed/k4Dq-kOEu7g"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal-1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-transparan">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item yt-3"
                  src="https://www.youtube.com/embed/E3y7V9Ff8Mc"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="exampleModal-2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body bg-transparan">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item yt-3"
                  src="https://www.youtube.com/embed/DhSAC7s2i5c"
                  allowfullscreen
                ></iframe>
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
      data: { showModal: false },
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
// .btn {
//   width: 231px;
//   height: 45px;
//   border: none;
//   border-radius: 0 !important;
//   padding: 10px;

//   background: linear-gradient(93.03deg, #e28d41 3.11%, #e0983e 97.13%);
//   box-shadow: 0px 4px 18px rgba(224, 149, 62, 0.25);
// }

.hero-title {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  width: 170px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 10px;
  color: #000000;
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

.yt-3 {
  width: 100%;
  height: 70vh;
}
</style>
