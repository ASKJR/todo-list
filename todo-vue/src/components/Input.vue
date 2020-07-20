<template>
  <v-col cols="12">
    <div class="input-box">
      <div class="input-task">
        <v-text-field label="Type a new task"></v-text-field>
      </div>
      <div class="input-btn">
        <v-btn small color="primary" depressed>ADD</v-btn>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {};
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
.input-btn button {
  min-width: 61px;
}
</style>
