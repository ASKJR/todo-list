<template>
  <v-app>
    <v-main>
      <app-todo></app-todo>
    </v-main>
  </v-app>
</template>

<script>
import Todo from './components/Todo.vue';

export default {
  components: {
    appTodo: Todo,
  },
};
</script>
<style scoped>
.v-application {
  background-color: #ececec !important;
}
</style>
