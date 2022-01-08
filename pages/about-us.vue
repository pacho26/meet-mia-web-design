<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div class="content-container">
      <Navigation />
      <main></main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    // In order to prevent flash for a moment
    setTimeout(() => {
      this.isLoading = false;
    }, 600);
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1500px;
  margin-top: 140px;
  margin-bottom: 140px;
}
</style>
