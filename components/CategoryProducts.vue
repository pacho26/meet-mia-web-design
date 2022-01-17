<template>
  <div class="category-container">
    <h3 class="category-container__name">
      {{ categoryName }}
    </h3>
    <div class="category-container__products">
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :price="product.price"
        :imageSrc="product.imgSrc"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryName: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.category-container {
  &__name {
    color: #335666;
    font-size: 36px;
    font-family: 'Open Sans Condensed';
    font-weight: 700;
    margin-bottom: 24px;
  }

  &__products {
    display: inline-flex;
    gap: 2.6%;
    flex-wrap: wrap;

    & > * {
      margin-bottom: 42px;
    }
  }
}
</style>
