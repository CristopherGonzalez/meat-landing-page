<template>
  <div class="box-shadow-bottom">
    <v-parallax src="@/assets/img/hero-background.jpg">
      <v-row justify="space-between">
        <v-col cols="3">
          <v-img :src="require('@/assets/img/logo.svg')" contain height="50" />
        </v-col>
        <v-col cols="3">
          <v-btn  class="ma-1" fab small  color="primary">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>

          <v-btn  class="ma-1" fab small  color="error">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="ma-1" fab small  color="warning">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="5">
          <h1 class="text-h3">El secreto de tu cocina</h1>
          <v-img class="img-header" :src="require('@/assets/img/hero-shape.png')" />
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>
<style scoped>
.img-header {
  left: -100px;
  top: -20px;
  transform: rotate(2.4deg);
}
.v-parallax__content {
  -webkit-box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
  -moz-box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
  box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
}
</style>