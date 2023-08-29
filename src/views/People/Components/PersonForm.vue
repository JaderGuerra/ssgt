<template>
  <ion-grid>
    <ion-row>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <person-icon
            slot="start"
            stroke="var(--ion-color-primary)"
          ></person-icon>
          <ion-input
            v-model="personForm.name"
            label="Name"
            label-placement="floating"
            :clear-on-edit="true"
            type="text"
            id="name"
            name="name"
          >
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <identification
            slot="start"
            stroke="var(--ion-color-warning)"
          ></identification>
          <ion-input
            v-model="personForm.identification"
            label="Identification"
            label-placement="floating"
            :clear-on-edit="true"
            type="text"
            id="identification"
            name="identification"
          >
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <at-icon slot="start" stroke="var(--ion-color-success)"></at-icon>
          <ion-input
            v-model="personForm.email"
            label="Email"
            label-placement="floating"
            :clear-on-edit="true"
            type="email"
            id="email"
            name="email"
          >
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12" size-md="6">
        <ion-item lines="full">
          <mobile slot="start" stroke="var(--ion-color-medium)"></mobile>
          <ion-input
            v-model="personForm.phone"
            label="Phone"
            label-placement="floating"
            :clear-on-edit="true"
            type="tel"
            id="phone"
            name="phone"
          >
          </ion-input>
        </ion-item>
      </ion-col>
      <ion-col size="12">
        <ion-button
          class="ion-float-right"
          @click="$emit('personValue', personForm)"
          >Guardar</ion-button
        >
      </ion-col>
    </ion-row>
  </ion-grid>
  <pre>{{ personForm }}</pre>
</template>
<script lang="ts" setup>
import PersonIcon from "../../Components/icons/Person.vue";
import Identification from "../../Components/icons/Identification.vue";
import AtIcon from "../../Components/icons/At.vue";
import mobile from "../../Components/icons/Mobile.vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { Ref, ref, watch } from "vue";
import { Person } from "../Person";

const props = defineProps<{person: Person}>();
defineEmits(['personValue']);

let personForm: Ref<Person> = ref(props.person)

watch(() => props.person, (person) => personForm.value = person)

</script>

<style scoped>
ion-grid {
  max-width: 990px;
}
</style>
