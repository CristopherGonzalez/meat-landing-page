<template>
  <div class="box-shadow-bottom">
    <v-parallax height="550" src="@/assets/img/hero-background.jpg">
      <v-row justify="space-between">
        <v-col xs="6"  md="3" >
          <v-img :src="require('@/assets/img/logo.svg')" contain height="50" />
        </v-col>
        <v-col xs="6" md="3" class="text-end">
          <v-btn  class="ma-1 pa-3" fab small outlined color="primary">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn  class="ma-1" fab small outlined color="error">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn class="ma-1" fab small outlined color="warning">
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="box-shadow-bottom">
        <v-col xs="12" md="3" offset-md="1" class="text-center mb-n16">
          <h1 class="text-h1 text-left slidein">El secreto de tu cocina</h1>
        </v-col>
        <v-col col="4" class="text-center mt-n16">
          <v-img class="img-header slideup" :src="require('@/assets/img/hero-shape.png')" height="100"/>
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>
<style scoped>
.img-header {
  left: -50%;
  top: -20px;
  transform: rotate(2.4deg);
  width: 90%;
}
.box-shadow-bottom {
  -webkit-box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
  -moz-box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
  box-shadow: inset 0px -200px 168px 0px rgba(255, 255, 255, 1) !important;
}



</style>