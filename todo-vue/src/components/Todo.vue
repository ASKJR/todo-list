<template>
  <v-container>
    <v-row class="text-center pt-5">
      <app-title title="Vue To-Do list"></app-title>
      <app-logo></app-logo>
      <app-input></app-input>
    </v-row>
  </v-container>
</template>

<script>
import Logo from './Logo.vue';
import Title from './Title.vue';
import Input from './Input.vue';

export default {
  components: {
    appLogo: Logo,
    appTitle: Title,
    appInput: Input,
  },
};
</script>

<style></style>
