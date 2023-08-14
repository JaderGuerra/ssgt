<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <ion-icon :icon="personOutline" slot="start" color="primary"></ion-icon>
          <ion-input :value="personForm?.name" label="Name" label-placement="floating" :clear-on-edit="true" type="text">
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <ion-icon :icon="cardOutline" slot="start" color="warning"></ion-icon>
          <ion-input :value="personForm?.identification" label="Identification" label-placement="floating" :clear-on-edit="true" type="text">
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <ion-icon :icon="at" slot="start" color="success"></ion-icon>
          <ion-input :value="personForm?.email" label="Email" label-placement="floating" :clear-on-edit="true" type="email">
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <ion-icon :icon="phonePortraitOutline" slot="start" color="medium"></ion-icon>
          <ion-input :value="personForm?.phone" label="Phone" label-placement="floating" :clear-on-edit="true" type="tel">
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12">
        <ion-button class="ion-float-right" @click="$emit('personValue', personForm)">Guardar</ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>
<script lang="ts" setup>
import  { Person } from './Person'
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonIcon,
  IonInput,
  IonButton
} from '@ionic/vue'
import { personOutline, at, cardOutline, phonePortraitOutline } from 'ionicons/icons';
import { ref } from 'vue';

const props = defineProps<{
  person?: Person
}>()
defineEmits(['personValue'])

const personForm = ref(props?.person ?? {
  name: '',
  identification: '',
  email: '',
  phone: ''
})

</script>

<style scoped>
ion-grid {
  max-width: 990px;
}
</style>
