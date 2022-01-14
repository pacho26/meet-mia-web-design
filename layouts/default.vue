<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div class="content-container">
      <Navigation />
      <main>
        <Nuxt />
      </main>
      <Footer />
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
    this.isLoading = false;
    document.documentElement.style.overflow = 'auto';
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1500px;
  margin-top: 75px + 84px;
  margin-bottom: 140px;

  @media only screen and (max-width: 768px) {
    margin-top: 75px;
  }
}
</style>
