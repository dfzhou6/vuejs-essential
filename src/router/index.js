import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
    {
        path: '/auth/register',
        name: 'Register',
        component: () => import('@/views/auth/Register')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/Login')
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const auth = router.app.$options.store.state.auth;
    if (auth && to.path.indexOf('/auth/') !== -1) {
        next('/')
    } else if (!auth && to.path.indexOf('/auth/') === -1) {
        next('/auth/login')
    } else {
        next()
    }
});

export default router