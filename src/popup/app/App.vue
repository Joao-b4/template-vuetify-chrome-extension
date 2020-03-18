<template>
  <v-app>
    <v-app-bar dark dense max-height="48px" color="purple">
      <div class="mr-2" v-if="this.$router.currentRoute.path != '/home'">
        <v-btn small icon color="white" @click="goBack">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </div>
      <v-toolbar-title>Template</v-toolbar-title>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "App",
  methods: {
    goBack: function() {
      this.$router.go(-1);
    }
  }
};
</script> 

<style lang="scss" scoped>
</style>
