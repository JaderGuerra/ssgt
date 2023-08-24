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
      <ion-item-divider mode="md">
        <ion-label color="primary">MENU</ion-label>
      </ion-item-divider>
        <ion-item
          button
          v-for="r in routes"
          @click="handleExpand"
          :router-link="r.route"
          router-direction="root"
          :detail="false"
          :class="{'item-active': route.path.startsWith(r.route)}"
        >
          <component :is="r.icon" class="menu-icon" :class="{'expandedIcon': expanded}"></component>
          <ion-label class="label" :class="{'expandedLabel': expanded}">{{ r.label }}</ion-label>
        </ion-item>

      <ion-item-divider mode="md">
        <ion-label color="secondary">OPTIONS</ion-label>
      </ion-item-divider>

      <ion-item @click="emit('expand')" class="expandBtn" :class="{expanded}" button :detail="false">
        <collapse class="menu-icon" :class="{'expandedIcon': expanded}"></collapse>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Expand</ion-label>
      </ion-item>
      <ion-item lines="none" button :detail="false" router-link="/login">
        <logout class="menu-icon" :class="{'expandedIcon': expanded}"></logout>
        <ion-label class="label" :class="{'expandedLabel': expanded}">Logout</ion-label>
      </ion-item>
    </ion-list>
  </nav>
</template>

<script setup lang="ts">
import {
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
} from '@ionic/vue'
import Home from './icons/Home.vue'
import People from './icons/People.vue'
import Tutors from './icons/Tutors.vue'
import Courses from './icons/Courses.vue'
import Collapse from './icons/Collapse.vue'
import Logout from '@/views/Components/icons/Logout.vue';
import { useRoute } from 'vue-router'

const emit = defineEmits(['expand'])
const props = defineProps<{ expanded: boolean }>()

const handleExpand = () => {
  if (props.expanded) {
    emit('expand')
  }
}

let route = useRoute()
const routes = [
  {
    route: '/app/home',
    icon: Home,
    label: 'Home'
  },
  {
    route: '/app/people-list',
    icon: People,
    label: 'People'
  },
  {
    route: '/app/teachers-list',
    icon: Tutors,
    label: 'Teachers'
  },
  {
    route: '/app/courses-list',
    icon: Courses,
    label: 'Courses'
  },
]
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
  margin-top: .5rem;
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
  border: 1px solid transparent;
}
.expandBtn.expanded {
  border-color: var(--ion-color-secondary);
  --background: var(--ion-color-secondary);
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