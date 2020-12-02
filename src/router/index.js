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
    },
    {
        path: '/users/1/edit',
        name: 'UsersEdit',
        component: () => import('@/views/users/Edit'),
        children: [
            {
                path: '',
                name: 'EditProfile',
                component: () => import('@/views/users/Profile'),
                meta: {
                    auth: true
                }
            },
            {
                path: '/users/1/edit_avatar',
                name: 'EditAvatar',
                component: () => import('@/views/users/Avatar'),
                meta: {
                    auth: true
                }
            },
            {
                path: '/users/1/edit_password',
                name: 'EditPassword',
                component: () => import('@/views/users/Password'),
                meta: {
                    auth: true
                }
            }
        ]
    },
    {
        path: '/articles/create',
        name: 'Create',
        component: () => import('@/views/articles/Create'),
        meta: {
            auth: true
        }
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
    } else if (!auth && to.meta.auth) {
        next('/auth/login')
    } else {
        next()
    }
});

export default router