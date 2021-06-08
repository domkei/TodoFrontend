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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/CreateTodo.vue"),
  },
  {
    path: "/todos/:id",
    name: "Todo",
    component: TodoOverview,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
