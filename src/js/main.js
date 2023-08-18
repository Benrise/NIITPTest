import { createApp } from 'vue'
import '@/scss/style.scss'
import App from '@/App.vue'
import router from "@/router/router";
import PrimeVue from 'primevue/config';

const app = createApp(App)

app
    .use(router)
    .use(PrimeVue)
    .mount('#app')
