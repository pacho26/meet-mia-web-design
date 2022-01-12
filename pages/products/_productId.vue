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
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      productId: this.$route.params.productId,
      isLoading: true,
    };
  },
  mounted() {
    this.isLoading = false;
  },
  computed: {
    ...mapGetters(['getProductById']),

    product() {
      return this.getProductById(this.productId)[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
