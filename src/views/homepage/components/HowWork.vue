<template>
  <div class="container-fluid" style="background-color: #263a5f; height: 43vh">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content" />
        <p class="head">This is How We Work</p>
      </el-col>
      <el-col :span="12"
        ><div class="grid-content" />
        <img src="@/assets/images/batik2.svg" />
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
            Discover, design <br />
            & build
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item subhead bg-transparent"
              style="border: none; text-align: justify"
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
            We grow your <br />
            business
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item subhead bg-transparent"
              style="border: none; text-align: justify"
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
              style="border: none; text-align: justify"
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

    <el-row>
      <el-col :span="12"
        ><div class="grid-content" />
        <el-row style="margin-top: 10%">
          <el-col :span="6" style="margin-left: 28%"
            ><div class="grid-content ep-bg-purple" />
            <a
              data-toggle="collapse"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample"
            >
              <img src="@/assets/images/animate/consutant.svg"
            /></a>
          </el-col>
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <a
              data-toggle="collapse"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
            <img src="@/assets/images/animate/digital.svg"
          /></a></el-col>
        </el-row>

        <el-row :gutter="20" style="margin-left: 1%">
          <el-col :span="6" style="margin-left: 28%"
            ><div class="grid-content ep-bg-purple" />
            <img src="@/assets/images/animate/dataanimate.svg" />
          </el-col>
          <el-col :span="6"
            ><div class="grid-content ep-bg-purple" />
            <img src="@/assets/images/cyberanimate.svg"
          /></el-col>
        </el-row>
      </el-col>
      <el-col style="margin-top: 10%" :span="12"
        ><div class="grid-content collapse" id="collapseExample">
          <div class="collapse multi-collapse" id="collapseExample">
            <div class="head1" style="text-align: justify">IT Consultant</div>

            <div
              class="subhead1 "
              style="text-align: justify; width: 34em; margin-top: 2%"
            >
              With our IT Consultant services, we could help you revamp your IT
              Environment and synchronize it with your business needs,
              leveraging the experiences inside it. We also offer consultancy on
              holistic, fast, and cost-effective optimization of IT Systems and
              Processes to ensure tangible business outcomes for you.
            </div>
          </div>
        </div>

          <div class="collapse multi-collapse" id="collapseExample2">
            <div class="head1" style="text-align: justify">IT Consultan</div>

            <div
              class="subhead1 "
              style="text-align: justify; width: 34em; margin-top: 2%"
            >
              With our IT Consultant services, we could help you revamp your IT
              Environment and synchronize it with your business needs,
              leveraging the experiences inside it. We also offer consultancy on
              holistic, fast, and cost-effective optimization of IT Systems and
              Processes to ensure tangible business outcomes for you.
            </div>
          </div>
        
      </el-col>

      <el-col style="margin-top: 10%" :span="12"
        ><div class="grid-content collapse" id="collapseExample3">
          <div class="collapse multi-collapse" id="collapseExample">
            <div class="head1" style="text-align: justify">IT Consultan</div>

            <div
              class="subhead1"
              style="text-align: justify; width: 34em; margin-top: 2%"
            >
              With our IT Consultant services, we could help you revamp your IT
              Environment and synchronize it with your business needs,
              leveraging the experiences inside it. We also offer consultancy on
              holistic, fast, and cost-effective optimization of IT Systems and
              Processes to ensure tangible business outcomes for you.
            </div>
          </div>
        </div>
      </el-col>

      <el-col style="margin-top: 10%" :span="12"
        ><div class="grid-content collapse" id="collapseExample4">
          <div class="collapse multi-collapse" id="collapseExample">
            <div class="head1" style="text-align: justify">IT Consultant</div>

            <div
              class="subhead1"
              style="text-align: justify; width: 34em; margin-top: 2%"
            >
              With our IT Consultant services, we could help you revamp your IT
              Environment and synchronize it with your business needs,
              leveraging the experiences inside it. We also offer consultancy on
              holistic, fast, and cost-effective optimization of IT Systems and
              Processes to ensure tangible business outcomes for you.
            </div>
          </div>
        </div>
      </el-col>

      <el-col style="margin-top: 10%" :span="12"
        ><div class="grid-content collapse" id="collapseExample4">
          <div class="collapse multi-collapse" id="collapseExample">
            <div class="head1" style="text-align: justify">IT Consultant</div>

            <div
              class="subhead1"
              style="text-align: justify; width: 34em; margin-top: 2%"
            >
              With our IT Consultant services, we could help you revamp your IT
              Environment and synchronize it with your business needs,
              leveraging the experiences inside it. We also offer consultancy on
              holistic, fast, and cost-effective optimization of IT Systems and
              Processes to ensure tangible business outcomes for you.
            </div>
          </div>
        </div>
      </el-col>

    </el-row>
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
export default {
  components: {
    Product,
  },
};
</script>

<style lang="scss" scoped>
.head {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  margin-top: 25%;
  margin-left: 6em;
  text-align: left;
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
  font-size: 55px;
  line-height: 67px;
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
