import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App)
//register the created router instance
.use(router)

.mount('#app')
