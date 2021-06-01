import Vue from 'vue'
import VueRouter from 'vue-router'

//Pages
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Register from '@/pages/Register'

//middleware
import auth from './middleware/auth'
import guest from './middleware/guest'



Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            meta: {
                middleware: [
                    guest
                ]
            },
        },
        {
            path: '/register',
            name: 'Register',
            component: Register,
            meta: {
                middleware: [
                    guest
                ]
            },
        },
    ]
})


export default router

