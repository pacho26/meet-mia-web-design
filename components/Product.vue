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
  max-width: 23%;
  overflow: hidden;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);

  .img-hover-zoom {
    overflow: hidden;
  }

  img {
    transition: 0.3s all ease-out;
  }

  .product-desc {
    background: #3c6477;
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

  @media only screen and (max-width: 1400px) {
    .product-desc {
      flex-direction: column;
      align-items: inherit;
      padding: 0px 12px 0px 14px;

      h4 {
        font-size: 22px;
        margin-bottom: 4px;
        margin-top: 8px;
      }
      .price {
        font-size: 16px;
        margin-bottom: 8px;
      }
    }
  }

  @media only screen and (max-width: 860px) {
    max-width: 31.5%;

    .product-desc {
      h4 {
        font-size: 20px;
      }
    }
  }

  @media only screen and (max-width: 580px) {
    max-width: 48.2%;

    .product-desc {
      h4 {
        font-size: 17px;
      }
    }
  }
}
</style>
