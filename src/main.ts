import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pinia from './store'
import router from './router.ts'
import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
createApp(App).use(router).use(Pinia).use(Antd).mount('#app')
