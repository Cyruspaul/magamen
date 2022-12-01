
<template>
  <div id="Top" class="container-fluid bg-white fixed-top fw-bold nav-bar p-0 m-0 text-white shadow-sm" style="font-size:100%; height: 90px;">
    <nav id="navbar" class="navbar navbar-expand-md w-100 " style="padding-top: 12px;">
      <div class="container bg-white p-0">
        <a href="/" class="navbar-brand logo router-link-active ps-3">
          <img src="../assets/logo.png" height="50" width="45" /> <span class="small muted">Maga Men</span>
        </a>
        <button aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler btn btn-light border-0 me-3" data-bs-target="#navbarCollapse" data-bs-toggle="collapse"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="feather feather-menu">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>

        <div id="navbarCollapse" class="m-0 collapse navbar-collapse bg-white ps-2 px-lg-5 justify-content-end" style="z-index: 1000;">
          <ul id="navbar-navlist" class="navbar-nav ms-auto navbar-center">
            <li class="nav-item"><a  v-scroll-to="'#Top'" href="javascript: void(0);" v-on:click="this.getActive(0)" class="nav-link active">{{$t('links[0]')}}</a></li>
            <li class="nav-item"><a  v-scroll-to="'#About'" href="javascript: void(0);" v-on:click="this.getActive(1)" class="nav-link">{{$t('links[1]')}}</a></li>
            <li class="nav-item"><a  v-scroll-to="'#Products'" href="javascript: void(0);" v-on:click="this.getActive(2)" class="nav-link">{{$t('links[2]')}}</a></li>
            <li class="nav-item"><a  v-scroll-to="'#Team'" href="javascript: void(0);" v-on:click="this.getActive(3)" class="nav-link">{{$t('links[3]')}}</a></li>
            <li class="nav-item"><a  v-scroll-to="'#Contact'" href="javascript: void(0);" v-on:click="this.getActive(4)" class="nav-link">{{$t('links[4]')}}</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {{$t('links[5]')}}
              </a>
              <ul class="dropdown-menu">
                <li><a v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)" class="dropdown-item">
                  <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
                </a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
const links = document.getElementsByClassName("nav-link")
const navbarCollapse = document.getElementsByClassName("navbar-collapse")
import i18n from '../locales/i18n'

 export default {
  name:"HeaderSection",
   data(){
    return{
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'es', language: 'es', title: 'Español' }
      ]
    }
   },
   methods:{
     changeLocale(lang){
       if (i18n.global.locale !== lang || localStorage.getItem('localKey') !== lang){
         i18n.global.locale = lang
         localStorage.setItem('localeKey',lang)
       }
       this.removeNavbar()
     },
   removeNavbar(){
     navbarCollapse[0].classList.remove("show")
   },
    getActive(option){
      for (let optionKey=0; optionKey < links.length; optionKey++) {
        if (option === optionKey){
          links[optionKey].classList.add("active")
        }else{
          links[optionKey].classList.remove("active")
        }
      }
      this.removeNavbar()
    }
  }

 }

</script>

<style lang="css">
/* @import "../components/style/header.css" */
#navbar-navlist .nav-link{
  font-weight: 450 !important;
  font-size: medium !important;
  color: slategray !important;
  width: fit-content !important;
  transition: border ease-out 300ms;
}
#navbar-navlist .nav-link.active{
  color: #ff8c00 !important;
  border-radius: 3px;
  /* border-bottom: 1.5px solid darkorange; */
  font-weight: 500 !important;
}
</style>
