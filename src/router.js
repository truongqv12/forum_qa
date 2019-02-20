import Vue from 'vue'
import Router from 'vue-router'
import Forum from './views/Forum'
import Login from './views/Login';
import Signup from './views/Signup';
import Logout from './components/auth/Logout';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'forum',
            component: Forum
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
    ]
})
