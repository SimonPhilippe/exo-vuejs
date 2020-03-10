<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col v-for="article in articles" :key="article.title" lg="6" sm="12">
        <Article :title="article.title" :picture="article.picture" :text="article.text"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "./Nav";
import Article from "./Article";

export default {
  name: "Product_1",

  components: {
    Nav,
    Article
  },

  data: () => ({
    pageTitle: "Produit I",
    articles: []
  })
};
</script>
