<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-right">{{pageTitle}}</h1>
      </v-col>
      <v-col>
        <v-btn fab text color="primary" @click="nav = !nav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: ["pageTitle"],
  data: () => ({
    nav: false,
    menus: [
      { title: "Accueil", path: "/" },
      { title: "Produit I", path: "/produit-1" },
      { title: "Produit II", path: "/produit-2" },
      { title: "Gérer les pages", path: "/gerer-pages" }
    ]
  })
};
</script>
