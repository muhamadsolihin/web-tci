<template>
     <section id="Gallery" style="background-color: #fff">
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
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
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
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
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
                  Saat membicarakan soal data, apa yang pertama kali terlintas
                  dipikiranmu?
                </p>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </section>


</template>

 
  
  <script>
  // import Sample from "./sample.vue";
  // export default {
  //   components: {
  //     Sample,
  //   },
  // };
  </script>
  
  <style lang="scss" scoped>
  #Gallery{
    background-color: blue;
      height: 100vh;
      margin-top: 0;
      z-index: 1;
  }
  .hover {
    overflow: hidden;
    position: relative;
    padding-bottom: 30%;
    padding-right: -30%;
  }
  
  .hover1 {
    overflow: hidden;
    position: relative;
    padding-bottom: 100%;
  }
  .hover-overlay {
    width: 35em;
    height: 15em;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    transition: all 0.4s;
  }
  
  .hover-overlay1 {
    width: 16.8em;
    height: 15em;
  
    position: absolute;
    top: 0;
    left: 0;
    z-index: 90;
    transition: all 0.4s;
  }
  
  .hover img {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  .hover1 img {
    width: 16.8em;
    height: 15em;
  
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s;
  }
  
  .hover-content {
    position: relative;
    z-index: 99;
  }
  
  .hover-2 .hover-overlay {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  }
  
  .hover-2 .hover-overlay1 {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  }
  
  .hover-2-title {
    position: absolute;
    top: 0;
    display: none;
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
    opacity: 0;
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
  .hover-2:hover .hover-overlay1 {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1));
  }
  
  .body {
    margin-top: 0%;
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
  