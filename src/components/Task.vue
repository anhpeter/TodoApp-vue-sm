<template>
  <li
    class="
      list-group-item
      d-flex
      justify-content-between
      align-items-center
      mb-2
    "
    :class="[task.reminder ? 'reminder' : '']"
    @dblclick="toggleReminder"
  >
    {{ task.text }}
    <div>
      <Button @btn-click="onEdit" :color="'success'" :size="'sm'">
        <i class="fas fa-pencil"></i>
      </Button>
      <Button
        @btn-click="onDelete"
        :color="'danger'"
        :btnClass="'ml-2'"
        :size="'sm'"
      >
        <i class="fas fa-trash-alt"></i>
      </Button>
    </div>
  </li>
</template>

<script>
import Button from "./Button.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Button },
  methods: {
    ...mapActions([
      "deleteTask",
      "toggleTaskReminder",
      "setFormTask",
      "toggleTaskForm",
    ]),
    onDelete() {
      if (confirm("Do you want to delete this item?")) {
        this.deleteTask(this.task.id);
      }
    },
    onEdit() {
      this.setFormTask(this.task);
        console.log('form task', this.formTask)
      if (!this.showTaskForm) this.toggleTaskForm();
    },
    toggleReminder() {
      this.toggleTaskReminder(this.task.id);
    },
  },
  props: {
    task: Object,
  },
  computed: {
    ...mapGetters(["showTaskForm"]),
  },
};
</script>

<style scoped>
li {
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
}
.reminder {
  border-left: 5px solid var(--primary);
}
</style>