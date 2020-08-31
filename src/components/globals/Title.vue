<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs="12" md="8" >
        <h1 class="font-weight-bold mb-n8 display-2">{{title}}</h1>
        <v-img :src="require('@/assets/img/heading-shape.png')" class="mt-n10 image-title" height="60" />
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
.image-title{
  opacity: 0.3;
  z-index: 1;
  margin: auto;
  width: 60%;
}
</style>