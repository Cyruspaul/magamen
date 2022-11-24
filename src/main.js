import { createApp } from "vue";
import App from "./App.vue";
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import '@/assets/bootstrap.min.css'
import 'element-plus/theme-chalk/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ELementPlus from 'element-plus'
import {MotionPlugin} from '@vueuse/motion'
import VueScrollTo from 'vue-scrollto';
import i18n from './locales/i18n'
import FlagIcon from 'vue-flag-icon';


createApp(App)
    .use(MotionPlugin)
    .use(i18n)
    .use(FlagIcon)
    .use(VueScrollTo, {
        container: "body",
        duration: 300,
        easing: "ease",
        offset: 0,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    })
.use(ELementPlus)
    // .use(emailJS)
    .use(MotionPlugin).mount("#app");
