<script>


import ServiceView from "@/views/ServiceView.vue";
import i18n from '/src/locales/i18n'

export default {
  components:{
    ServiceView
  },
  mounted() {
    scrollTo(0,0)
    if(document.getElementById("homeButton") !== null){
      document.getElementById("homeButton").click()
    }
  },
  updated() {
    scrollTo(0,0)
    if(document.getElementById("homeButton") !== null){
      document.getElementById("homeButton").click()
    }
  },
  setup() {
    if (localStorage.getItem('localeKey'))
      i18n.global.locale = localStorage.getItem('localeKey')
  },
}

</script>

<template>
  <div class="w-100 h-100">
    <ServiceView />
  </div>

</template>

<style>
#app {
  --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
