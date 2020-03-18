<template>
  <div class="text-center">
    <v-snackbar v-model="show" :timeout="2000" color="purple">{{message}}</v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "Snackbar",
  props: {
    message: {
      type: String,
      required: true,
      default: ""
    },
    show: {
      type: Boolean,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
