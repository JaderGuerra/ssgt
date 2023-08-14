<template>
  <ion-page>
    <ion-content>
      <div id="container">
        <ion-card>
          <ion-card-header>
            <!-- <ion-img src="../../assets/images/logo.png" alt="ssss"></ion-img> -->
            <img class="logo" src="@/assets/images/logo.png" alt="logo" />
          </ion-card-header>

          <ion-card-content>
            <form>
              <ion-item>
                <ion-input
                  id="custom-input"
                  label="Nombre"
                  labelPlacement="floating"
                >
                </ion-input>
              </ion-item>

              <ion-item>
                <ion-input
                  id="custom-input"
                  label="Email"
                  labelPlacement="floating"
                >
                </ion-input>
              </ion-item>

              <ion-item>
                <ion-input
                  id="custom-input"
                  label="Password"
                  type="password"
                  labelPlacement="floating"
                >
                </ion-input>
              </ion-item>
              <ion-checkbox labelPlacement="end"
                >Aceptar términos y condiciones</ion-checkbox
              >

              <ion-button @click="router.push({name: 'people.list'})">ingresar</ion-button>
            </form>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
} from "@ionic/vue";

import { useIonRouter } from "@ionic/vue";

const router = useIonRouter()

</script>

<style scoped>
#container {
  background: url("@/assets/images/background2.webp") no-repeat fixed center;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
}

.logo {
  width: 120px;
  display: inline-block;
  margin: 0 auto;
}

ion-card {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 8em 1em;
}

ion-checkbox {
  margin: 1em;
}

ion-button {
  display: block;
  width: 100%;
  margin: 1em 0;
}

@media only screen and (min-width: 756px) {
  ion-card {
    width: min(600px, 756px);
    padding: 8em 4em;
  }
}
</style>
