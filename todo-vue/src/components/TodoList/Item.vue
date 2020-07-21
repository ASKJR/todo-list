<template>
  <v-list-item @click="updateCheck">
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox :input-value="active" color="error"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content class="text-body-2" :class="{ checkedTask: active }">
        {{ task.description }}
      </v-list-item-content>

      <v-list-item-icon @click="removeTaskHandler">
        <v-icon color="red">mdi-close-circle</v-icon>
      </v-list-item-icon>
    </template>
  </v-list-item>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      default() {
        return {};
      },
      required: true,
    },
    index: {
      type: Number,
      default: null,
    },
  },
  methods: {
    removeTaskHandler() {
      this.$emit('removeTask', { id: this.task.id, index: this.index });
    },
    updateCheck() {
      const updatedStorage = JSON.parse(
        localStorage.getItem('vueTodoList')
      ).map((item) => {
        if (item.id === this.task.id) {
          const task = item;
          task.checked = !item.checked;
          return task;
        }
        return item;
      });
      localStorage.setItem('vueTodoList', JSON.stringify(updatedStorage));
    },
  },
};
</script>

<style scoped>
.checkedTask {
  text-decoration: line-through;
}
</style>
