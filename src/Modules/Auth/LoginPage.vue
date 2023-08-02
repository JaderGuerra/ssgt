<template>
  <ion-content>
    <ion-card>
      <ion-card-header>
        <ion-card-title>
          Welcome
        </ion-card-title>
        <ion-card-subtitle>
          Enter your credential to login.
        </ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <ion-item>
          <ion-label position="floating">User</ion-label>
          <ion-input></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Password</ion-label>
          <ion-input type="password"></ion-input>
        </ion-item>
        <ion-button fill="clear" >Sign In</ion-button>
      </ion-card-content>
    </ion-card>
  </ion-content>
</template>

<script setup>

import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton
} from '@ionic/vue';

</script>

<style>

ion-content {
  --background: #e8e8e8;
}

ion-card {
  margin: 10rem auto;
  max-width: 460px;
  border-radius: .5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
