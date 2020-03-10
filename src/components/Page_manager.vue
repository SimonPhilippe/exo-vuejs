<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col lg="4" sm="12">
        <v-card flat>
          <v-card-title>Ajouter un article</v-card-title>
          <v-select
            :items="dataChoice"
            v-model="newType"
            label="Quel produit ?"
            class="mb-6"
            single-line
            dense
            hide-details
            outlined
          ></v-select>
          <v-text-field
            class="mb-6"
            label="Titre de l'article..."
            v-model="newTitle"
            single-line
            dense
            hide-details
            outlined
          ></v-text-field>
          <v-text-field
            class="mb-6"
            label="URL de l'image..."
            v-model="newURL"
            single-line
            dense
            hide-details
            outlined
          ></v-text-field>
          <v-textarea
            class="mb-6"
            v-model="newText"
            clearable
            outlined
            single-line
            dense
            hide-details
            auto-grow
            clear-icon="mdi-close"
            label="Texte de l'article..."
          ></v-textarea>
        </v-card>
        <v-btn class="primary" width="100%" @click="addArticle">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col lg="4" sm="6" class="mt-12">
        <v-card>
          <v-card-title>Produit I</v-card-title>
          <v-card-subtitle>Gestion des articles</v-card-subtitle>
          <v-list>
            <v-list-item v-for="product in product2" :key="product.title">
              <v-list-item-content>
                <v-list-item v-text="product.title"></v-list-item>
              </v-list-item-content>
              <v-list-item-icon class="ma-0 text-center pt-6">
                <v-icon v-if="product.picture">mdi-image</v-icon>
              </v-list-item-icon>
              <v-list-item-action>
                <v-icon class="error--text" @click="removeFromList()">mdi-close</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col lg="4" sm="6" class="mt-12">
        <v-card>
          <v-card-title>Produit II</v-card-title>
          <v-card-subtitle>Gestion des articles</v-card-subtitle>
          <v-list>
            <v-list-item v-for="product in product1" :key="product.title">
              <v-list-item-content>
                <v-list-item v-text="product.title"></v-list-item>
              </v-list-item-content>
              <v-list-item-icon class="ma-0 text-center pt-6">
                <v-icon v-if="product.picture">mdi-image</v-icon>
              </v-list-item-icon>
              <v-list-item-action>
                <v-icon
                  class="error--text"
                  @click="removeFromList(product, this.product1)"
                >mdi-close</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Page_manager",

  components: {
    Nav
  },

  data: () => ({
    pageTitle: "Gérer les pages",
    dataChoice: ["Produit I", "Produit II"],
    newType: [],
    newTitle: "",
    newURL: "",
    newText: "",
    product1: [
      { title: "Ouais", picture: "", text: "azerty" },
      { title: "Ok", picture: "u", text: "azerty" }
    ],
    product2: [{ title: "Super", picture: "u", text: "azerty" }]
  }),
  methods: {
    addArticle() {
      if (this.newType == "Produit I") {
        this.product1.push({
          title: this.newTitle,
          picture: this.newURL,
          text: this.newText
        });
      } else {
        this.product2.push({
          title: this.newTitle,
          picture: this.newURL,
          text: this.newText
        });
      }
    },
    // TODO
    removeFromList() {}
  }
};
</script>
