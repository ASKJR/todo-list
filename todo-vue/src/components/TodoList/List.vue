<template>
  <v-col v-if="tasks.length > 0" cols="12" sm="6" offset-sm="3">
    <v-card max-width="360" class="mx-auto">
      <v-list flat subheader>
        <v-list-item-group multiple>
          <app-list-item
            v-for="task in tasks"
            :key="task.id"
            :task="task"
            v-on="$listeners"
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
};
</script>

<style></style>
