<template>
  <div>
    <Subtitle v-if="formTask">#{{ formTask?.id }}</Subtitle>
    <form @submit="onSubmit" class="w-100">
      <input
        placeholder="content"
        type="text"
        class="form-control mb-2"
        v-model="text"
      />
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="reminder"
          v-model="reminder"
        />
        <label class="custom-control-label" for="reminder">Reminder</label>
      </div>
      <div class="text-right">
        <Button :type="'submit'" :color="'dark'" :size="'sm'">Submit</Button>
      </div>
    </form>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Subtitle from "./Subtitle.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { Button, Subtitle },
  data: () => {
    return {
      text: "",
      reminder: false,
    };
  },
  methods: {
    ...mapActions(["addTask", 'updateTask']),
    onSubmit(e) {
      e.preventDefault();
      const task = {
        id: this.formTask?.id,
        text: this.text,
        reminder: this.reminder,
      };

      if (task.text.trim() == "") {
        alert("Text must be not empty!");
        return;
      }
      // add form => reset
      if (!this.formTask) {
        this.addTask(task);
        this.onReset();
      } else {
          this.updateTask(task);
      }
    },
    handleFormTask(task) {
      if (task) {
        this.text = task.text;
        this.reminder = task.reminder;
      } else {
        this.onReset();
      }
    },
    onReset() {
      this.text = "";
      this.reminder = false;
    },
  },
  computed: {
      ...mapGetters(['formTask']),
  },
  watch: {
    formTask: {
      handler(val, oldVal) {
        this.handleFormTask(val);
      },
    },
  },
  created() {
    this.handleFormTask(this.formTask);
  },
};
</script>

<style>
</style>