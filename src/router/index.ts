import { PEOPLE_ROUTES } from "@/views/People/PeopleRouter";
import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    name: 'login'
  },
  {
    path: "/login",
    component: () => import("@/views/Auth/LoginPage.vue"),
  },
  {
    path: "/app/",
    component: () => import("@/views/Layout.vue"),
    children: [
      ...PEOPLE_ROUTES
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
