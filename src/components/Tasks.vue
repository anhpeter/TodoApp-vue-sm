<template>
  <ul class="list-group w-100">
    <template v-if="isTaskEmpty">
      <div class="alert alert-primary" role="alert">No task</div>
    </template>
    <Task
      v-else
      @edit-task="$emit('edit-task', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="(id) => $emit('toggle-reminder', id)"
      v-for="task in tasks"
      v-bind:key="task.id"
      :task="task"
    />
  </ul>
</template>

<script>
import Task from "./Task.vue";

export default {
  components: { Task },
  props: {
    tasks: [Object],
  },
  computed: {
    isTaskEmpty() {
      return this.tasks.length == 0;
    },
  },
};
</script>

<style>
</style>