<template>
  <ion-app>
    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>
<script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
} from "@ionic/vue";
</script>
<style>
  ion-content {
    --background: #f5f3fc00;
  }
</style>
