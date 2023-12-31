<template>
  <ion-page>
    <ion-header :translucent="true" collapse="fade">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>People</ion-title>
        <ion-buttons slot="end">
          <ion-button color="primary" router-link="people-create">
            <ion-icon slot="start" :icon="add"></ion-icon>
            Add Person
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar @input="searchbar = $event.target.value" :debounce="400" placeholder="Search by name, ID or email" show-clear-button="focus" :animated="true"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">People</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-list class="list-people" v-if="people.length" lines="none">
          <ion-item v-for="person in people" :key="person.id" button :router-link="{name: 'people.create', params: {id: person.id}}">
            <person-icon slot="start" style="stroke: #3b82f6;"></person-icon>
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
          <ion-button size="small" color="primary" fill="solid" router-link="people-create">
            <ion-icon slot="start" :icon="add"></ion-icon>
            Add Person
          </ion-button>
        </section>
      </main>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>

import {
  IonPage,
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
  IonLabel,
} from '@ionic/vue';

import { PeopleService } from './PeopleService'
import { onMounted, ref, watch } from "vue";
import { add } from 'ionicons/icons'
import { Person } from "./Person";
import { PersonResponse } from './PersonResponse';
import PersonIcon from '@/views/Components/icons/Person.vue'

const people = ref<Person[]>([]);
let searchbar = ref('')
let page = ref(1)
let totalPages = ref(0)
let totalPeople = ref(0)

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

header {
  max-width: 72rem;
  margin-inline: auto;
}

main {
  max-width: 72rem;
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
  margin: auto;
}

.no-content img {
  max-width: 100%;
}

.no-content ion-button {
  margin-top: 3rem;
}

</style>
