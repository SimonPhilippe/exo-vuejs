<template>
  <v-container>
    <!-- TODO : DiagBox plus propre -->
    <ConfirmDialog
      v-if="confirmDisplay"
      :text="confirmText"
      :confirmDisplay="confirmDisplay"
      @confirm="confirm()"
      @cancel="cancel()"
    />
    <!-- TODO : DiagBox plus propre -->
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col lg="4" cols="12">
        <v-card ref="form" flat>
          <v-card-title>Ajouter un article</v-card-title>
          <v-select
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
            ref="title"
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
            ref="picture"
            class="mb-6"
            label="URL de l'image..."
            v-model="newURL"
            single-line
            dense
            hide-details="auto"
            outlined
          ></v-text-field>
          <v-textarea
            ref="text"
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
              <v-list-item-action @click="displayDialog(product, product1)">
                <v-icon class="error--text">mdi-close</v-icon>
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
              <v-list-item-action @click="displayDialog(product, product2)">
                <v-icon class="error--text">mdi-close</v-icon>
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
import ConfirmDialog from "./ConfirmDialog";
import API from "@/services/webservices.js";

export default {
  name: "Page_manager",

  components: {
    Nav,
    ConfirmDialog
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
        title: this.newTitle,
        picture: this.newURL,
        text: this.newText
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
    confirmDisplay: false,
    confirmText: "Voulez-vous vraiment supprimer cet article ?",
    productToDelete: null,
    targetList: null,
    snackBar: false,
    snackMsg: null,
    snackType: null
  }),
  methods: {
    addArticle() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach(f => {
        if (!this.form[f] && this.$refs[f].label != "URL de l'image...")
          this.formHasErrors = true;
        this.$refs[f].validate(true);
      });
      this.snackBar = true;
      if (!this.formHasErrors) {
        if (this.newType == "Produit I") {
          this.addToList(this.form, this.product1);
        }
        if (this.newType == "Produit II") {
          this.addToList(this.form, this.product2);
        }
        this.snackType = "success";
        this.snackMsg = "L' article '" + this.newTitle + "' a été créé.";
      } else {
        this.snackType = "error";
        this.snackMsg = "L' article n'a pas pu être créé.";
      }
    },
    displayDialog(product, list) {
      this.confirmDisplay = true;
      this.productToDelete = product;
      this.targetList = list;
    },
    addToList(newItem, list) {
      // TODO : Eviter les doublons
      list.push({
        title: newItem.title,
        picture: newItem.picture,
        text: newItem.text
      });
    },
    confirm() {
      this.targetList.splice(this.targetList.indexOf(this.productToDelete), 1);
      this.snackBar = true;
      this.snackType = "error";
      this.snackMsg =
        "L' article '" + this.productToDelete.title + "' a été supprimé.";
      this.confirmDisplay = false;
      this.productToDelete = null;
      this.targetList = null;
    },
    cancel() {
      this.confirmDisplay = false;
    }
  }
};
</script>
