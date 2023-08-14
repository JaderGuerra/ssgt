import { RouteRecordRaw } from "vue-router";

export const PEOPLE_ROUTES: RouteRecordRaw[] = [
  {
    path: 'people-list',
    component: () => import('@/views/People/ListPeoplePage.vue'),
    name: 'people.list'
  },
  {
    path: 'people-create',
    component: () => import('@/views/People/CreatePersonPage.vue'),
    name: 'people.create'
  }
]