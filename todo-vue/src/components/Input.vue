<template>
  <v-col cols="12">
    <div class="input-box">
      <div class="input-task">
        <v-text-field
          v-model="task"
          label="Type a new task"
          :error="error"
          @input="error = false"
        ></v-text-field>
      </div>
      <div class="input-btn">
        <v-btn
          small
          color="primary"
          depressed
          min-width="63"
          @click="newTaskHandler"
          >ADD</v-btn
        >
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      error: false,
    };
  },
  methods: {
    newTaskHandler() {
      if (this.task.trim()) {
        this.$emit('newTask', this.task);
        this.task = '';
        this.error = false;
      } else {
        this.error = true;
      }
    },
  },
};
</script>
<style scoped>
.input-box {
  display: inline-flex;
}
.input-task {
  margin: 5px;
}
.input-btn {
  margin-bottom: 20px;
  align-self: center;
}
</style>
