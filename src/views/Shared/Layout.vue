<template>
  <ion-split-pane :style="{...(expanded ? {'--side-min-width': '15rem', '--side-max-width': '15rem'} : {})}" when="md" content-id="modules-content">
    <ion-menu content-id="modules-content" type="push">
      <ion-content>
        <navigation-menu @expand="expand" :expanded="expanded"></navigation-menu>
      </ion-content>
    </ion-menu>
    <ion-router-outlet id="modules-content"></ion-router-outlet>
  </ion-split-pane>
</template>

<script setup lang="ts">
import {
  IonSplitPane,
  IonMenu,
  IonRouterOutlet,
} from "@ionic/vue";
import { ref } from "vue";
import NavigationMenu from '../Components/NavigationMenu.vue';

let expanded = ref(false)
const expand = () => {
  expanded.value = !expanded.value
}
</script>

<style scoped>

@media (min-width: 768px) {
  ion-split-pane {
    --side-max-width: 5rem;
    --side-min-width: 5rem;
  }
}

@media (min-width: 1024px) {
  ion-split-pane {
    --side-max-width: 17rem;
    --side-min-width: 17rem;
  }
}
</style>
