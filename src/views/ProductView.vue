<template>
  <section v-motion-slide-visible-once-bottom id="Products"  class="product"
           style="min-height: fit-content;padding-top: 100px; padding-bottom: 50px;  height: fit-content; width: 100%;">

    <div class="container mb-5 h-100">
      <p class="text-uppercase  text-center mt-5 mb-4 display-5 fw-bolder" style="text-shadow: 3px 2px lightgrey;">
        {{$t('Products.title')}}</p>
      <p class="mb-5">{{$t('Products.firstText')}}<a href="/"><i
          class="ms-4 btn btn-primary bi bi-download"/></a></p>

      <ul class="nav text-center nav-tabs nav-justified gap-0 mb-4">
        <li class="nav-item border-start">
          <button data-bs-toggle="tab" class="nav-link  item active" data-filter="all" v-on:click="this.getActive(0)">
            {{$t('Products.items[0]')}}
          </button>
        </li>
        <li class="nav-item">
          <button data-bs-toggle="tab" class="nav-link  item " data-filter=".eq" v-on:click="this.getActive(1)">
            {{$t('Products.items[1]')}}
          </button>
        </li>
        <li class="nav-item">
          <button data-bs-toggle="tab" class="nav-link  item " data-filter=".ma" v-on:click="this.getActive(2)">
            {{$t('Products.items[2]')}}
          </button>
        </li>
        <li class="nav-item">
          <button data-bs-toggle="tab" class="nav-link  item " data-filter=".in" v-on:click="this.getActive(3)">
            {{$t('Products.items[3]')}}
          </button>
        </li>
        <li class="nav-item">
          <button data-bs-toggle="tab" class="nav-link  item " data-filter=".re" v-on:click="this.getActive(4)">
            {{$t('Products.items[4]')}}
          </button>
        </li>
      </ul>
      <div  class="align-items-center overflow-hidden" style="min-height:fit-content; height: fit-content;">

        <div style="min-height: fit-content;"  class="container w-100 p-0 pb-3">
          <div class="row flex-wrap d-none d-md-flex align-items-center g-5 justify-content-center listOfProducts"
               style="min-height:fit-content;  width: fit-content;">
               <div v-for="item,index in ImageList" :key="index" class="py-2 col-1 mix border-0" :class="items.at(index%4)" style="min-width: 200px; flex-shrink: 0;  height: 200px;">
                <div class="" style="">
                  <!-- <el-image style="width: 100%; height: 100%" :lazy="true" loading="eager" :src="item" fit="cover" /> -->
                  <img  class="img shadow-sm" style="height: 180px; width:180px"   v-bind:src="item" v-bind:alt="item"/>
                  <!-- <h6>{{item}}</h6> -->
                </div>
              </div>
          </div>
          <el-scrollbar class="justify-content-evenly d-block d-md-none listOfProducts1"
                        style="height:fit-content;  width: 100%;">
            <div class="d-flex gap-4">
              <div v-for="(item,index) in ImageList" :key="index" class="py-2 col-1 mix border-0" :class="items.at(index%4)"
                   style="min-width: 200px; flex-shrink: 0;  height: 200px;">
                <div class="border">
                  <img class="" height="150" :src="item"/>
                  <!-- <h6>link {{this.imgLink(index)}}</h6> -->
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>

      </div>
    </div>
  </section>
</template>
<!-- <div class=" d-flex flex-column gap-2 h-100 p-4 px-md-0" > -->

<!-- <div class="listOfProducts d-flex flex-row gap-2 h-50 ">
  <div v-for="index in Math.round(TAILLE/2)" class="mix" :key="index" :class="items.at(index%4)" :data-category="items.at(index%4)">
    <div  @click="visible = true"  class="card p-0 mix align-self-center"  style="height:300px; width:270px">
        <img class="card-img-top"  src="@/assets/photo-1560799376-26f5f5bc97bb.webp" width="100" height="200" alt="{{index}}"/>
        <h6>{{index}}</h6>
    </div>
  </div>
</div> -->
<script>
import 'jquery/dist/jquery.min.js'
import mixitup from 'mixitup';

const links = document.getElementsByClassName("nav-link item")
const items = document.getElementsByClassName("img")


export default {
  components: {},
  data() {
    return {
      visible: false,
      TAILLE: 14,
      items: [
        "eq",
        "ma",
        "in",
        "re"
      ],
      ImageList:{
        0:"./images/1.jpg",
        1:"./images/2.jpg",
        2:'./images/3.jpg',
        3:"./images/4.jpg",
        4:"./images/5.jpg",
        5:"./images/6.jpg",
        6:"./images/7.jpg",
        7:"./images/8.jpg",
        8:"./images/9.jpg",
        9:"./images/10.jpg",
        10:"./images/11.jpg",
        11:"./images/12.jpg",
        12:"./images/13.jpg",
        13:"./images/14.jpg",
        // 14:"./images/15.jpg",
      }
    }
  },
  mounted() {

    var mixer = mixitup('.listOfProducts', {
      animation: {
        effectsIn: 'fade translateY(-100%)',
        duration: 300,
        animateResizeContainer: true
      },
      // callbacks: {
      //     onMixEnd: function(state) {
      //          console.log('Operation complete');
      //          console.log(state);
      //          console.log(state.totalShow );
      //          // slider.refresh();
      //     }
      // }
    });
    mixer.filter('all')

    var mixer1 = mixitup('.listOfProducts1', {
      animation: {
        effectsIn: 'fade translateY(-100%)',
        duration: 300,
        animateResizeContainer: true
      }
    })
    mixer1.filter('all')

        // console.log(items);
    var index=0;
    for(index ; index<items.length;index++){
      const img = items[index]
      // img.setAttribute("src", this.ImageList[index])
      
      // img.attribute=this.ImageList[index]
      // console.log(img);
    }
  },
  created(){



  },
  methods: {
    imgLink(index){
      
    },
    getActive(option) {
      // console.log(links);
      for (let optionKey = 0; optionKey < links.length; optionKey++) {
        if (option === optionKey) {
          links[optionKey].classList.add("active")
        } else {
          links[optionKey].classList.remove("active")
        }
      }
    }
  }
}

</script>
<style scoped>

.nav-link {
  font-weight: 500 !important;
  font-size: 15px !important;
  color: #000000 !important;
  transition: all ease 150ms;
  width: available;
  border: none;
  border-radius: 0;
}

.nav-link.item {
  border: none;
  border-right: 0.1px solid lightgrey !important;

}

button.nav-link {
  border: none;
  border-right: 0.1px solid lightgrey !important;
  box-shadow: none !important;
}

/* .mix .border:hover{
  transition: all ease 150ms;
  box-shadow: 0 0 30px rgba(233,233,233,0.88);
  transform: translate(1px,-1px);
}*/
.nav-link:hover {
  color: burlywood !important;
}

.nav-link.active {
  /* border-bottom: none !important; */
  border-top: 2px solid burlywood !important;
  color: burlywood !important;
  background-color: white;
}
</style>