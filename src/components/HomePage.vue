<template>
  <div class="contanier" style="height:100%">
    <section class="video-container fixed-top">
      <video src="../assets/video.mp4" autoplay loop playsinline muted></video>
      <div class="container">
        <el-row  style="margin-top: 5em">
          <el-col :span="12"
            ><div class="grid-content" />
            <p
              class="head callout"
              style="
                z-index: 2;
                text-align: left;
                float: center;
                margin-top: 0;
              "
            >
              Generate <br />
              New Business Ideas
            </p>
          </el-col>
          <el-col :span="12"
            ><div class="grid-content ep-bg-purple-light"
          /></el-col>
        </el-row>
        <el-row style="margin-top: 5em">
          <div class="square"></div>
          <el-col :span="12"
            ><div class="grid-content" />
            <p
              class="subhead"
              style="z-index: 2; text-align: left; float: center"
            >
              We design and build solutions by connecting ideas <br />
              and technology to solve problems and get new <br />
              ideas to business lifecycle
            </p>
          </el-col>
          <el-col :span="12"
            ><div class="grid-content ep-bg-purple-light"
          /></el-col>
        </el-row>
        <el-row style="margin-top: 5em">
          <el-col :span="6"
            ><div class="grid-content" />
            <p
              class="bottom-head"
              style="z-index: 2; text-align: left; float: center"
            >
              GET IN TOUCH
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
          </el-col>
          <el-col :span="18"
            ><div class="grid-content ep-bg-purple-light" />
            <img  class="bola"
              src="../assets/bola.svg"
              style="margin-top: 0; width: 466px; height: 477px; position: relative; z-index: 12;"
            />
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
  <Deliver />
</template>

<script>

import Deliver from "./About/Deliver.vue";
export default {
  components: {
    Deliver
  },
};
</script>

<style lang="scss" scoped>
/*** T H E - M A G I C - O F - O B J E C T - F I T ***/
/*****************************************************/


.video-container {
  position: relative;
  overflow: hidden;
  margin-top: -4em;
  z-index: 1;
  @media (min-width: 600px) {
    height: 100vh;
  }
}
.head {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 80px;
  line-height: 83px;
  /* or 104% */
  color: #ffffff;
  @media (min-width: 992px) {
    height: 100vh;
    font-size: 4em;
    line-height: 1em;
    margin-top: 1em !important;
    margin-left: 6%;
    
  }
}
.bola{


  @media (min-width: 992px) {
        
  }
}
.subhead {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-left: 24px;
  line-height: 30px;
  /* or 150% */
  color: #ffffff;
  @media (min-width: 992px) {

  }
}
.bottom-head {
  font-family: "IBM Plex Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;
  /* identical to box height */
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #ffffff;
  @media (min-width: 992px) {
    margin-top: -2em !important;
    margin-left:8%;
    
  }
}
.square {
  width: 38px;
  height: 22px;
  margin-top: 0.9em;
  background: #0c4aa9;
  @media (min-width: 600px) {
    margin-left: 4%;
  }
}
video {
  object-fit: cover; // Set the magic
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

/*** A E S T H E T I C S ***/
/***************************/

* {
  box-sizing: border-box;
}

body {
  background: #333;
  color: white;
}

.video-container:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(black, 0.2);
  z-index: 1;
}

h1 {
  text-transform: uppercase;
  font-weight: 900;
  margin: 0 0 1rem;
  padding: 0;
  line-height: 1;
  font-family: Futura, Helvetica, sans-serif;
  font-size: 5vw;
  @media (max-width: 400px) {
    font-size: 22px;
  }
  @media (min-width: 1200px) {
    font-size: 75px;
  }
}

.callout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 10;
}

.btn-touch {
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  position: relative;
  z-index: 10;
}

.support {
  position: fixed;
  bottom: 60px;
  right: 20px;
  text-transform: uppercase;
  font-size: 9px;
  letter-spacing: 1px;
  text-align: right;
  position: relative;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    margin-top: 10px;
    &:before {
      display: block;
      position: absolute;
      content: "";
      bottom: -2px;
      width: 0;
      height: 1px;
      background-color: rgba(white, 0.3);
      transition: 0.3s;
    }
    &:hover:before {
      width: 100%;
    }
  }
}
</style>
