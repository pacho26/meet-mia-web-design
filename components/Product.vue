<template>
  <nuxt-link :to="redirection" class="product">
    <div class="img-hover-zoom">
      <img
        :src="require(`@/assets/img/products/${this.imageSrc}`)"
        style="width: 100%"
        @load="incrementNumberOfLoadedImages()"
      />
    </div>
    <div class="product-desc">
      <h4>{{ name }}</h4>
      <p class="price">
        <span class="number">{{ price.toFixed(2) }}</span
        >kn
      </p>
    </div>
  </nuxt-link>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    id: {
      type: String,
      required: true,
      default: '',
    },
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

  computed: {
    redirection() {
      return `/proizvodi/${this.id}`;
    },
  },
  methods: {
    ...mapMutations(['incrementNumberOfLoadedImages']),
  },
};
</script>

<style lang="scss" scoped>
.product {
  max-width: 23%;
  overflow: hidden;
  color: #3c6477;
  border-radius: 6px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
  text-decoration: none;

  .img-hover-zoom {
    overflow: hidden;
  }

  img {
    transition: 0.3s all ease-out;
  }

  .product-desc {
    background: #fff;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 12px 14px 12px 14px;

    h4 {
      margin-bottom: 0px;
    }

    .price {
      font-family: 'Open Sans Condensed';
      font-size: 28px;
      color: #335566;
      opacity: 0.8;
      margin-bottom: 0px;
      .number {
        font-family: 'Open Sans Condensed';
        font-weight: 700;
      }
    }
  }

  &:hover {
    cursor: pointer;

    img {
      transform: scale(1.06);
    }

    .product-desc {
      opacity: 0.94;
    }
  }

  @media only screen and (max-width: 1312px) {
    .product-desc {
      padding: 0px 12px 0px 14px;

      h4 {
        font-size: 20px;
        margin-bottom: 4px;
        margin-top: 8px;
      }

      .price {
        font-size: 17px;
        margin-bottom: 8px;

        .number {
          font-weight: 700;
          margin-right: 2px;
        }
      }
    }
  }

  @media only screen and (max-width: 860px) {
    max-width: 31.5%;
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
