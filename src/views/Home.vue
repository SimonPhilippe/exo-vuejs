<template>
  <v-container>
    <Nav :pageTitle="pageTitle"/>
    <v-row>
      <v-col v-for="article in articles" :key="article.title" lg="6" sm="12">
        <Article :title="article.title" :picture="article.picture" :text="article.text"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Nav from "@/components/Nav";
import Article from "@/components/Article";

export default {
  name: "Home",

  components: {
    Nav,
    Article
  },

  data: () => ({
    pageTitle: "Homepage",
    articles: [
      {
        title: "Home ipsum",
        picture:
          "https://images.unsplash.com/photo-1583700852632-570667e5fa52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        text:
          "I'm baby literally taiyaki kickstarter, vice hoodie poutine offal deep v. Four loko post-ironic disrupt try-hard godard flexitarian keffiyeh brunch williamsburg heirloom cray taiyaki synth. Cred normcore glossier skateboard, readymade yr dreamcatcher chartreuse 90's lyft chambray kogi. Bitters distillery kogi schlitz squid chartreuse gluten-free disrupt pour-over brunch messenger bag twee. Kickstarter echo park poutine church-key next level squid knausgaard biodiesel authentic wayfarers. Meh pork belly farm-to-table, umami kale chips everyday carry small batch. Scenester shabby chic williamsburg DIY chia kombucha. Celiac man bun tumblr af lyft taxidermy affogato mustache echo park gentrify tousled air plant occupy distillery DIY. Selvage pitchfork asymmetrical succulents, dreamcatcher yuccie next level sriracha blog thundercats leggings readymade copper mug meggings cronut. Subway tile hammock waistcoat blog, seitan ennui shoreditch venmo man bun lomo actually. Prism selfies cornhole taxidermy deep v beard shoreditch. Readymade franzen shoreditch taiyaki, crucifix mixtape artisan raw denim fingerstache man bun forage. Chartreuse la croix fingerstache lomo hammock quinoa yr truffaut farm-to-table poke put a bird on it readymade everyday carry hoodie umami."
      },
      {
        title: "Home ipsum sequel",
        picture:
          "https://images.unsplash.com/photo-1583511416766-083ba12de77c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        text:
          "I'm baby celiac kombucha echo park fanny pack occupy. Vegan YOLO microdosing master cleanse, sartorial affogato freegan pop-up succulents. Viral dreamcatcher sustainable normcore. Humblebrag biodiesel hoodie hexagon church-key hell of poutine food truck pinterest lo-fi squid tousled. Selfies semiotics cold-pressed austin paleo kombucha. Retro subway tile echo park pickled."
      }
    ]
  })
};
</script>
