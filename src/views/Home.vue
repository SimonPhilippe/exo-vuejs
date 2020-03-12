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

import API from "@/services/webservices.js";

export default {
  name: "Home",

  components: {
    Nav,
    Article
  },

  created() {
    API.getHomePosts()
      .then(response => {
        this.articles = response.data;
      })
      .catch(e => {
        console.log("home GET error : ", e);
      });
  },

  data: () => ({
    pageTitle: "Homepage",
    articles: []
  })
};
</script>
