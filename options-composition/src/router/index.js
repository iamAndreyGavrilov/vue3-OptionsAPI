import { createRouter, createWebHashHistory } from "vue-router";
import OptionsView from "../views/OptionsView.vue";

const routes = [
  {
    path: "/",
    name: "OptionsView",
    component: OptionsView,
  },
  {
    path: "/composition",
    name: "CompositionView",
    // route level code-splitting
    // this generates a separate chunk (CompositionView.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CompositionView" */ "../views/CompositionView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
