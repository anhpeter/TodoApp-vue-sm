<template>
  <h1>{{ content }}</h1>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: "Title",
    },
  },
};
</script>

<style>
</style>