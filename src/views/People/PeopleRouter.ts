import { RouteRecordRaw } from "vue-router";

import ListPeoplePageVue from "./ListPeoplePage.vue";
import CreatePersonPageVue from "./CreatePersonPage.vue";

export const PEOPLE_ROUTES: RouteRecordRaw[] = [
  {
    path: '',
    redirect: '/app/people-list'
  },
  {
    path: '/app/people-list',
    component: ListPeoplePageVue,
    name: 'people.list'
  },
  {
    path: '/app/people-create/:id?',
    component: CreatePersonPageVue,
    name: 'people.create'
  }
]