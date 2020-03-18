<template>
  <v-btn dark min-width="100" @click="pushNextRoute()" color="purple">{{title}}</v-btn>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "RouteButton",
  methods: {
    pushNextRoute: function(event) {
      this.$router.push(this.$props.routeName);
    }
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    routeName: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
