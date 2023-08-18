import { createApp } from 'vue'
import '@/scss/style.scss'
import App from '@/App.vue'
import router from "@/router/router";
import PrimeVue from 'primevue/config';
import VueMobileDetection from "vue-mobile-detection";

const app = createApp(App)

app
    .use(router)
    .use(PrimeVue)
    .use(VueMobileDetection)
    .mount('#app')
