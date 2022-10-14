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
  <Navbar />
  <router-view></router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";
</script>

<style>
#app {
  font-family: Montserrat, Montserrat, Montserrat, sans-serif, "Albert Sans", 'Open Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
