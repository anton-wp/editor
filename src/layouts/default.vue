<template>
  <div>
    <v-tabs>
      <span>Hello {{ auth.user.email }}</span>
      <v-btn depressed color="error" @click="logout"> Logout </v-btn>
    </v-tabs>
    <slot />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["auth"]),
  },
  methods: {
    ...mapMutations(["Logout"]),
    logout() {
      this.Logout();
      this.$router.push("/login");
    },
  },
};
</script>
<style lang="scss">
.v-slide-group__content {
  align-items: center;
  .v-btn {
    margin-left: auto;
    margin-right: 10px;
  }
}
</style>