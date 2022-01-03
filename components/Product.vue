<template>
  <div class="product">
    <div class="img-hover-zoom">
      <img
        :src="require(`@/assets/img/products/${this.imageSrc}`)"
        style="width: 100%"
      />
    </div>
    <div class="product-desc">
      <h4>{{ name }}</h4>
      <p class="price">{{ price.toFixed(2) }} kn</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    price: {
      type: Number,
      required: true,
    },
    imageSrc: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.product {
  max-width: 360px;
  background: #404040;
  color: #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  .img-hover-zoom {
    overflow: hidden;
    margin: 0 auto;
  }

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: 0.3s all ease-in-out;
  }

  .product-desc {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 14px 14px 4px 14px;

    .price {
      font-style: italic;
      font-size: 18px;
      color: #e6e6e6;
    }
  }

  &:hover {
    opacity: 0.9;
    cursor: pointer;

    img {
      transform: scale(1.15);
    }
  }
}
</style>
