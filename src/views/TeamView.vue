<template>
  <section id="Team"  class=" bg-light  PageField position-relative" style="background-color:#c0c4c7;
      background-clip: border-box; background-size: cover; padding-top: 100px;padding-bottom: 80px;">
    <span style="position: absolute;height: 100%; width: 100%; top: 0; left: 0; bottom: 0;right:0;z-index: -1000 ;
    background:url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80') no-repeat center;
     opacity: 0.7; z-index: 0"></span>
    <div v-motion-slide-visible-once-bottom class="container my-5">
      <div class="section-title-wrapper mb-5">
        <div class="row ">
          <div class="col-sm-12  col-md-6 mx-auto text-center">
            <small class="text-uppercase  text-center mt-5 mb-4 display-5 fw-bolder" style="text-shadow: 3px 2px lightgrey;">{{$t('Team.title')}}</small>
            <p class="lead my-3 text-light">{{$t('Team.firstText')}}</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row row flex-wrap justify-content-evenly g-3">

        <div v-motion-slide-visible-once-bottom class="col-sm-10 col-md-3 offset-md-1">
            <div  class="card shadow border p-4 text-center">
              <div class="overlay-wrap mb-4">
                <!--              <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Card image cap" width="200" height="200" class="img-fluid rounded-circle  img-thumbnail  shadow-md">-->
              </div>
              <div class="card-body p-0">
                <h4 class="card-title mb-2">{{$t('Team.items[0].name1')}} <br>{{$t('Team.items[0].name2')}}</h4>
              </div>
            </div>
          </div>
          <div v-motion-slide-visible-once-bottom class="col-sm-10 col-md-3 offset-md-1">
            <div class="card border p-4 shadow text-center">
              <div class="overlay-wrap mb-4">
                <!--              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Card image cap" width="200" height="200" class="img-fluid img-thumbnail rounded-circle shadow">-->
              </div>
              <div class="card-body p-0">
                <h4 class="card-title mb-2"> {{$t('Team.items[1].name1')}} <br> {{$t('Team.items[1].name2')}}</h4>
              </div>
            </div>
          </div>
          <div v-motion-slide-visible-once-bottom class="col-sm-10 col-md-3 offset-md-1">
            <div class="card border p-4 shadow text-center">
              <div class="overlay-wrap mb-4">
                <!--              <img src="https://img.icons8.com/bubbles/100/null/businesswoman.png" alt="Card image cap" width="200" height="200" class="img-fluid img-thumbnail rounded-circle shadow">-->
              </div>
              <div class="card-body p-0">
                <h4 class="card-title mb-2"> {{$t('Team.items[2].name1')}} <br> {{$t('Team.items[2].name2')}}</h4>

              </div>
            </div>
          </div>



      </div>
    </div>
  </section>
</template>