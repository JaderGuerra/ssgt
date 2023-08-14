<template>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Create Person</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <PersonForm></PersonForm>
    </ion-content>
</template>

<script lang="ts" setup>
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from '@ionic/vue'
import PersonForm from './PersonForm.vue';
</script>


