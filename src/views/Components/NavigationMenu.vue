<template>
  <nav>
    <ion-list lines="none">
      <ion-list-header>
        <ion-thumbnail>
          <img  class="logo" src="@/assets/images/logo.png" alt="logo" />
        </ion-thumbnail>
        <ion-label :class="{'expandedLabel': expanded}">
          SGSST
          <p>sailormoon@example.com</p>
        </ion-label>
      </ion-list-header>
      <ion-item router-link="/app/people-list" button :detail="false">
        <analitics class="menu-icon" :class="{'expandedIcon': expanded}"></analitics>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Dashboard</ion-label>
      </ion-item>
      <ion-item router-link="/app/people-list" class="item-active" button :detail="false">
        <people class="menu-icon" :class="{'expandedIcon': expanded}"></people>
        <ion-label class="label" :class="{'expandedLabel': expanded}">People</ion-label>
      </ion-item>
      <ion-item router-link="/app/people-list" button :detail="false">
        <tutors class="menu-icon" :class="{'expandedIcon': expanded}"></tutors>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Tutors</ion-label>
      </ion-item>
      <ion-item router-link="/app/people-list" button :detail="false">
        <courses class="menu-icon" :class="{'expandedIcon': expanded}"></courses>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Courses</ion-label>
      </ion-item>
      <ion-item @click="$emit('expand')" class="expandBtn" button :detail="false">
        <collapse class="menu-icon" :class="{'expandedIcon': expanded}"></collapse>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Expand</ion-label>
      </ion-item>
    </ion-list>
    <ion-item color="light" lines="none" button :detail="false" router-link="/login">
      <ion-label class="label" :class="{'expandedLabel': expanded}">Logout</ion-label>
      <logout slot="end"></logout>
    </ion-item>
  </nav>
</template>

<script setup lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/vue'
import Analitics from './icons/Analytics.vue'
import People from './icons/People.vue'
import Tutors from './icons/Tutors.vue'
import Courses from './icons/Courses.vue'
import Collapse from './icons/Collapse.vue'
import Logout from '@/views/Components/icons/Logout.vue';

defineEmits(['expand'])
defineProps<{ expanded: boolean }>()
</script>

<style scoped>
nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}

ion-list-header {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

ion-list-header ion-label {
  margin: 0;
}

ion-list-header ion-thumbnail {
  margin-right: 1rem;
}

ion-item {
  margin-bottom: .5rem;
  margin-inline: .5rem;
  border-radius: .25rem;
  position: relative;
}

ion-label.expandedLabel {
  display: initial;
}

ion-item.item-active {
  --background: #3b82f6;
}
.expandBtn {
  display: none;
}

.item-active svg {
  stroke: white;
  stroke-width: 3;
}
.item-active ion-label {
  color: white;
  font-weight: bold;
}

.menu-icon {
  margin-right: 1rem;
}
.menu-icon.expandedIcon {
  margin-right: 1rem;
}

@media screen and (min-width: 768px) {
  ion-list-header ion-label {
    display: none;
  }
  .expandBtn {
    display: block;
  }
  .menu-icon {
    margin-right: 0;
    margin-left: .2rem;
  }
  .label {
    display: none;
  }
}

@media screen and (min-width: 1024px) {
  ion-list-header ion-label {
    display: initial;
  }
  .expandBtn {
    display: none;
  }
  .menu-icon {
    margin-right: 1rem;
  }
  .label {
    display: initial;
  }
}

</style>