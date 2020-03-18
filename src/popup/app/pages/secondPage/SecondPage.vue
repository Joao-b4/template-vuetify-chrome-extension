<template>
  <v-container>
    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <v-btn
          dark
          @click="generatePassword(); copyPassword();"
          color="purple"
        >Gerar Senha</v-btn>
        <p>{{pass}}</p>
      </v-col>
    </v-row>
      <Snackbar :show=showSnackbar message='Senha copiada para área de tranferencia'></Snackbar>
  </v-container>
</template>

<script>
import Snackbar from "../../components/Snackbar";

export default {
  data() {
    return {
      pass: "",
      showSnackbar: false
    };
  },
  components: {
    Snackbar
  },
  name: "Suporte",
  methods: {
    generatePassword: function() {
      let number = Math.random()
        .toFixed(12)
        .toString();
      number = number.split(".")[1];
      this.pass = number;
    },
    copyPassword: function() {
      this.showSnackbar = true;
      let tempInput = document.createElement("input");
      tempInput.style = "position: absolute; left: -1000px; top: -1000px";
      tempInput.value = this.pass;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
  }
};
</script> 

<style lang="scss" scoped>
textarea {
  visibility: hidden;
}
</style>
