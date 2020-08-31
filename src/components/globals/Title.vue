<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="8" xs="12">
        <h1 class="display-2 font-weight-bold mb-n16">{{title}}</h1>
        <v-img :src="require('@/assets/img/heading-shape.png')" class="mt-n16" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Title",
  data: () => ({}),
  props: {
    title: String,
  },
};
</script>
<style scoped>
h1{
  z-index: 1;
}
.v-image {
  opacity: 0.3;
  z-index: 1;
  margin: auto;
}
</style>