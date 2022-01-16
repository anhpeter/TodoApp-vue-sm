<template>
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
</template>

<script>
import Button from "./Button.vue";
import { Helper } from "../common/helpers/Helper";
import Subtitle from "./Subtitle.vue";
export default {
  components: { Button, Subtitle },
  data: () => {
    return {
      text: "",
      reminder: false,
    };
  },
  props: {
    formTask: {
      type: Object,
      default: undefined,
    },
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const task = {
        id: this.formTask?.id || Helper.genRandId(),
        text: this.text,
        reminder: this.reminder,
      };

      if (task.text.trim() == "") {
          alert('Text must be not empty!');
          return;
      }
      // add form => reset
      if (!this.formTask) {
        this.$emit("add-task", task);
        this.onReset();
      } else {
        this.$emit("update-task", task);
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