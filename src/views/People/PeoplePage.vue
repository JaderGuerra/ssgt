<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>People</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            People Card
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad unde sint iste facere alias ullam totam minima dicta et! Itaque vitae consequatur, voluptatem illo nisi atque odio dolorum architecto aliquid.
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>

import { 
  IonPage,
  IonHeader,
  IonContent,
  IonTitle,
  IonToolbar,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/vue";

</script>

<style scoped>
ion-card {
  max-width: 640px;
}
</style>