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
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Open+Sans:wght@400;700&display=swap");

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #24272a;
}
#app h1 {
  font-family: "Caveat", cursive !important;
  color: #24272a;
  position: relative;
  z-index: 2;
}
</style>