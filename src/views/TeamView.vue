<template>
  <section id="Team"  class=" bg-light  PageField position-relative" style="background-color:#c0c4c7;
   /*background: url('http://htmlbeans.com/html/consults/images/img06.jpg') center no-repeat;backdrop-filter: blur(5px);*/
      background-clip: border-box; background-size: cover; padding-top: 100px;padding-bottom: 80px;">
    <span style="position: absolute;height: 100%; width: 100%; top: 0; left: 0; bottom: 0;right:0;z-index: -1000 ; background-color: #3f51b5; opacity: 0.9"></span>
    <div v-motion-slide-visible-once-bottom class="container my-5">
      <div class="section-title-wrapper mb-5">
        <div class="row ">
          <div class="col-sm-12  col-md-6 mx-auto text-center">
            <small class="text-uppercase  text-center mt-5 mb-4 display-5 fw-bolder" style="text-shadow: 3px 2px lightgrey;">{{$t('Team.title')}}</small>
            <p class="lead my-3">{{$t('Team.firstText')}}</p>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row row flex-wrap justify-content-evenly g-4">

        <div class="col-sm-10 col-md-5">
          <div class="card shadow border p-4 text-center">
            <div class="overlay-wrap mb-4">
              <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Card image cap" width="200" height="200" class="img-fluid rounded-circle  img-thumbnail  shadow-md">
            </div>
            <div class="card-body p-0">
              <h4 class="card-title mb-2">{{$t('Team.items[0].name1')}} <br>{{$t('Team.items[0].name2')}}</h4><span class="text-primary d-block font-italic mb-3">
              {{$t('Team.items[0].major')}}
            </span>
              <p class="card-text mb-4 text-muted">{{$t('Team.items[0].tel')}}</p>
              <ul class="list-inline social-icons-list mb-0">
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-twitter text-info" aria-hidden="true"></i></a></li>
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-pinterest-p text-danger" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-sm-10 col-md-5">
          <div class="card border p-4 shadow text-center">
            <div class="overlay-wrap mb-4">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Card image cap" width="200" height="200" class="img-fluid img-thumbnail rounded-circle shadow">
            </div>
            <div class="card-body p-0">
              <h4 class="card-title mb-2"> {{$t('Team.items[1].name1')}} <br> {{$t('Team.items[1].name2')}}</h4><span class="text-primary d-block font-italic mb-3">{{$t('Team.items[1].major')}}</span>
              <p class="card-text mb-4 text-muted">{{$t('Team.items[1].tel')}}</p>
              <ul class="list-inline social-icons-list mb-0">
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-facebook-f" aria-hidden="true"></i></a></li>
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-twitter text-info" aria-hidden="true"></i></a></li>
                <li class="list-inline-item"><a href="javascript:void(0);" class="font-lg mx-1"><i
                    class="fab  fab fa-pinterest-p text-danger" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>