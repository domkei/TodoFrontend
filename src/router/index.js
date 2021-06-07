import { createRouter, createWebHashHistory } from "vue-router";
// import App from "../views/Home.vue";
import TodoOverview from "../views/TodoOverview";

const routes = [
  {
    path: "/",
    name: "TodoOverview",
    component: TodoOverview,
  },
  {
    path: "/create",
    name: "CreateTodo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/CreateTodo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
