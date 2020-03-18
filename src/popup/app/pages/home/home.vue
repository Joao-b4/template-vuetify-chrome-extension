<template>
  <v-container>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <RouteButton title="Next Page" routeName="secondPage"></RouteButton>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RouteButton from "../../components/RouteButton.vue";

export default {
  data() {
    return {};
  },
  name: "Home",
  components: {
    RouteButton
  }
};
</script> 

<style lang="scss" scoped>
</style>
