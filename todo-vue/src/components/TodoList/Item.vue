<template>
  <v-list-item>
    <template v-slot:default="{ active }">
      <v-list-item-action>
        <v-checkbox :input-value="active" color="error"></v-checkbox>
      </v-list-item-action>

      <v-list-item-content class="text-body-2" :class="{ checkedTask: active }">
        UFPR
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon color="red">mdi-close-circle</v-icon>
      </v-list-item-icon>
    </template>
  </v-list-item>
</template>

<script>
export default {};
</script>

<style scoped>
.checkedTask {
  text-decoration: line-through;
}
</style>
