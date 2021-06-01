<template>
  <div class="editor__wrapper">
    <div class="editor-tab">
      <span v-for="(tab, key) in tabs" :key="key" @click="tab.event(tab.value)"
        >{{ tab.title }}
      </span>
    </div>
    <textarea class="editor-textarea" v-model="input"> </textarea>
    <!-- <div v-html="compiledMarkdown"></div> -->
    <Modal />
  </div>
</template>

<script>
import marked from "marked";
//store
import { mapMutations } from "vuex";
//components
import Modal from "./Modal";

export default {
  components: {
    Modal,
  },
  data: function () {
    return {
      input: "",
      tabs: [
        {
          title: "Image",
          value: "image",
          event: this.openModal,
        },
        {
          title: "Video",
          value: "video",
          event: this.openModal,
        },
        {
          title: "File",
          value: "file",
          event: this.openModal,
        },
      ],
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    ...mapMutations(["updateModal"]),

    openModal(value) {
      this.updateModal(value);
    },
  },
};
</script>
<style lang="scss">
.editor {
  &__wrapper {
    border: 1px solid #e0e2e3;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
  }
  &-textarea {
    width: 100%;
  }
  &-tab {
    margin: 10px 16px;
    padding-bottom: 9px;
    border-bottom: 1px solid #e0e2e3;
    span {
      color: #999ea2;
      font-size: 16px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>