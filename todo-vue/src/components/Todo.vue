<template>
  <v-container>
    <v-row class="text-center pt-5">
      <app-title title="Vue To-Do list"></app-title>
      <app-logo></app-logo>
    </v-row>
  </v-container>
</template>

<script>
import Logo from './Logo.vue';
import Title from './Title.vue';

export default {
  components: {
    appLogo: Logo,
    appTitle: Title,
  },
};
</script>

<style></style>
