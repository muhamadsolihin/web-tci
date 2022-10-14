<template>
  <div class="container-fluid" style="background: #eeeaea; height:76vh">
    <el-row class="container">
      <el-col :gutter="10" :span="10" :offset="2" style="margin-left: -1em"
        ><div class="grid-content" />
        <img
          class="pkarief"
          src="@/assets/images/pkarief.png"
          style="width: 491px; height: 579px; margin-top: 12em"
        />
      </el-col>
      <el-col :span="10" :offset="2"
        ><div class="grid-content" />
        <div
          class="card"
          style="border: none; background: transparent; margin-top: 10em"
        >
          <div
            class="card-header bg-transparent"
            style="border: none; text-align: left"
          >
            We Deliver <br/>
            Consistent Solutions
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item bg-transparent subheader"
              style="border: none; text-align: left"
            >
              Using a combination of technology, process and talents we focus on
              our users needs and help to accelerate their business at any
              scale. We deliver consistent solutions and that is why we are all
              about the details and the end-users.
              <p class="mt-3">
                We constantly listen to our user feedback through our
                development cycle to ensure a foundational setup for success.
                Whether it is to grow your business, get greater connection with
                customers.
              </p>
            </li>
            <li class="list-group-item bg-transparent img-group" style="border: none">
              <img
                src="@/assets/images/imgGroup.png"
                style="width: 528px; height: 250px; margin-top: 3em"
              />
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>

  <div class="container-fluid bg-white">
    <div class="container ">
      <el-row :gutter="20">
        <el-col :span="12" 
          ><div class="grid-content  " />
          <p class="head">How We Do It</p>
        </el-col>
        <el-col :span="12"><div class="grid-content" /></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12"
          ><div class="grid-content" />
          <div
            class="card"
            style="border: none; background: transparent; margin-top: 10em"
          >
            <div
              class="list-group bg-transparent"
              style="border: none; text-align: justify; margin-left: 8em"
            >
              01 &nbsp; Positive impact in development
            </div>
            <ul class="list-group bg-transparent" style="border: none">
              <li
                class="list-group-item bg-transparent"
                style="border: none; text-align: justify; margin-left: 8em"
              >
                02 &nbsp; Adaptive solution development
              </li>
              <li
                class="list-group-item bg-transparent"
                style="border: none; text-align: justify; margin-left: 8em"
              >
                03 &nbsp; User oriented group of talents
              </li>
              <li
                class="list-group-item bg-transparent"
                style="border: none; text-align: justify; margin-left: 8em"
              >
                04 &nbsp; Sustainable way of achieving
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12"
          ><div class="grid-content" />
          <div
            class="card"
            style="border: none; background: transparent; margin-top: 10em"
          >
            <div
              class="card-header2 bg-transparent"
              style="border: none; text-align: justify; margin-left: 0.3em"
            >
              Positive impact in development
            </div>
            <ul class="list-group bg-transparent mt-3" style="border: none">
              <li
                class="list-group-item bg-transparent card-subheader2"
                style="border: none; text-align: justify"
              >
                At every stage of product cycle we design solutions to meet user
                needs and are easy to use. We invest our time in costumer
                research, behavior learning and put all data into the test. We
                leverage end-user centered in our process to deliver creative
                solutions, create a seamless customer experiences and explore
                new opportunities.
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
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
  <HowWork />
</template>

<script>
import HowWork from "./HowWork.vue";
export default {
  components: {
    HowWork
  },
};
</script>

<style lang="scss" scoped>
.head {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 3.4em;
  line-height: 67px;
  text-align: left;
  margin-left: 6%;
  margin-top: 60%;
  /* identical to box height */
  letter-spacing: -2.81895px;
  color: #000000;
}
.list-group{
  text-align: left;
}
.card-header{
  font-family:'montserrat';
  font-size:3em;
  font-weight: 600;
  width:15em;
  line-height:1.2em;
}
.subheader{
  font-family: 'open sans';
  font-size: 1.1em;
  color: #8D8F9A;
  width: 37em;
  text-align: justify;
}
.card-header2 {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */

  color: #000000;
}
.card-subheader2 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  color: #000000;
}
.img-group{
margin-top: 10%;
}
</style>
