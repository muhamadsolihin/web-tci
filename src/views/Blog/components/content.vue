<template>
    <section id="content-blog">
      <div class="container-custom justify-content-center">
        <BorderContainer
          :theme="'dark'"
          :sections-length="4"
          :current-section="1"
        />
        <div class="row content">
          <div class="col-md-4">
            <img class="img-1" src="@/assets/images/blog/1.png" />
            <p class="title">Lorem Ipsum</p>
            <p class="tgl">october 04, 2022</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy ni...
            </p>
          </div>
          <div class="col-md-4">
            <img class="img-1" src="@/assets/images/blog/2.png" />
            <p class="title">Lorem Ipsum</p>
            <p class="tgl">october 04, 2022</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy ni...
            </p>
          </div>
          <div class="col-md-4">
            <img class="img-1" src="@/assets/images/blog/3.png" />
            <p class="title">Lorem Ipsum</p>
            <p class="tgl">october 04, 2022</p>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy ni
              
              <a href="">...</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script></script>
  <style lang="scss" scoped>
  #content-blog {
    background-color: #fff;
    height: 100vh;
    width: 100%;
  
    padding: 0 140px;
    position: relative;
    .container-custom {
      margin-top: -30%;
      margin-left: 3%;
      height: 100vh;
      border-left: 0px solid #b8bdc6;
      border-right: 0px solid #b8bdc6;
      .title {
        font-weight: 600;
        font-size: 25px;
        line-height: 30px;
        margin-top: 20px;
        color: #000000;
      }
      .tgl {
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        margin-top: 10px;
        color: #9f9f9f;
      }
      .description {
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        /* or 200% */
        margin-top: 10px;
        color: #000000;
      }
      .img-1 {
        width: 372px;
        height: 346px;
      }
    }
  }
  </style>
  
