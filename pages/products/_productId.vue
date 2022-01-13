<template>
  <div class="content">
    <div class="img-container">
      <img
        :src="require(`@/assets/img/products/${product.imgSrc}`)"
        style="width: 100%"
      />
    </div>
    <div class="text-container">
      <div class="categories">Naslovna / {{ product.category }}</div>
      <h1>{{ product.name }}</h1>
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

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1500px;
  margin-top: 75px + 60px;
  margin-bottom: 140px;

  .content {
    display: flex;

    .img-container {
      max-width: 40%;
      border-radius: 8px;
      overflow: hidden;

      img {
        aspect-ratio: 4 / 2.9;
        object-fit: cover;
        object-position: center center;
      }
    }

    .text-container {
      margin-left: 8%;

      .categories {
        text-transform: uppercase;
      }
    }
  }
}
</style>
