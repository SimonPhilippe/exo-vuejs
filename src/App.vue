<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
};
</script>

<style lang="scss">
a {
  text-decoration: none;
}

main {
  overflow-x: hidden;
}

h1 {
  white-space: nowrap;
}
</style>
