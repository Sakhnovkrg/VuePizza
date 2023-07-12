import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {registerScrollSpy} from 'vue3-scroll-spy';
import {createPinia} from 'pinia'

const app = createApp(App)
const pinia = createPinia()

registerScrollSpy(app, {allowNoActive: true, offset: 70})

app
    .use(router)
    .use(pinia)

app.mount('#app')
