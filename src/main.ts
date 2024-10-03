import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pinia from './store'
createApp(App).use(Pinia).mount('#app')
