<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col v-for="article in articles" :key="article.id" lg="6" sm="12">
        <Article :title="article.title" :picture="article.picture" :text="article.text"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "@/components/Nav";
import Article from "@/components/Article";

import axios from "axios";

export default {
  name: "Product_2",

  components: {
    Nav,
    Article
  },

  // TODO / WIP - Meilleure intégration des fake calls API

  created() {
    axios
      .get("https://my-json-server.typicode.com/SimonPhilippe/demo/product2")
      .then(response => {
        this.articles = response.data;
      })
      .catch(e => {
        console.log("product2 GET error : ", e);
      });
  },

  data: () => ({
    pageTitle: "Produit II",
    articles: []
  })
};
</script>
