<template>
    <section id="cat" class="overflow-hidden d-flex align-items-center flex-row position-relative py-5" style="height:fit-content; min-height:600px; width: 100%; background: url('https://images.unsplash.com/photo-1601961545517-59307b1fbac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGxhYm9yYXRvcnklMjBlcXVpcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60') no-repeat center; background-size: cover;
             filter:  blur(0px);">
        <div class="position-absolute top-0 bottom-0 end-0 start-0 h-100" style=" z-index: -1;">
            <div class="" style="height: 65%; ">

            </div>
            <div class="" style="height: 35%;background-color: bisque;"></div>
        </div>
        <div class="h-auto w-100 container" style="">
            <p class="text-uppercase text-white text-center my-3 display-5 fw-bolder" style="text-shadow: 3px 2px darkslategrey;">Top Categories</p>
            <div class=" h-100 p-4 px-md-0 row gap-3 align-items-center justify-content-center " >
                
                <div class="card col item d-flex flex-column align-items-center justify-content-evenly" v-for="(index, item) in items" :key="item"  style="height: 200px; min-width:170px">
                    <img :src="index" width="100" height="100"/>
                    <h6>{{item}}</h6>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>

const items = {
    "EQUIPMENT":"https://img.icons8.com/bubbles/100/null/microscope.png",
    "MATERIALS":"https://img.icons8.com/bubbles/100/null/doctors-laboratory-coat.png",
    "INSTRUMENTS":"https://img.icons8.com/bubbles/100/null/measuring-cylinder.png",
    "REAGENTS":"https://img.icons8.com/bubbles/100/null/rain-sensor.png"
}



</script>
<style>

#cat{
    text-align: justify;
}.swiper {
  width: 600px;
  height: 300px;
}
.item{
    color: black;
}

.item:hover{
    transition:  all ease 150ms;
    border: 1px solid green;
    color: green;
}
</style>