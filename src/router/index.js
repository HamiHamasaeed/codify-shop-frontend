import { createRouter, createWebHistory } from "vue-router";

// Importing views
import Main from "../components/master/codify-main.vue";
import Shop from "../components/shop/shop-page.vue";
import Home from "../components/home/home-page.vue";
import About from "../components/about/about-page.vue";
import Projects from "../components/project/project-page.vue";
import Systems from "../components/systems/systems-page.vue";

const routes = [
  {
    name: "main",
    path: "/",
    component: Main,
    children: [
      {
        name: "home",
        path: "", // Use relative path for child routes
        component: Home,
      },
      {
        name: "shop",
        path: "/shop", // Use relative path for child routes
        component: Shop,
      },
      {
        name: "projects",
        path: "/projects", // Use relative path for child routes
        component: Projects,
      },
      {
        name: "systems",
        path: "/systems", // Use relative path for child routes
        component: Systems,
      },
      {
        name: "about",
        path: "/about", // Use relative path for child routes
        component: About,
      },
      {
        name: "shop",
        path: "/shop", // Use relative path for child routes
        component: Shop,
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
