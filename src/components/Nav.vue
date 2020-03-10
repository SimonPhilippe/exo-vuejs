<template>
  <div>
    <v-row>
      <v-col cols="10">
        <h1 class="text-right">{{pageTitle}}</h1>
      </v-col>
      <v-col cols="2">
        <v-btn fab text color="primary" @click="nav = !nav">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-navigation-drawer absolute right color="secondary" v-model="nav">
      <v-list>
        <v-list-item-group v-for="menu in menus" :key="menu.title">
          <v-list-item-content>
            <router-link :to="{path:menu.path}">
              <v-list-item dark v-text="menu.title"></v-list-item>
            </router-link>
          </v-list-item-content>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
