<template>
  <v-container>
    <v-row class="text-center pt-5">
      <app-title title="Vue To-Do list"></app-title>
      <app-logo></app-logo>
      <app-input @newTask="addTask"></app-input>
      <app-list :tasks="tasks"></app-list>
    </v-row>
  </v-container>
</template>

<script>
import Logo from './Logo.vue';
import Title from './Title.vue';
import Input from './Input.vue';
import List from './TodoList/List.vue';

export default {
  components: {
    appLogo: Logo,
    appTitle: Title,
    appInput: Input,
    appList: List,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask(task) {
      const id = new Date().getTime();
      this.tasks.push({ id, description: task });
    },
  },
};
</script>

<style></style>
