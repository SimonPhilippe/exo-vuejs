<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col lg="4" cols="12">
        <v-card ref="form" flat>
          <v-card-title>Ajouter un article</v-card-title>
          <v-select
            ref="newType"
            :items="dataChoice"
            v-model="newType"
            label="Quel produit ?"
            class="mb-6"
            single-line
            dense
            hide-details="auto"
            outlined
            :rules="rules"
          ></v-select>
          <v-text-field
            ref="newTitle"
            class="mb-6"
            label="Titre de l'article..."
            v-model="newTitle"
            single-line
            dense
            hide-details="auto"
            outlined
            :rules="rules"
          ></v-text-field>
          <v-text-field
            ref="newURL"
            class="mb-6"
            label="URL de l'image..."
            v-model="newURL"
            single-line
            dense
            hide-details="auto"
            outlined
          ></v-text-field>
          <v-textarea
            ref="newText"
            class="mb-6"
            v-model="newText"
            clearable
            outlined
            single-line
            dense
            hide-details="auto"
            auto-grow
            clear-icon="mdi-close"
            label="Texte de l'article..."
            :rules="rules"
          ></v-textarea>
        </v-card>
        <v-btn class="primary" width="100%" @click="addArticle">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col lg="4" md="6" class="mt-12">
        <v-card>
          <v-card-title>Produit I</v-card-title>
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
                <v-icon class="error--text" @click="removeFromList(product, product1)">mdi-close</v-icon>
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
            <v-list-item v-for="product in product2" :key="product.title">
              <v-list-item-content>
                <v-list-item v-text="product.title"></v-list-item>
              </v-list-item-content>
              <v-list-item-icon class="ma-0 text-center pt-6">
                <v-icon v-if="product.picture">mdi-image</v-icon>
              </v-list-item-icon>
              <v-list-item-action>
                <v-icon class="error--text" @click="removeFromList(product, product2)">mdi-close</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="snackBar" :color="snackType" dark>
      {{ snackMsg }}
      <v-btn dark text @click="snackBar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Nav from "./Nav";
import API from "@/services/webservices.js";

export default {
  name: "Page_manager",

  components: {
    Nav
  },

  created() {
    API.getProduct1Posts()
      .then(response => {
        this.product1 = response.data;
      })
      .catch(e => {
        console.log("product1 GET error : ", e);
      });
    API.getProduct2Posts()
      .then(response => {
        this.product2 = response.data;
      })
      .catch(e => {
        console.log("product2 GET error : ", e);
      });
  },

  //  Pas de POST pour l'instant

  computed: {
    form() {
      return {
        newType: this.newType,
        newTitle: this.newTitle,
        newText: this.newText
      };
    }
  },
  data: () => ({
    rules: [value => !!value || "Vous devez remplir ce champs."],
    formHasErrors: false,
    pageTitle: "Gérer les pages",
    dataChoice: ["Produit I", "Produit II"],
    newType: null,
    newTitle: null,
    newURL: null,
    newText: null,
    product1: null,
    product2: null,
    snackBar: false,
    snackMsg: null,
    snackType: null
  }),
  methods: {
    addArticle() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach(f => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
      this.snackBar = true;
      if (!this.formHasErrors) {
        if (this.newType == "Produit I") {
          this.product1.push({
            title: this.newTitle,
            picture: this.newURL,
            text: this.newText
          });
        }
        if (this.newType == "Produit II") {
          this.product2.push({
            title: this.newTitle,
            picture: this.newURL,
            text: this.newText
          });
        }

        this.snackType = "success";
        this.snackMsg = "L' article '" + this.newTitle + "' a été créé.";
      } else {
        this.snackType = "error";
        this.snackMsg = "L' article n'a pas pu être créé.";
      }
    },
    removeFromList(product, list) {
      list.splice(list.indexOf(product), 1);
      this.snackBar = true;
      this.snackType = "error";
      this.snackMsg = "L' article '" + product.title + "' a été supprimé.";
    }
  }
};
</script>
