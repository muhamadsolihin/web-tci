<template>
  <div class="container-fluid body" style="background: #263a5f">
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-md-6">
          <p class="head">Our Gallery</p>
        </div>
      </div>
      <div class="row" style="margin-bottom: 7.5em">
        <div class="col-xl-6">
          <img
            src="@/assets/images/galerry/pic1.png"
            style="width: 35em; height: 15em"
          />
          <div class="row" style="margin-top: 30px">
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
      </div>
    </div>
  </div>

  <section class="container" style="background-color: #fff">
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <p class="headblog">Our Blog</p>
        <p class="subhead">
          The success of our clients is a big part of who we are and how we
          believe in our values. Their journey becomes our story of passion and
          persistence.
        </p>
      </div>
      <div class="col-xl-6 col-md-6">
        <el-carousel
          trigger="click"
          height="32.5em"
          width="37em"
          style="margin-top: 20%; margin-left: 4%"
        >
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                    Saat membicarakan soal data, apa yang pertama kali terlintas dipikiranmu? 
                </p>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                    Saat membicarakan soal data, apa yang pertama kali terlintas dipikiranmu? 
                </p>
              </div>
            </div>
          </el-carousel-item>
          <el-carousel-item>
            <div class="card" style="width: 36.6em; border: none">
              <img
                src="@/assets/images/galerry/blog.png"
                class="card-img-top"
                alt="responsive"
              />
              <div class="card-body">
                <h5 class="card-title">How Data Could Impact Our Daily Life</h5>
                <p class="card-text">
                    Saat membicarakan soal data, apa yang pertama kali terlintas dipikiranmu? 
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>
  <OurTeam />
</template>

<script>
import OurTeam from "./OurTeam.vue";
export default {
  components: {
    OurTeam,
   
},
};
</script>

<style lang="scss" scoped>
.body {
  margin-top: 10.7%;
  @media (min-width: 992px) {
    margin-top: 12.7em !important;
  }
}
.head {
  font-family: "montserrat";
  font-size: 3.4em;
  margin-top: 5em;
  color: #fff;
  text-align: left;
  margin-left: 6%;
  font-weight: 600;
  @media (min-width: 992px) {
    margin-top: 2em !important;
  }
}
.headblog {
  font-family: "montserrat";
  font-size: 3.4em;
  font-weight: 600;
  line-height: 67px;
  /* identical to box height */
  text-align: left;
  margin-left: 6%;
  margin-top: 20%;
  letter-spacing: -2.81895px;
}
.subhead {
  font-family: "open sans";
  font-weight: 400;
  font-size: 2.1em;
  text-align: justify;
  line-height: 50px;
  margin-left: 6%;
}
.card-title {
  font-family: "montserrat";
  font-size: 1.87em;
  font-weight: 600;
  text-align: justify;
  margin-left: -3%;
}
.card-text {
  font-family: "montserrat";
  text-align: justify;
  font-weight: 400;
  font-size: 23px;
  line-height: 31px;
  margin-left: -3%;
  color: #b8bdc6;
}
</style>
