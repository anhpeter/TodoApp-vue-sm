<template>
  <div>
    <div v-if="showTaskForm" class="mb-4">
      <TaskForm
        @add-task="addTask"
        @update-task="updateTask"
        :formTask="formTask"
      />
    </div>
    <div class="mb-4">
      <Tasks
        @edit-task="editTask"
        @delete-task="deleteTask"
        @toggle-reminder="toggleReminder"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue";
import Tasks from "../components/Tasks.vue";
import TaskApi from "../common/apis/TaskApi";
export default {
  components: { Tasks, TaskForm },
  data: () => {
    return {
      formTask: undefined,
      tasks: [],
    };
  },
  props: {
    showTaskForm: Boolean,
  },
  methods: {
    async toggleReminder(id) {
      const task = await TaskApi.findOne(id);
      const newReminder = !task.reminder;
      const updatedTask = await TaskApi.update(id, { reminder: newReminder });
      console.log('toggler reminder', updatedTask)

      this.tasks = this.tasks.map((item) => {
        if (item.id == id) {
          item.reminder = !item.reminder;
        }
        return item;
      });
    },
    async addTask(task) {
      try {
        const addedTask = await TaskApi.add(task);
        this.tasks = [addedTask, ...this.tasks];
      } catch (e) {
        alert("failed to add task");
      }
    },
    async deleteTask(id) {
      if (confirm("Do you want to delete the task?")) {
        try {
          await TaskApi.delete(id);
          this.tasks = this.tasks.filter((item) => item.id != id);
          if (this.formTask?.id == id) {
            this.formTask = undefined;
          }
        } catch (e) {
          alert("failed to delete task");
        }
      }
    },
    async editTask(id) {
      try {
        this.formTask = await TaskApi.findOne(id);
        if (this.formTask) {
          if (!this.showTaskForm) this.$emit("toggle-task-form");
        }
      } catch (e) {
        alert("failed to fetch task");
      }
    },
    async updateTask(task) {
      try {
        const updatedTask = await TaskApi.update(task.id, task);
        this.tasks = this.tasks.map((item) =>
          item.id == task.id ? updatedTask : item
        );
      } catch (e) {
        alert("failed to update task");
      }
    },
  },
  watch: {
    showTaskForm(val, oldVal) {
      if (!val) {
        this.formTask = undefined;
      }
    },
  },
  async created() {
    try {
      const tasks = await TaskApi.findAll();
      this.tasks = tasks;
    } catch (e) {
      alert("failed to fetch tasks");
    }
  },
};
</script>

<style>
</style>