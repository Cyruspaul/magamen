<template>
  <!-- https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/bg/11.png -->
  <div id="Contact" v-motion-slide-visible-once-bottom class="">

    <div class="call_us bg-light" style=" height: 500px; background: url('https://tunatheme.com/tf/html/broccoli-preview/broccoli/img/bg/6.jpg') no-repeat center;
     background-size: cover;">

      <div class="container h-100" style="">
        <div class="row align-items-center h-100">
          <div class="col-lg-12">
            <div class="text-center">
              <div class="">
                <h4 class="text-white-50">Call us at any time</h4>
                <h1 class="my-3 text-white">897-876-987-90</h1>
                <h3 class="my-3 text-white">From Monday to Saturday, 8:30AM to 5:30PM</h3>
              </div>
<!--              <div class="my-4 text-center">-->
<!--                <a class="btn btn-light" href="#">CONTACT US</a>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="Second" style="padding-top: 80px" class="bg-light d-flex justify-content-center align-items-center">
      <div class="container-fluid py-5">
        <div class="container">
          <div class="text-center">
            <small class="text-uppercase  text-center mt-5 mb-4 display-5 fw-bolder" style="text-shadow: 3px 2px lightgrey;">Get In Touch</small>
            <h1 class="mt-2 mb-5">Contact For Any Queries</h1>
          </div>
          <div class="row align-items-center">
            <div class="col-md-5 ">
              <div class="d-flex flex-column align-items-center border mb-3 p-4">
                  <h5 class="font-weight-bold mb-3"><i class="bi bi-mailbox me-3"></i>Email Us</h5>
                  <p class="m-0">VentasMagamen@hotmail.com</p>
              </div>
              <div class="d-flex flex-column align-items-center border mb-3 mb-md-0 p-4">
                  <h5 class="font-weight-bold">
                    <i class="me-3 bi bi-telephone"></i>Call Us / WhatsApp </h5>
                  <div class="m-0">
                    <ul class="list-unstyled text-decoration-non py-3 ps-4">
                      <li class="mb-1"><i class="bi bi-arrow-right-short"></i>+86 19803015259</li>
                      <li class="mb-1"><i class="bi bi-arrow-right-short"></i> +86 15833933281</li>
                    </ul>
                  </div>
              </div>

            </div>
            <div class="col-md-7">
              <div class="pt-4">
<!--                <h4 class="fw-bold mb-4">Send us a mail</h4>-->
                <div>
                  <form method="get" name="myForm" @submit.prevent="sendEmail">
                    <div class="row">
                      <div class="col-md-12 py-3">
                          <label class="text-muted form-label" for="name">
                          Name
                          </label>
                          <input id="name" v-model="formDataValue.to_name" required  class="form-control" name="name" placeholder="Enter name*" type="text">
                      </div>
                      <div class="col-md-12">
                          <label class="text-muted form-label" for="email">Email</label>
                          <input id="email"  v-model="formDataValue.to_email" required  class="form-control" name="email" placeholder="Enter email*" type="email">
                        <div class="mb-4 py-3">
                          <label class="text-muted form-label" for="comments">Message</label>
                          <textarea  v-model="formDataValue.message"  id="comments" required class="form-control" name="comments" placeholder="Enter message..." rows="4">
                          </textarea>
                        </div>
                        <button id="submit" class="btn btn-primary shadow" name="send" type="submit"> Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="w-100 justify-content-center  bg-light d-flex align-items-center " style="height: 100px">
    <h6 class="fw-light">Maga Man @Copyright</h6>
  </div>
</template>

<script>

var templateParams = {
  from_name: 'Maga Man',
  to_name: 'James',
  to_email: '2442152337@qq.com',
  message: 'Check this out!'
};

export default {
  components: {},
  data(){
    return{
      formDataValue:{
        from_name: 'Maga Man',
        to_name: '',
        to_email: '',
        message: ''
      }
    }
  },
  methods: {
      sendEmail(){
        console.log(this.formDataValue)
        // emailJS.init("KupCxPqSj-MmXp7j-")
        //
        // emailJS.send('service_fa6yxph', 'template_lbs0fl2', this.formDataValue)
        //     .then(function(response) {
        //       console.log('SUCCESS!', response.status, response.text);
        //     }, function(error) {
        //       console.log('FAILED...', error);
        //     });
    }
  }
}

</script>