import { createApp } from 'vue'
import { createRouter,  createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@Home.vue'

const router = createRouter({
    history: createWebHistory(),
    //here where we will define our routes
    routes: [
        {path: '/', name: 'Home', component: Home}
    ]
})

createApp(App)
//register the created router instance
.use(router)

.mount('#app')
