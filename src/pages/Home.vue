<template>
  <DefaultLayout>
    <div class="home__wrapper">
      <div class="title mb-10">Content</div>
      <EditorMarked />
    </div>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from "@/layouts/default";
import EditorMarked from "@/components/EditorMarked";
export default {
  components: {
    DefaultLayout,
    EditorMarked,
  },
};
</script>
<style lang="scss">
.home__wrapper {
  margin: 40px;
  .title {
    color: #333d45;
    font-weight: 500;
    font-size: 20px;
  }
}
</style>