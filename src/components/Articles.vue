<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-4">
        <Title title="Nuestros articulos"></Title>
      </v-col>
      <v-col class="mb-5" xs="12" md="3">
        <v-list class="ml-2" max-width="300" rounded="">
          <v-list-item-group v-model="option_select" color="warning">
            <v-list-item v-for="(option, i) in options" :key="i">
              
              <v-list-item-content>
                <v-list-item-title v-text="option.category"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon v-if="option_select == i">
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col class="mb-5" xs="12" md="9">
        <v-row>
          <v-col
            xs="12"
            md="5"
            lg="4"
            xl="3"
            v-for="(article, index) in articles_filters"
            :key="index"
          >
            <v-card>
              <v-img class="white--text align-end" height="200px" :src="article.image"></v-img>
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-subtitle class="pb-0">{{ article.category }}</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ article.content }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Title from "@/components/globals/Title";

export default {
  data: () => ({
    articles: [],
    option_select: 0,
    options: [
      { category: "Todos", icon: "mdi-view-module" },
      { category: "Productos", icon: "mdi-view-grid-outline" },
      { category: "Recetas", icon: "mdi-book-open-variant" },
      { category: "Consejos", icon: "mdi-information-outline" },
    ],
  }),
  methods: {
    async GetArticles() {
      await axios({
        method: "GET",
        baseURL: "https://5eed24da4cbc340016330f0d.mockapi.io/",
        url: "api/articles",
      })
        .then((response) => {
          this.articles = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.GetArticles();
  },
  computed: {
    articles_filters() {
      return this.articles.filter((article) => {
        this.option_select === undefined
          ? (this.option_select = 0)
          : this.option_select;
        return (
          (this.option_select == 0) |
          (article.category == this.options[this.option_select].category)
        );
      });
    },
  },
  components: {
    Title,
  },
};
</script>
<style scoped>
.v-card {
  -webkit-transition: 0.3s linear;
  transition: 0.3s linear;
}
.v-card:hover {
  opacity: 0.7;
  margin: 3px;
}
.v-card .v-card__title {
  -webkit-transition: font-size 0.3s ease;
  transition: font-size 0.3s ease;
  -webkit-transition: color 0.3s linear;
  transition: color 0.3s linear;
}
.v-card:hover .v-card__title {
  color: #f5be00;
}
</style>
