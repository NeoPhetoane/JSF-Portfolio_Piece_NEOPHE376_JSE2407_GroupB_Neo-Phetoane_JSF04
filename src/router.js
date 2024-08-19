
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import ProductDetail from './views/ProductDetail.vue';
import Login from "./views/Log-In.vue";
import Cart from "./views/Cart.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    meta: { requiresAuth: true },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next({ name: 'Login', query: {redirect: to.fullPath} }); // Redirect to Login if not authenticated, passing the original route.
  } else {
    next();
  }
});

export default router;