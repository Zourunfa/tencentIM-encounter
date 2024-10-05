import { createPinia } from 'pinia'
import { persistedstate } from './plugins/persistedstate'
import TIMPlugin from './plugins/TIM-plugin'
const pinia = createPinia()
pinia.use(persistedstate)

pinia.use(TIMPlugin)
export default pinia
