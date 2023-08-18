<template>
  <ion-list lines="full">
    <ion-list-header>
      <ion-label>
        SGSST
        <p>sailormoon@example.com</p>
      </ion-label>
    </ion-list-header>
    <ion-item router-link="/app/people-list" button>
      <analitics slot="start"></analitics>
      <ion-label>Dashboard</ion-label>
    </ion-item>
    <ion-item router-link="/app/people-list" button class="item-active">
      <person slot="start"></person>
      <ion-label style="color: #3b82f6; font-weight: bold;">Person</ion-label>
    </ion-item>
    <ion-item router-link="/app/people-list" button>
      <tutors slot="start"></tutors>
      <ion-label>Tutors</ion-label>
    </ion-item>
    <ion-item router-link="/app/people-list" button>
      <courses slot="start"></courses>
      <ion-label>Courses</ion-label>
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/vue'

import Analitics from './icons/Analytics.vue'
import Person from './icons/Person.vue'
import Tutors from './icons/Tutors.vue'
import Courses from './icons/Courses.vue'
</script>

<style scoped>
.item-active svg {
  stroke: #3b82f6;
  stroke-width: 3;
}
.item-active ion-label {
  color: #3b82f6;
  font-weight: bold;
}

</style>