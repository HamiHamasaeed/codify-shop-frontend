import { createRouter, createWebHistory } from "vue-router";

// Importing views
import Main from "../views/master/codify-main.vue";
import Shop from "../views/shop/shop-page.vue";
import Home from "../views/home/home-page.vue";
import About from "../views/about/about-page.vue";
import Projects from "../views/project/project-page.vue";
import Systems from "../views/systems/systems-page.vue";
import ProductItem from "../views/shop/product-item.vue";
import Stores from "../views/stores/stores-view.vue";

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
        path: "stores",
        name: "stores",
        component: Stores,
        props: true,
      },
      {
        name: "projects",
        path: "projects", // Use relative path for child routes
        component: Projects,
      },
      {
        name: "systems",
        path: "systems", // Use relative path for child routes
        component: Systems,
      },
      {
        name: "about",
        path: "about", // Use relative path for child routes
        component: About,
      },
      {
        path: "product/:id",
        name: "ProductItem",
        component: ProductItem,
        props: route => ({
          id: route.params.id,
          shopId: route.query.shopId,
          imageSrc: route.query.imageSrc,
          title: route.query.title,
          price: route.query.price,
          description: route.query.description,
          brand: route.query.brand,
          condition: route.query.condition,
          category: route.query.category,
          stock: route.query.stock,
          discount: route.query.discount
        })
      },
      {
        name: "shop",
        path: "shop/:shopId?", // Use relative path for child routes
        component: Shop,
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
