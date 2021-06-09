import { createRouter, createWebHashHistory } from "vue-router";
import TodoOverview from "../views/TodoOverview";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "CreateTodo",
    component: () => import(/* webpackChunkName: "about" */ "../views/CreateTodo.vue"),
  },
  {
    path: "/todos/:id",
    name: "Todo",
    component: TodoOverview,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import(/* webpackChunkName: "about" */ "../views/CreateTodo.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
