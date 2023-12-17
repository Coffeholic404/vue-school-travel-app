import { createApp } from 'vue'
import { createRouter,  createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from '@Home.vue'
import About from '@About.vue'

const router = createRouter({
    history: createWebHistory(),
    //here where we will define our routes
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About},
    ]
})

createApp(App)
//register the created router instance
.use(router)

.mount('#app')
