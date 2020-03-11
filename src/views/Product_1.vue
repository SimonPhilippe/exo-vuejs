<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
  </v-container>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Product_1",

  components: {
    Nav
  },

  data: () => ({
    pageTitle: "Produit I",
    articles: [
      // TODO -> Manque appels API
    ]
  })
};
</script>
