<template>
      <div id="TopHeader" class="TopHeader">
    <!-- v-motion :initial="{opacity:0}" :enter="{opacity: 1, transition:{duration:1500,easeIn:'easein',delay:500}}" -->
      <div class="position-absolute top-0 start-0 bottom-0 end-0 overflow-hidden" style="background-color: rgba(0,0,0,0.5);">
        <div class="d-flex h-100 align-items-center justify-content-center">
          <div class="text-white column-items">
            <p class="items" v-motion :initial="{opacity:0, y:25}" :enter="{opacity: 1,y:0, transition:{duration:500,ease:'easeout',delay:300}}">
              <i class="bi bi-check"></i>
              {{$t('TopHeaderL.firstText')}}
            </p>
              
            <h1 class="h1 text-white fw-bold items mt-3 text-uppercase" v-motion :initial="{opacity:0, x:150}" :enter="{opacity: 1,x:0, transition:{duration:900,ease:'easeIn', delay:500}}">{{$t('TopHeaderL.title1')}} </h1>
            
            <h1 class="h1 text-white fw-bold items mt-3 text-uppercase" v-motion :initial="{opacity:0, x:-150}" :enter="{opacity: 1,x:0, transition:{duration:900,ease:'easeIn', delay:500}}">{{$t('TopHeaderL.title2')}}</h1>

            <div class=" items">
              <p v-motion :initial="{opacity:0, y:100}" :enter="{opacity: 1,y:0, transition:{duration:600,ease:'easeIn', delay:700}}" class="fst-italic ">{{$t('TopHeaderL.subtitle')}}</p>
            </div>
            <div class="special-link  items">
              <a  v-scroll-to="'#Products'" v-motion :initial="{scaleX:0, scaleY:0}" :enter="{scaleX:1,scaleY:1, transition:{duration:300,ease:'easeIn', delay:900}}" v-on:click="this.getActive(2)" class="fw-bold btn btn-block rounded-0 shadow text-uppercase" tabindex="0">{{$t('TopHeaderL.button')}}</a>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
const links = document.getElementsByClassName("nav-link")
const navbarCollapse = document.getElementsByClassName("navbar-collapse")
export default {

  methods:{
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

<style>
.special-link a {
    background-color: #80B500;
    color: white !important;
    padding: 12px 30px !important;
    
}
.special-link a:hover{
      background-color: #6e970e;
}
.column-items > .items{
  margin-bottom: 20px !important;
}

.TopHeader{
  /* background: url('https://images.unsplash.com/photo-1666214280259-ab57309450b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') no-repeat center; / */


  background: url('https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') no-repeat center;/**background-color: darkblue; **/; background-position: center; background-size: cover; background-clip: content-box;
  height:calc(100vh - 30px);
  position: relative;
  min-height: max-content;
  }

  items.small{
    font-family: Arial, Helvetica, sans-serif;
  }
  .items .small{
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>
