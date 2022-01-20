<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div class="page-container">
      <Navigation />
      <main>
        <Nuxt />
      </main>
      <Footer class="footer" />
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
  margin-top: 75px + 98px;
  margin-bottom: 140px;
  min-height: 48vh;

  @media only screen and (min-height: 1120px) {
    min-height: 56vh;
  }

  @media only screen and (max-width: 1000px) {
    margin-top: 75px + 64px;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px;
  }
}
</style>
