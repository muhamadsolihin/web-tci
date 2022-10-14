<template>
  <div class="container-fluid scrollbar-custom">
    <section class="one">
      <h1>First Page</h1>
    </section>
    <section class="two">
      <h1>Second Page</h1>
    </section>
    <section class="three">
      <h1>Third Page</h1>
    </section>
    <section class="four">
      <h1>Fourth Page</h1>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  scroll-snap-align: start;
  scroll-behavior: smooth;
}

.container-fluid {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  padding: 0;
}
.one {
  background: rgb(36, 164, 138);
}
.two {
  background: rgb(211, 79, 79);
}
.three {
  background: rgb(67, 91, 175);
}
.four {
  background: lightsalmon;
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
