import { createRouter, createWebHistory } from 'vue-router';

// Importing views
import Main from '../views/master/codify-main.vue';
import Shop from '../views/shop/shop-page.vue';
import Home from '../views/home/home-page.vue';
import About from '../views/about/about-page.vue';
import Projects from '../views/project/project-page.vue';
import Systems from '../views/systems/systems-page.vue';
import ProductItem from '../views/shop/product-item.vue';

const routes = [
  {
    name: 'main',
    path: '/',
    component: Main,
    children: [
      {
        name: 'home',
        path: '', // Use relative path for child routes
        component: Home,
      },
      {
        name: 'shop',
        path: 'shop', // Use relative path for child routes
        component: Shop,
      },
      {
        name: 'projects',
        path: 'projects', // Use relative path for child routes
        component: Projects,
      },
      {
        name: 'systems',
        path: 'systems', // Use relative path for child routes
        component: Systems,
      },
      {
        name: 'about',
        path: 'about', // Use relative path for child routes
        component: About,
      },
      {
        path: 'product/:id',
        name: 'ProductItem',
        component: ProductItem,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // Scroll to top on route change
  window.scrollTo(0, 0);
  next();
});

export default router;
