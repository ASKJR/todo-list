<template>
  <v-col v-if="tasks.length > 0" cols="12" sm="6" offset-sm="3">
    <v-card max-width="360" class="mx-auto">
      <v-list flat subheader>
        <v-list-item-group v-model="settings" multiple>
          <app-list-item
            v-for="(task, index) in tasks"
            :key="task.id"
            :task="task"
            :index="index"
            @removeTask="beforeRemoveTask"
          ></app-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-col>
</template>

<script>
import Item from './Item.vue';

export default {
  components: {
    appListItem: Item,
  },
  props: {
    tasks: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      settings: [],
    };
  },
  created() {
    const storage = JSON.parse(localStorage.getItem('vueTodoList'));
    const checkedState = [];
    storage.forEach((task, index) => {
      if (task.checked) {
        checkedState.push(index);
      }
    });
    this.settings = checkedState;
  },
  methods: {
    beforeRemoveTask({ id, index }) {
      this.$emit('removeTask', id);
      this.settings = this.settings.filter((ind) => ind !== index);
    },
  },
};
</script>

<style></style>
