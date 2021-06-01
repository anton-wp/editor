<template>
  <div id="app">
    <v-app>
      <v-alert v-if="alert.open" :type="alert.type" class="alert">{{
        alert.text
      }}</v-alert>
      <router-view />
    </v-app>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState(["alert"]),
  },
};
</script>
<style lang="scss">
.v-alert {
  position: absolute !important;
  z-index: 3;
  right: 10px;
  top: 10px;
  max-width: 300px;
}
</style>
