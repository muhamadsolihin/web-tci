<template>
  <div class="container-fluid" style="background: #eeeaea; height: 44em;">
    <el-row class="container">
      <el-col :span="10" :offset="2"
        ><div class="grid-content" />
        <div
          class="card"
          style="
            border: none;
            background: transparent;
            margin-top: 10em;
            margin-left: -15%;
            width: 29em;
          "
        >
          <div
            class="card-header bg-transparent"
            style="border: none; text-align: left"
          >
            Your Journey,<br />
            Our Story
          </div>
          <ul class="list-group bg-transparent" style="border: none">
            <li
              class="list-group-item bg-transparent subhead"
              style="border: none; text-align: left"
            >
              The success of our clients is a big part of who we are and how we
              believe in our values. Their journey becomes our story of passion
              and persistence.
            </li>
            <li class="list-group-item bg-transparent" style="border: none">
              <img
                src="@/assets/rndm1.png"
                style="width: 29em; height: 18em; margin-top: 9em"
              />
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :gutter="10" :span="10" :offset="2" style="margin-left: -1em"
        ><div class="grid-content" />
        <img
          class="ceopict"
          src="@/assets/pictceo.png"
          style="width: 40em; height: 41em; margin-top: 10em; margin-left: 10%"
        />
      </el-col>
    </el-row>
  </div>
  <Gallery/>
</template>

<script>
  import Gallery from "./Gallery.vue";
  export default {
    components: {
        Gallery
    },
  };
</script>

<style lang="scss" scoped>
.head {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 55px;
  line-height: 67px;
  margin-top: 3em;
  /* identical to box height */
  letter-spacing: -2.81895px;
  color: #000000;
}
.card-header{
    font-family: 'montserrat';
    font-size:3.4em;
    color: #000000;
    font-weight: 600;
    line-height: 67px;
    letter-spacing: -2.81895px;
}
.subhead{
    font-family: 'open sans';
    font-size: 1.5em;
    font-weight: 400;
    line-height:1.5em ;
}
</style>
