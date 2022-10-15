<template>
  <div class="container-fluid" style="background-color: #263a5f; height: 43vh">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content" />
        <p class="head">This is How We Work</p>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content" />
        <img style="margin-right: 0" src="@/assets/images/batik2.svg" />
      </el-col>
    </el-row>
  </div>
  <div class="container">
    <el-row>
      <el-col :span="8"
        ><div class="grid-content" />
        <div
          class="card"
          style="border: none; background: transparent; margin-top: 10em"
        >
          <div
            class="card-header bg-transparent"
            style="border: none; text-align: justify"
          >
            Discover,<br />
            design & build
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item subhead bg-transparent"
              style="border: none; text-align: left; width: 21em"
            >
              We delivered tailored Digital and IT Solutions by listening to our
              user needs, build prototype based on real feedback and apply user
              feedback into scalable MVP. The way our end products are built to
              give a great user experience.
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="8"
        ><div class="grid-content" />
        <div
          class="card"
          style="border: none; background: transparent; margin-top: 10em"
        >
          <div
            class="card-header bg-transparent"
            style="border: none; text-align: justify"
          >
            We grow <br />
            your business
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item subhead bg-transparent"
              style="border: none; text-align: left; width: 21em"
            >
              Our expertise work passionately in each product cycle to make sure
              our users gain the benefit of growing their business. Our solution
              will make it easier for them to engage with customers and improve
              consistency.
            </li>
          </ul>
        </div></el-col
      >
      <el-col :span="8"
        ><div class="grid-content" />
        <div
          class="card"
          style="border: none; background: transparent; margin-top: 10em"
        >
          <div
            class="card-header bg-transparent"
            style="border: none; text-align: justify"
          >
            Dedicated for <br />excellence
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item subhead bg-transparent"
              style="border: none; text-align: left; width: 21em"
            >
              Our team fully assessed in terms of skills, experience, and
              personality. Our objective is to deeply analyzed users’ needs to
              create solution that speaks to your specific demographic and meet
              your specified requirements.
            </li>
          </ul>
        </div></el-col
      >
    </el-row>
  </div>

  <div class="container-fluid" id="ourservices" style="margin-top: 20%">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content" />
        <p class="text">Our Services</p>
      </el-col>

      <el-col :span="12"><div class="grid-content" /></el-col>
      <el-col :span="8" style="margin-left: 1em"
        ><div class="grid-content" />
        <div class="square ml-5 container"></div>
      </el-col>
    </el-row>
    <services />
  </div>


  <div class="container-fluid">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content" />
        <img
          style="float: left; margin-left: -1em"
          src="@/assets/images/batik-1.svg"
        />
      </el-col>
      <el-col :span="12"
        ><div class="grid-content ep-bg-purple-light"
      /></el-col>
    </el-row>
  </div>


  <Product />
</template>

<script>
import Product from "./Product.vue";
import services from "@/views/homepage/components/services.vue";

export default {
  props: ["show"],
  components: {
    Product,
    services,
  },

  data() {
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
.collapse.in {
  min-height: 50px;
  border: 1px solid blue;
}
.head {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 3.4em;
  margin-top: 25%;
  text-align: right;
  margin-right: 8%;
  line-height: 67px;
  /* identical to box height */
  letter-spacing: -2.81895px;
  color: #ffffff;
}
.head1 {
  font-family: "montserrat";
  font-size: 2em;
  color: #000000;
  font-weight: 600;
}
.subhead1 {
  font-family: "montserrat";
  font-size: 1em;
  font-weight: 400;
  color: #000000;
}
img {
  float: right;
  margin-top: 23%;
  margin-right: -0.75em;
}
.card-header {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  letter-spacing: -1.82px;

  color: #000000;
}
.subhead {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* or 188% */
  margin-top: 10%;
  color: #8d8f9a;
}
.text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 3.4em;
  line-height: 67px;
  text-align: center;
  /* identical to box height */

  letter-spacing: -2.81895px;

  color: #000000;
}
.square {
  width: 38px;
  height: 22px;
  margin-top: 0.9em;
  background: #0c4aa9;
}
</style>
