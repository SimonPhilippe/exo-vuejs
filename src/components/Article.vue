<template>
  <v-card>
    <v-img class="white--text align-end" height="200px" :src="picture">
      <v-card-title class="primary">{{title}}</v-card-title>
    </v-img>
    <v-card-text class="text--primary">{{text}}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" fab text>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Article",

  props: ["title", "picture", "text"]
};
</script>
