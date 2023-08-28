import { RouteRecordRaw } from "vue-router";

import ListTeacherPage from './ListTeacherPage.vue';

export const TEACHER_ROUTES: RouteRecordRaw[] = [
  {
    path: "/app/teachers-list",
    component: ListTeacherPage,
    name: "teacher.list",
  },
/*   {
    path: "/app/teacher-create",
    component: CreateTeacherPageVue,
    name: "teacher.create",
  }, */
];