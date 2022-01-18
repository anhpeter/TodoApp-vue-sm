<template>
  <div>
    <div v-if="showTaskForm" class="mb-4">
      <TaskForm
        :formTask="formTask"
      />
    </div>
    <div class="mb-4">
      <Tasks
        :tasks="allTasks"
      />
    </div>
  </div>
</template>

<script>
import TaskForm from "../components/TaskForm.vue";
import Tasks from "../components/Tasks.vue";
import TaskApi from "../common/apis/TaskApi";
import {mapActions, mapGetters} from 'vuex';
export default {
  components: { Tasks, TaskForm },
  data: () => {
    return {
      formTask: undefined,
      tasks: [],
    };
  },
  methods: {
      ...mapActions(['fetchAllTasks']),
  },
  computed: {
      ...mapGetters(['allTasks', 'showTaskForm'])
  },
  watch: {
    showTaskForm(val, oldVal) {
      if (!val) {
        this.formTask = undefined;
      }
    },
  },
  async created() {
      this.fetchAllTasks();
  },
};
</script>

<style>
</style>