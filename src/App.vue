<template>
  <div class="container">
    <div class="row">
      <div class="offset-lg-2 col-lg-8 mt-4">
        <div class="container">
          <div class="row">
            <div class="col-12 mb-4">
              <Header
                :showTaskForm="showTaskForm"
                @toggle-add-task="toggleTaskForm"
              />
            </div>
            <div class="col-12">
                <router-view :showTaskForm="showTaskForm" @toggle-task-form="toggleTaskForm"></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header.vue";
export default {
  name: "App",
  components: { Header},
  data: () => {
    return {
      showTaskForm: false,
    };
  },
  methods: {
    toggleTaskForm() {
      this.showTaskForm = !this.showTaskForm;
    },
  },
};
</script>

