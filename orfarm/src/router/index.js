import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import ShopDetails from '../views/ShopDetails.vue';
import ShopLeftSidebar from '../views/ShopLeftSidebar.vue';
import Blog from '../views/Blog.vue';
import BlogDetails from '../views/BlogDetails.vue';
import Checkout from '../views/Checkout.vue';
import LogIn from '../views/LogIn.vue';
import Cart from '../views/Cart.vue';
import Wishlist from '../views/Wishlist.vue';
import NotFound from '../views/NotFound.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import store from '../stores/auth.js';
import { useStore} from "vuex"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop-details',
    name: 'shop-details',
    component: ShopDetails
  },
  {
    path: '/shop-left-sidebar',
    name: 'shop-left-sidebar',
    component: ShopLeftSidebar
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog-details',
    name: 'blog-details',
    component: BlogDetails
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path:'/forgotpassword',
    name:'forgotpassword',
    component:ForgotPassword,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    component: Wishlist,
  },
  {
    path: '/404',
    name: 'not-found',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];


function isAuthenticated() {
	return localStorage.getItem("token");
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
