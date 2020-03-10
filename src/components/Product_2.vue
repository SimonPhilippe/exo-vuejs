<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col v-for="article in articles" :key="article.title" cols="6">
        <Article :title="article.title" :picture="article.picture" :text="article.text"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "./Nav";
import Article from "./Article";

export default {
  name: "Product_2",

  components: {
    Nav,
    Article
  },

  data: () => ({
    pageTitle: "Produit II",
    articles: [
      {
        title: "Produit II",
        picture:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1007&q=80",
        text:
          "I'm baby literally taiyaki kickstarter, vice hoodie poutine offal deep v. Four loko post-ironic disrupt try-hard godard flexitarian keffiyeh brunch williamsburg heirloom cray taiyaki synth. Cred normcore glossier skateboard, readymade yr dreamcatcher chartreuse 90's lyft chambray kogi. Bitters distillery kogi schlitz squid chartreuse gluten-free disrupt pour-over brunch messenger bag twee. Kickstarter echo park poutine church-key next level squid knausgaard biodiesel authentic wayfarers. Meh pork belly farm-to-table, umami kale chips everyday carry small batch. Scenester shabby chic williamsburg DIY chia kombucha. Celiac man bun tumblr af lyft taxidermy affogato mustache echo park gentrify tousled air plant occupy distillery DIY. Selvage pitchfork asymmetrical succulents, dreamcatcher yuccie next level sriracha blog thundercats leggings readymade copper mug meggings cronut. Subway tile hammock waistcoat blog, seitan ennui shoreditch venmo man bun lomo actually. Prism selfies cornhole taxidermy deep v beard shoreditch. Readymade franzen shoreditch taiyaki, crucifix mixtape artisan raw denim fingerstache man bun forage. Chartreuse la croix fingerstache lomo hammock quinoa yr truffaut farm-to-table poke put a bird on it readymade everyday carry hoodie umami."
      },
      {
        title: "Produit II additionnel",
        picture:
          "https://images.unsplash.com/photo-1539683255143-73a6b838b106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80",
        text:
          "Gochujang live-edge tumblr meh kale chips raw denim food truck kitsch lomo shoreditch. Narwhal meh vexillologist edison bulb deep v. Migas pitchfork hashtag, activated charcoal retro chillwave readymade asymmetrical bitters franzen. Pickled chartreuse keffiyeh cred messenger bag. Whatever vegan offal intelligentsia hashtag brooklyn selfies, cred YOLO. Locavore four dollar toast heirloom thundercats artisan listicle bespoke farm-to-table DIY shabby chic mumblecore kitsch narwhal."
      }
    ]
  })
};
</script>
