<template>
  <v-col cols="12" sm="6" offset-sm="3">
    <v-card max-width="360" class="mx-auto">
      <v-list flat subheader>
        <v-list-item-group v-model="settings" multiple>
          <app-list-item
            v-for="task in tasks"
            :key="task.id"
            :task="task.description"
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
  data: () => ({
    settings: [],
  }),
};
</script>

<style></style>
