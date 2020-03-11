<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col lg="4" cols="12">
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
  </v-container>
</template>

<script>
import Nav from "./Nav";

export default {
  name: "Page_manager",

  components: {
    Nav
  },

  //  Pas de POST pour l'instant, les datas sont distinctes de celles des autres pages.

  data: () => ({
    pageTitle: "Gérer les pages",
    dataChoice: ["Produit I", "Produit II"],
    newType: [],
    newTitle: "",
    newURL: "",
    newText: "",
    product1: [
      {
        title: "Dreamcatcher lo-fi",
        picture:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
        text:
          "Four loko offal chillwave subway tile sustainable wayfarers 3 wolf moon. Tumeric jianbing lyft, messenger bag tilde fashion axe single-origin coffee vape. Copper mug kale chips irony, hot chicken tbh tote bag gochujang. Edison bulb banh mi before they sold out church-key distillery brooklyn meditation chillwave tacos hashtag chartreuse mumblecore keytar."
      },
      {
        title: "Wolf VHS",
        picture: "",
        text:
          "Cray godard salvia enamel pin twee, retro taiyaki messenger bag umami snackwave whatever. Pork belly coloring book pok pok aesthetic. Farm-to-table literally pok pok mlkshk humblebrag snackwave pug celiac roof party iPhone kitsch swag. Shaman austin tousled, intelligentsia af palo santo gluten-free gochujang keffiyeh hella street art actually meh."
      }
    ],
    product2: [
      {
        title: "Art party",
        picture:
          "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        text:
          "I'm baby four loko woke +1, blog taxidermy iPhone church-key. Echo park edison bulb whatever gentrify mlkshk, 3 wolf moon affogato +1 copper mug poke pickled. Farm-to-table austin organic affogato sriracha aesthetic 90's. Freegan tumblr cornhole, biodiesel slow-carb live-edge ramps forage yr poutine kitsch tilde typewriter raw denim."
      }
    ]
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
    removeFromList(product, list) {
      list.splice(list.indexOf(product), 1);
    }
  }
};
</script>
