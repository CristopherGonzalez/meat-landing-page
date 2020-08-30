<template>
  <v-container>
    <v-row class="text-center">
     
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Nuestro Productos
          <v-img :src="require('@/assets/img/hero-shape.png')"  class="mt-n5"  />
        </h1>
      </v-col>

      <v-col class="mb-5" cols="3">
      <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list shaped>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-col>

      <v-col class="mb-5" cols="9">
        <h2 class="headline font-weight-bold mb-3">Important Links</h2>
<v-card
    class="ma-5"
    max-width="200"
    v-for="(product, index) in products" :key="index"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="product.image"
    >
      <v-card-title>{{product.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{product.url}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{product.content}}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
       
      </v-col>

      <v-col class="mb-5" cols="12" >
        <h2 class="headline font-weight-bold mb-3">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >{{ eco.text }}</a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }),
    props:['products']
  }
</script>