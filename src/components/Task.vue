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
    @dblclick="$emit('toggle-reminder', task.id)"
  >
    {{ task.text }}
    <div>
      <Button @btn-click="$emit('edit-task')" :color="'success'" :size="'sm'">
        <i class="fas fa-pencil"></i>
      </Button>
      <Button
        @btn-click="$emit('delete-task')"
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
export default {
  components: { Button },
  emits: ['delete-task', 'edit-task', 'toggle-reminder'],
  props: {
    task: Object,
  },
};
</script>

<style scoped>
li {
  border-radius: 5px;
  cursor:pointer;
  user-select: none;
}
.reminder {
  border-left: 5px solid var(--primary);
}
</style>