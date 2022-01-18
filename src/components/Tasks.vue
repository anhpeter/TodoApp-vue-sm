<template>
  <div class="text-center"  v-if="tasksStatus == 'loading'"> loading ... </div>
  <ul v-else class="list-group w-100">
    <div v-if="isTaskEmpty" class="alert alert-primary" role="alert">
      No task
    </div>
    <Task
      v-else
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task"
    />
  </ul>
</template>

<script>
import Task from "./Task.vue";
import { mapGetters } from "vuex";

export default {
  components: { Task },
  props: {
    tasks: [Object],
  },
  computed: {
    ...mapGetters(["tasksStatus"]),
    isTaskEmpty() {
      return this.tasks.length == 0;
    },
  },
};
</script>

<style>
</style>