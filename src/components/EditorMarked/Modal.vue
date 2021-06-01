<template>
  <v-dialog v-model="IsOpen" width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Add {{ modalEditor.type }}
      </v-card-title>
      <v-card-text>
        <v-select
          :items="tabs"
          v-model="select"
          label="Type"
          item-text="title"
          item-value="value"
        >
        </v-select>
        <ListFiles />
        <v-file-input
          :accept="accept"
          v-model="file"
          :label="`${modalEditor.type} upload`"
        ></v-file-input>
        <v-btn depressed color="success" @click="uploadFile" :disabled="!file">
          Upload {{ modalEditor.type }}
        </v-btn>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="close"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

import ListFiles from "./ListFiles";
export default {
  components: {
    ListFiles,
  },
  data: () => ({
    file: null,
    tabs: [
      {
        title: "Image",
        value: "image",
      },
      {
        title: "Video",
        value: "video",
      },
      {
        title: "File",
        value: "file",
      },
    ],
  }),
  computed: {
    ...mapState(["modalEditor"]),
    IsOpen: {
      get() {
        return this.modalEditor.open;
      },
      set() {
        this.closeModal();
      },
    },
    select: {
      get() {
        return this.modalEditor.type;
      },
      set(value) {
        this.updateModal(value);
      },
    },
    accept() {
      if (this.modalEditor.type === "video") {
        return "video/*";
      } else if (this.modalEditor.type === "image") {
        return "image/*";
      } else {
        return ".doc,.docx";
      }
    },
  },
  methods: {
    ...mapMutations(["closeModal", "updateModal"]),
    ...mapActions(["saveFile"]),
    close() {
      this.closeModal();
      this.file = null;
    },
    async uploadFile() {
      await this.saveFile(this.modalEditor.type);
      this.file = null;
    },
  },
};
</script>