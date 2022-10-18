<template>
  <section id="howwedo">
    <div class="container-border">
      <img class="asset-2" src="@/assets/images/animate/asset-2.png" alt="" />
      <div class="container hero-collap">
        <div class="row h-100" style="margin-top: 68px">
          <div
            class="col-8 col-md-8 col-lg-8 col-xl-8 order-2 order-md-1 order-lg-1 order-xl-1"
            style="border-left: 1px solid #b8bdc6; height: 100vh"
          >
            <h1 class="hero-title">
              <span class="pagar" style="color: #e78448"> # </span
              ><span>Discover You Excellent</span> <br />
            </h1>
            <h2 class="hero-title1">
              Let us take you further than <br />
              you've ever been
            </h2>
          </div>

          <div
            class="col-4 col-md-4 col-lg-4 col-xl-4 order-1 order-md-2 order-lg-2 order-xl-2 d-flex flex-row"
            style="border-right: 1px solid #b8bdc6; height: 100vh"
          >
            <p
              class="get-in"
              style="z-index: 2; text-align: center; float: center"
            >
              Get in touch
              <a
                href="#"
                class="btn-touch"
                style="margin-left: 0.8em; position: relative"
                ><svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="15" stroke="#E78448" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.8381 12.5291L11.3799 21.9873L10.8636 21.471L20.322 12.0127L13.9847 12.0127L13.9847 11.1227L21.7279 11.1227L21.7286 18.8659L20.8386 18.866L20.8381 12.5291Z"
                    fill="#E78448"
                  />
                </svg>
              </a>
            </p>
          </div>
          <div
            class="col-6 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 justify-content-center"
          ></div>
          <div
            class="col-6 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 justify-content-center"
          >
            <div class="tci-logo justify-content-center">
              <img src="@/assets/images/tci-logo.png" />
            </div>
          </div>
          <div
            class="col-6 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 justify-content-center"
          >
            <div class="address">
              Location <br />
              PT. Teknologi Cakra Internasional<br />
              Jl. Batununggal Indah IV No.45, Mengger,<br />
              Kec. Bandung Kidul, Kota Bandung, Jawa Barat <br />
              40267
            </div>
          </div>
          <div
            class="col-6 col-md-6 col-lg-6 col-xl-6 order-1 order-md-2 order-lg-2 justify-content-center"
          >
            <div class="address">
              Find Us <br />
              Facebook <br />
              Instagram <br />
              Linkedln
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionNumberComponent from "@/components/SectionNumberComponent.vue";
import HowWork from "@/views/homepage/components/HowWork.vue";
</script>

<style lang="scss" scoped>
#howwedo {
  background-color: #fafafa;
  height: 100vh;
  margin-top: 10%;
  z-index: 1;
  .container-border {
    position: relative;
    width: 100%;
    padding: 0 80px;
    border-left: 1px solid #b8bdc6;
    border-right: 1px solid #b8bdc6;
  }

  .asset-2 {
    position: absolute;
    left: 5%;
    top: 0;
    height: 711px;
  }
}
.get-in {
  margin-top: 60%;
  margin-left: 59%;
  border: 1px solid #000000;
  border-radius: 30px;
  padding-top: 5px;
  width: 233px;
  height: 44px;
}

.hero-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 67px;
  /* identical to box height */

  letter-spacing: -2.81895px;
  margin-top: 178px;
  color: #000000;
}

.hero-title1 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 50px;
  line-height: 58px;
  /* or 115% */

  letter-spacing: -2.81895px;

  color: #000000;
}
.tci-logo {
  width: 287px;
  height: 287px;
  margin-top: -68%;
  margin-left: 46%;
}
</style>
