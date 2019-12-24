import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {requiresAuth: false}
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});




export default router;


router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            next();
        } else {
            next({name:'login'});
        }
        next()
    }
    next()
})
