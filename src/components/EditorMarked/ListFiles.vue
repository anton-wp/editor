<template>
  <div class="list-wrapper">
    <div
      v-for="(item, key) in modalEditor[`${modalEditor.type}Arr`]"
      :key="key"
      class="list-item"
    >
      <img class="list-image" v-if="modalEditor.type === 'image'" :src="item" />
      <iframe
        v-if="modalEditor.type === 'video'"
        width="200"
        height="100"
        :src="item"
      >
      </iframe>
      <div class="list-background"></div>
      <v-btn class="list-button" color="success" @click="Add"> Add </v-btn>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["modalEditor"]),
  },
  methods: {
    Add() {
      console.log("Add");
    },
  },
};
</script>
<style lang="scss">
.list {
  &-image {
    max-width: 200px;
    height: 100px;
    object-fit: cover;
  }
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-item {
    margin-bottom: 10px;
    position: relative;
    max-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      .list-background {
        opacity: 0.5;
        background-color: black;
      }
      .list-button {
        display: block;
      }
    }
    .list-background {
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.3s;
      width: 100%;
      height: 100%;
      position: absolute;
    }
    .list-button {
      position: absolute;
      display: none;
    }
  }
}
</style>