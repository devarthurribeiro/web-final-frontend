import Vue from 'vue';
import Home from './views/Home.vue';
import Profile from './views/Profile.vue';
import Products from './views/Products.vue';
import ProductAdd from './views/ProductAdd.vue';

import LoginForm from './components/LoginForm.vue';

import {
  IonicVueRouter
} from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      children: [{
        path: '/',
        name: 'Products',
        component: Products
      }, {
        path: '/product-add',
        name: 'ProductAdd',
        component: ProductAdd
      }, {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }, {
        path: '/login',
        name: 'Login',
        component: LoginForm
      }, ]
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});