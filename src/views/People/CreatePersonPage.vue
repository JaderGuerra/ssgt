<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Create Person</ion-title>
        <ion-buttons slot="end">
          <ion-button router-link="people-list">
            <chevron-left slot="start" stroke="var(--ion-color-primary)"></chevron-left>
            Back
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <PersonForm></PersonForm>
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
  IonContent,
} from '@ionic/vue'
import PersonForm from './Components/PersonForm.vue';
import ChevronLeft from '../Components/icons/ChevronLeft.vue';
</script>


