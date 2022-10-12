<template>
  <div class="container fixed-top" style="background:transparent; opacity:1">
    <el-row>
    <el-col :span="12"><div class="grid-content ep-bg-purple" />
      <Slide class="Navbar bg-success">
    <a id="home" href="#">
      <span>Home</span>
    </a>
    <a id="home" href="#">
      <span>Home</span>
    </a>
    <a id="home" href="#">
      <span>Home</span>
    </a>
    <a id="home" href="#">
      <span>Home</span>
    </a>
  </Slide>
    </el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-light mt-4 " />
    <img src="../assets/TCI.svg">
    </el-col>
  </el-row>

</div>
  <HomePage />
</template>
<script>
import HomePage from "./HomePage.vue";

// import an animation
import { Slide } from "vue3-burger-menu";
// register the component
export default {
  components: {
    Slide,
    HomePage,
    side: "right",
  },
};
</script>

<style scoped>
.Navbar {
  z-index: 999;
}
.Slide{
  z-index: 999;
}
</style>
