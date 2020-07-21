<template>
  <v-col v-if="tasks.length > 0" cols="12" sm="6" offset-sm="3">
    <v-card max-width="360" class="mx-auto">
      <v-list flat subheader>
        <v-list-item-group v-model="settings" multiple>
          <transition-group name="list" tag="div">
            <app-list-item
              v-for="task in tasks"
              :key="task.id"
              :task="task"
              v-on="$listeners"
            ></app-list-item>
          </transition-group>
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
  watch: {
    tasks() {
      this.setCheckBoxStates();
    },
  },
  created() {
    this.setCheckBoxStates();
  },
  methods: {
    setCheckBoxStates() {
      const storage = JSON.parse(localStorage.getItem('vueTodoList'));
      const checkedState = [];
      if (storage) {
        storage.forEach((task) => {
          if (task.checked) {
            checkedState.push(task.id);
          }
        });
        this.settings = checkedState;
      }
    },
  },
};
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
