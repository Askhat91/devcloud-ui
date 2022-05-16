import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../components/core/Login.vue';
import store from './../store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            allowAnonymous: true
        }
    }, {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            breadcrumb: [{
                text: 'Главная',
                disabled: true,
                href: '',
            }]
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    const loginPages = ['/login'];
    const authRequired = !loginPages.includes(to.path);
    const loggedIn = localStorage.getItem('DevCloud_accessToken');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
    next();
  });
  
  router.afterEach(() => {
  
  });
  

export default router