import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: () => import("@/views/Auth/LoginPage.vue"),
  },
  {
    path: "/",
    component: () => import("@/views/Layout.vue"),
    children: [
      {
        path: "",
        redirect: "people"
      },
      {
        path: "people",
        component: () => import('@/views/People/PeoplePage.vue')
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/Shared/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
