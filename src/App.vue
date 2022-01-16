<template>
  <div class="container">
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-4">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-4">
              <Header
                :showTaskForm="showTaskForm"
                @toggle-add-task="toggleAddTask"
              />
            </div>
            <div class="col-12">
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
                  :tasks="tasks"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from "./components/TaskForm.vue";
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
export default {
  name: "App",
  components: { Header, Tasks, TaskForm },
  data: () => {
    return {
      formTask: undefined,
      showTaskForm: false,
      tasks: [],
    };
  },
  methods: {
    toggleAddTask() {
      this.showTaskForm = !this.showTaskForm;
      if (!this.showTaskForm){
          this.formTask = undefined;
      }
    },
    addTask(task) {
      this.tasks = [task, ...this.tasks];
    },
    deleteTask(id) {
      if (confirm("Do you want to delete the task?")) {
        this.tasks = this.tasks.filter((item) => item.id != id);
      }
    },
    editTask(id) {
      this.formTask = this.tasks.find((task) => task.id == id);
      if (this.formTask) {
        this.showTaskForm = true;
      }
    },
    updateTask(task) {
      this.tasks = this.tasks.map((item) =>
        item.id == task.id ? task : item
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "do homework",
        reminder: true,
      },
      {
        id: 2,
        text: "buy elsa",
        reminder: true,
      },
      {
        id: 3,
        text: "buy book",
        reminder: false,
      },
    ];
  },
};
</script>

