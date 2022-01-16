<template>
  <button
    :class="['btn', `btn-${color}`, btnClass, size ? `btn-${size}` : '']"
    @click="$emit('btn-click', e)"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      String,
      default: "button",
    },
    color: String,
    size: {
      type: String,
      default: "",
    },
    btnClass: String,
  },
};
</script>

<style>
</style>