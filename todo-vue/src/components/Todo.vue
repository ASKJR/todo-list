<template>
  <v-container>
    <v-row class="text-center pt-5">
      <app-title title="Vue To-Do list"></app-title>
      <app-logo></app-logo>
      <app-input @newTask="addTask"></app-input>
      <app-list :tasks="tasks" @removeTask="removeTask"></app-list>
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
      this.tasks.push({ id, description: task, checked: false });
    },
    removeTask(id) {
      const index = this.tasks.findIndex((task) => task.id === id);
      if (index >= 0) {
        this.tasks.splice(index, 1);
      }
    },
  },
};
</script>

<style></style>
