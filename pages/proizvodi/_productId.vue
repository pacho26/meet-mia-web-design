<template>
  <div class="content" id="content">
    <div class="product-container">
      <div class="img-container">
        <img
          :src="require(`@/assets/img/products/${product.imgSrc}`)"
          style="width: 100%"
        />
      </div>
      <div class="text-container">
        <nuxt-link class="link" :to="categoryLink">
          <div class="category">{{ product.category }}</div>
        </nuxt-link>
        <h1>{{ product.name }}</h1>
        <h2 class="price">
          <span class="number">{{ product.price.toFixed(2) }}</span
          >kn
        </h2>
        <p class="desc">{{ product.desc }}</p>

        <hr class="line" />

        <div class="order-container">
          <input min="1" value="1" type="number" />
          <div @click="addItemToCart">
            <BaseButton buttonText="Dodaj u košaricu" />
          </div>
        </div>
      </div>
    </div>

    <div class="other-products-wrapper">
      <h4>Moglo bi vas zanimati</h4>
      <div class="other-products">
        <Product
          v-for="product in getOtherProducts"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :imageSrc="product.imgSrc"
          class="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  data() {
    return {
      productId: this.$route.params.productId,
      categoryLink: '',
    };
  },
  mounted() {
    const elementScrollTop = document.getElementById('content');
    elementScrollTop.scrollTop;

    this.categoryLink = `/proizvodi/${this.product.category.replace('č', 'c')}`;
  },
  computed: {
    ...mapGetters(['getProductById', 'getOtherProducts']),

    product() {
      return this.getProductById(this.productId);
    },
  },
  methods: {
    ...mapMutations(['addItemToCart']),
  },
};
</script>

<style lang="scss" scoped>
$primary-200: #aac7d4;
$primary-300: #88b1c3;
$primary-400: #6b9db4;
$primary-500: #558faa;
$primary-600: #4d8199;
$primary-700: #335666;
$primary-800: #2b4755;
$secondary-200: #f7ebd4;
$secondary-300: #eed6aa;
$secondary-400: #e2b96dea;
$secondary-500: #e2b96d;

.content {
  .product-container {
    display: flex;
    justify-content: space-between;

    .img-container {
      width: 48.6%;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);

      img {
        aspect-ratio: 4 / 2.9;
        object-fit: cover;
        object-position: center center;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.03);
        }
      }
    }

    .text-container {
      width: 42%;
      border-radius: 6px;

      .link {
        text-decoration: none;
      }

      h1 {
        color: $primary-700;
        margin-bottom: 0;
      }

      .price {
        font-size: 32px;
        color: $primary-800;
        opacity: 0.7;

        .number {
          font-weight: 700;
        }
      }

      .desc {
        color: $primary-700;
        margin-top: 36px;
        font-size: 18px;
      }

      .category {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 18px;
        background: $secondary-400;
        width: fit-content;
        padding: 0px 16px;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        margin-bottom: 2px;
        user-select: none;

        &:hover {
          background: $secondary-500;
          transform: scale(1.05) rotate(-2deg);
        }
      }

      .order-container {
        display: flex;
        gap: 18px;

        input {
          max-width: 60px;
          text-align: center;
          font-size: 24px;
          border: 1px solid $primary-200;
          border-radius: 4px;
          font-family: 'Open Sans Condensed';
          -moz-appearance: textfield;
        }
      }

      .line {
        border-color: #dde9ee;
      }
    }

    @media only screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;

      .img-container {
        width: 100%;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);

        img {
          aspect-ratio: 4 / 2.9;
          object-fit: cover;
          object-position: center center;
        }
      }

      .text-container {
        width: 100%;
        margin-top: 48px;
        margin-left: 0;
      }
    }
  }

  .other-products-wrapper {
    margin-top: 84px;

    h4 {
      color: $primary-700;
      margin-bottom: 18px;
    }

    .other-products {
      display: inline-flex;
      gap: 2.6%;
      flex-wrap: wrap;

      .product {
        @media only screen and (max-width: 860px) {
          &:not(:nth-of-type(4)) {
            margin-bottom: 42px;
          }
        }

        @media only screen and (max-width: 592px) {
          &:nth-of-type(3) {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1548px) {
    margin: 0 3.3vw;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px + 38px;
  }

  @media only screen and (max-width: 592px) {
    margin-top: 75px + 23px;
  }
}
</style>
