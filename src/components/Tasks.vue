<template>
  <ul class="list-group w-100">
    <Task
      @edit-task="$emit('edit-task', task.id)"
      @delete-task="$emit('delete-task', task.id)"
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
};
</script>

<style>
</style>