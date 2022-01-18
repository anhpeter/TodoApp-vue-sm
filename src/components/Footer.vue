<template>
  <div class="footer">
    <router-link v-if="isAboutPage" to="/home">Back</router-link>
    <router-link  v-else to="/about">About</router-link>

  </div>
</template>

<script>
export default {
  computed: {
    isAboutPage() {
      return this.$route.fullPath == "/about";
    },
  },
};
</script>

<style scoped>
.footer {
  text-align: center;
}
</style>