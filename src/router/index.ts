import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

import LoginPage from '@/views/Auth/LoginPage.vue'
import Layout from "@/views/Shared/Layout.vue"

import { PEOPLE_ROUTES } from "@/views/People/PeopleRouter";
import { TEACHER_ROUTES } from "@/views/Teacher/TeacherRoutes";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
    name: 'login'
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/app/",
    component: Layout,
    children: [
      ...PEOPLE_ROUTES,
      ...TEACHER_ROUTES
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
