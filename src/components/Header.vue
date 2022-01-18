<template>
  <header class="header">
    <Title :content="'Tasks'" />
    <Button
      @btn-click="toggleTaskForm"
      :color="showTaskForm ? 'danger' : 'primary'"
      >{{ showTaskForm ? "Close" : "Add task" }}</Button
    >
  </header>
</template>

<script>
import Button from "./Button.vue";
import Title from "./Title.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { Title, Button },
  methods: {
      ...mapActions(['toggleTaskForm']),
  },
  computed: {
      ...mapGetters(['showTaskForm']),
  }

};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>