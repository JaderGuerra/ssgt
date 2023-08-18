<template>
  <ion-split-pane content-id="modules-content">
    <ion-menu content-id="modules-content" type="overlay">
      <ion-content>
        <nav>
          <navigation-menu></navigation-menu>
          <ion-button color="danger" expand="block" style="margin: .5rem;" router-link="/login">
            Logout
            <logout slot="end" style="margin-left: 1rem;"></logout>
          </ion-button>
        </nav>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="modules-content"></ion-router-outlet>
  </ion-split-pane>
</template>

<script setup lang="ts">

import {
  IonSplitPane,
  IonMenu,
  IonButton,
  IonRouterOutlet,
} from "@ionic/vue";

import NavigationMenu from '../Components/NavigationMenu.vue';
import Logout from '@/views/Components/icons/Logout.vue';
</script>

<style scoped>
ion-split-pane {
  --side-max-width: 15rem;
}
nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
