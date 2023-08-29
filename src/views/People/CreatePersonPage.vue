<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Create Person</ion-title>
        <ion-buttons slot="end">
          <ion-back-button></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <PersonForm @person-value="savePerson($event)" :person="person"></PersonForm>
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
  IonBackButton,
  IonTitle,
  IonContent,
} from '@ionic/vue'

import PersonForm from './Components/PersonForm.vue';
import { Person } from './Person';
import { PeopleService } from './PeopleService';
import { Ref, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
let person: Ref<Person> = ref({
  name: '',
  identification: '',
  email: '',
  phone: ''
})
const { id } = route.params

onMounted(async () => {
  if (!id) return
  person.value = await PeopleService.getPerson(id as string)
})

const savePerson = async (person: Person) => {
  if (person.id) {
    // Update
    await PeopleService.updatePerson(person.id, person)
  }
  else {
    // Create
    await PeopleService.savePerson(person)
  }
}
</script>


