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
  <div class="container-fluid scrollbar-custom">
    <router-view></router-view>
  </div>
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

/* section {
  height: 100vh;
  display: flex;
  color: white;
  scroll-snap-align: start;
  scroll-behavior: smooth;
} */

.container-fluid {
  /* scroll-snap-type: y mandatory;
  overflow-y: scroll; */
  height: 100vh;
  padding: 0 !important;
}

// scrollbar
.scrollbar-custom::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
}

.scrollbar-custom::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #1e5fb6;
    background-color: #1e5fb6;
}

.scrollbar-custom .v-data-table__wrapper::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #f5f5f5;
}

.scrollbar-custom .v-data-table__wrapper::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #1e5fb6;
    background-color: #1e5fb6;
}
</style>
