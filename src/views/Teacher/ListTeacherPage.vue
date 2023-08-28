<template>
  <ion-page>
    <ion-header :translucent="true" collapse="fade">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Teachers</ion-title>
        <ion-buttons slot="end">
          <ion-button color="primary" router-link="people-create">
            <ion-icon slot="start" :icon="add"></ion-icon>
            Add Teacher
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <main>
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Teachers</ion-title>
          </ion-toolbar>
        </ion-header>
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
  IonContent,
} from '@ionic/vue';

import { add } from 'ionicons/icons'
</script>
