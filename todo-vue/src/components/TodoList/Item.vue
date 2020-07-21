<template>
  <v-list-item :value="task.id" @click="updateCheck">
    <template v-slot:default="{ active, toggle }">
      <v-list-item-action>
        <v-checkbox
          :input-value="active"
          :true-value="task.id"
          color="error"
          @click="toggle"
        ></v-checkbox>
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
  },
  methods: {
    removeTaskHandler() {
      this.$emit('removeTask', this.task.id);
    },
    updateCheck() {
      this.task.checked = !this.task.checked;
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
