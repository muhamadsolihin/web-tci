<template>
<div id="app">
  <div ref="loader" class="Loader" @click="loaded = true">
    <div class="Loader__Container">
      <div ref="bar" class="Loader__Bar"></div>
      <div ref="text" class="Loader__Text">Wait for it.</div>
    </div>
  </div>
</div>
</template>

<script setup>
var app = new Vue({
  el: '#app',
  data: {
    name: "Mike's App",
    tl: null,
    isYoyoRepeat: false,
    loaded: false
  },
  mounted () {
    this.playLoadingAnimation()
  },
  methods: {
    playLoadingAnimation () {
      let t = 0.36
      this.tl = new TimelineMax({repeat: -1, yoyo: true, onRepeat: this.checkLoaded})
      this.tl.fromTo(this.$refs.bar, t, { x: 0 }, { x: 180, ease: Expo.easeInOut })
        .fromTo(this.$refs.bar, t / 2, { scaleX: 0.05, transformOrigin: '0% 0%' }, { scaleX: 1, transformOrigin: '0% 0%', ease: Expo.easeInOut }, 0)
        .fromTo(this.$refs.bar, t / 2, { scaleX: 1 }, { scaleX: 0.05, transformOrigin: '100% 0%', ease: Expo.easeInOut }, t / 2)
        .repeatDelay(0.2)
    },
    checkLoaded () {
       if (this.loaded && this.isYoyoRepeat) {
         this.resolveAnimation()
       }
      this.isYoyoRepeat = !this.isYoyoRepeat
    },
    resolveAnimation () {
      this.tl.kill()
      TweenMax.set(this.$refs.bar, { width: 0, scaleX: 1, x: 0 })
      let t = 0.3
      let resolve = new TimelineMax()
      resolve.to(this.$refs.bar, 0.18, { width: 240, backgroundColor: '#FF8740', ease: Expo.easeOut })
      .to(this.$refs.bar, 0.14, { scaleX: 0.28, transformOrigin: '50% 0%', ease: Expo.easeOut })
      .to(this.$refs.text, 0.14, { alpha: 0, ease: Expo.easeOut }, 0)
      .to(this.$refs.loader, 1, { top: '200px', ease: Expo.easeOut })
    }
  }
})
</script>

<style lang="scss" scoped>
.Loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.Loader__Container {
  width: 240px;
  position: relative;
}

.Loader__Bar {
	width: 60px;
	height: 6px;
	background-color: black;
}

.Loader__Text {
  color: #F4F4F4;
  font-size: 38px;
  font-family: 'Verdana';
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  white-space: nowrap;
}
</style>