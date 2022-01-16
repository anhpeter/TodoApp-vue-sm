<template>
  <header class="header">
    <Title :content="'Tasks'" />
    <Button
      @btn-click="$emit('toggle-add-task')"
      :color="showTaskForm ? 'danger' : 'primary'"
      >{{ showTaskForm ? "Close" : "Add task" }}</Button
    >
  </header>
</template>

<script>
import Button from "./Button.vue";
import Title from "./Title.vue";
export default {
  components: { Title, Button },
  props: {
    showTaskForm: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>