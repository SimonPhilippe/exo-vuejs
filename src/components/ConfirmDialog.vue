<template>
  <div class="blackscreen" @click="$emit('cancel')">
    <v-card>
      <v-card-title>Confirmation</v-card-title>
      <v-card-subtitle v-text="text"></v-card-subtitle>
      <v-card-actions class="justify-space-between px-4">
        <v-btn depressed color="success" @click="$emit('confirm')">
          <v-icon>mdi-check</v-icon>
        </v-btn>
        <v-btn depressed color="error" @click="$emit('cancel')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ConfirmDialog",
  props: ["text", "confirmDisplay"]
};
</script>

<style lang="scss">
.blackscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  & > div {
    height: 168px;
    width: 250px;
    z-index: 5;
  }
}
</style>
