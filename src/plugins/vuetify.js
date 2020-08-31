import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
Vue.use(Vuetify, {
  theme: {
    themes: {
      light: {
        title: "#24272A",
        warning: "#F5BE00",
        info: "#009CD9",
        error: "#B72C2C",
        success: "#009243",
      },
      dark: {
        title: "#24272A",
        warning: "#F5BE00",
        info: "#009CD9",
        error: "#B72C2C",
        success: "#009243",
      },
    },
  },
});

export default new Vuetify({});
