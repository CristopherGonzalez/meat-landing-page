<template>
  <v-container>
    <v-form ref="form">
      <v-row class="text-center" justify="center">
        <v-col cols="8" class="mb-4">
          <Title title="Contáctanos"></Title>
        </v-col>
        <v-col xs="12" md="5">
          <v-text-field v-model="form_contact.firstname" :rules="nameRules" label="NOMBRE" required></v-text-field>
        </v-col>
        <v-col xs="12" md="5">
          <v-text-field
            v-model="form_contact.lastname"
            :rules="nameRules"
            label="APELLIDO"
            required
          ></v-text-field>
        </v-col>
        <v-col xs="12" md="5">
          <v-text-field v-model="form_contact.email" :rules="emailRules" label="MAIL" required></v-text-field>
        </v-col>
        <v-col xs="12" md="5">
          <v-text-field v-model="form_contact.phone" :rules="phoneRules" label="TELEFONO" required></v-text-field>
        </v-col>
        <v-col xs="12"  md="6" justify-end class="text-end">
          <v-btn rounded class="pa-5" color="warning" @click="SubscribeNewsletter">Enviar</v-btn>
        </v-col>
      </v-row>
    </v-form>
    <v-snackbar v-model="valid_subscribe" :timeout="3000" color="success">
      Se ha suscrito sin problemas.
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="valid_subscribe = false">X</v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Title from "@/components/globals/Title";
import axios from "axios";

export default {
  data: () => ({
    form_contact: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
    valid_subscribe: false,
    nameRules: [
      (v) => !!v || "Campo es requerido",
      (v) => (v && v.length <= 15) || "Sólo se aceptan hasta 15 caracteres",
    ],
    emailRules: [
      (v) => !!v || "E-mail es requerido",
      (v) => /.+@.+\..+/.test(v) || "E-mail no es válido",
    ],
    phoneRules: [
      (v) => !!v || "Número es requerido",
      (v) =>
        /^(\s?)(0?9)(\s?)[9876543]\d{7}$/.test(v) ||
        "Número no es válido Ej: 994738488",
    ],
  }),

  methods: {
    async SubscribeNewsletter() {
      if (this.$refs.form.validate()) {
        await axios({
          method: "POST",
          baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/",
          url: "api/subscribe",
          params: this.form_contact,
        })
          .then((response) => {
            if (response && response.status === 201) {
              this.$refs.form.reset();
              this.valid_subscribe = true;
              setTimeout(function () {
                this.valid_subscribe = false;
              }, 3000);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  components: {
    Title,
  },
};
</script>