<template>
  <v-app>
    <Header></Header>
    <v-main>
      <Articles />
      <Contact />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/globals/Header";
import Articles from "./components/Articles";
import Contact from "./components/Contact";

export default {
  name: "App",

  components: {
    Contact,
    Articles,
    Header,
  },

  data: () => ({}),
};
</script>
<style lang="scss" src="./assets/scss/main.scss" scoped>
</style>