<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>People</ion-title>
        <ion-buttons slot="end">
          <ion-button color="primary" @click="router.push({name: 'people.create'})">
            <ion-icon slot="start" :icon="add"></ion-icon>
            Add Person
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar @input="searchbar = $event.target.value" :debounce="400" placeholder="Search by name, ID or email" show-clear-button="focus" :animated="true"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding" :fullscreen="false">
      <ion-list v-if="people.length" class="list-people">
        <ion-item v-for="person in people" :key="person.id">
          <ion-avatar slot="start">
            <ion-icon color="medium" size="large" :icon="personIcon"></ion-icon>
          </ion-avatar>
          <ion-label>
            {{ person.name }}
            <p class="person-data">
              ID: {{ person.identification }} | {{ person.email }}
            </p>
          </ion-label>
        </ion-item>
      </ion-list>
      <section class="no-content" v-else>
        <p>No content found.</p>
        <img src="@/assets/images/void.svg">
        <ion-button size="small" color="primary" fill="solid" @click="router.push({name: 'people.create'})">
          <ion-icon slot="start" :icon="add"></ion-icon>
          Add Person
        </ion-button>
      </section>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonButton,
  IonSearchbar,
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  useIonRouter
} from '@ionic/vue';
import { PeopleService } from './PeopleService'
import { onMounted, ref, watch } from "vue";
import { add, person as personIcon } from 'ionicons/icons'
import { Person } from "./Person";
import { PersonResponse } from './PersonResponse';

const people = ref<Person[]>([]);
let searchbar = ref('')
let page = ref(1)
let totalPages = ref(0)
let totalPeople = ref(0)
const router = useIonRouter()

const setResponse = (response: PersonResponse) => {
  people.value = response.data
  totalPages.value = response.last_page
  totalPeople.value = response.total
}

onMounted( async () => {
  PeopleService.getPeople().then(setResponse)
})

const getFilters = (search: string, page: number) => ({
  page,
  'filter[name]': search,
  'filter[email]': search,
  'filter[identification]': search
})

const requestPeople = (search: string, page: number) => {
  PeopleService.getPeople(getFilters(search, page)).then(setResponse)
}

watch(() => searchbar.value, async (newVal) => {
  page.value = 1
  requestPeople(newVal, page.value)
})

watch(() => page.value, (newPage) => {
  requestPeople(searchbar.value, newPage)
})

</script>

<style scoped>

ion-searchbar {
  max-width: 990px;
  margin-inline: auto;
}

.list-people, .no-content {
  margin-bottom: 3rem;
}

.list-people {
  max-width: 990px;
  margin: auto;
}

p.person-data {
  display: flex;
  align-items: center;
  gap: 15px;
}

.no-content {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
}

.no-content img {
  max-width: 100%;
}

.no-content ion-button {
  margin-top: 3rem;
}

</style>
