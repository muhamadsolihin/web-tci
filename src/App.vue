<template>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Albert+Sans&display=swap"
      rel="stylesheet"
    />
    
  </head>
  <!-- <Navbar /> -->
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
// import Navbar from "./components/Navbar.vue";
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;600;700&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&family=Open+Sans:wght@300;400;500;600;700&display=swap');

#app {
  font-family: 'Albert Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
