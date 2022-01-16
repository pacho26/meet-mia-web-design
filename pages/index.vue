<template>
  <div>
    <Slideshow />

    <div class="trend-container" id="bozicna-ponuda">
      <h2>Božićna ponuda</h2>
      <div class="products-container">
        <Product
          v-for="product in getChristmasProducts"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :imageSrc="product.imgSrc"
        />
      </div>
    </div>

    <div class="categories">
      <div class="cakes">
        <img
          src="../assets/img/products/salty-and-nutty-cover.jpg"
          style="width: 100%"
        />
        <div class="category-text-container">
          <h2>Kolači</h2>
        </div>
      </div>

      <div class="sandwiches">
        <img
          src="../assets/img/products/signor-prosciutto.jpg"
          style="width: 100%"
        />
        <div class="category-text-container">
          <h2>Sendviči</h2>
        </div>
      </div>
      <div class="croissants">
        <img
          src="../assets/img/products/croissant-pistacija.jpg"
          style="width: 100%"
        />
        <div class="category-text-container">
          <h2>Kroasani</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getChristmasProducts']),
  },
};
</script>

<style lang="scss" scoped>
.trend-container {
  margin-top: 110px;

  h2 {
    font-size: 36px;
    color: #335566;
    margin-bottom: 32px;
  }

  .products-container {
    display: inline-flex;
    gap: 2.6%;
    flex-wrap: wrap;

    & > * {
      margin-bottom: 42px;
    }
  }
}

.categories {
  position: relative;
  margin-top: 140px;

  .category-text-container {
    position: absolute;
    left: 2.2%;
    bottom: 1.2%;

    h2 {
      text-align: right;
      backdrop-filter: blur(10px);
      background: hsla(0, 0%, 100%, 0.2);
      border-radius: 6px;
      padding: 12px;
      color: #2b4755;
    }
  }

  img {
    filter: gray;
    -webkit-filter: grayscale(0.5);
    -webkit-transition: all 0.25s ease-in-out;
    border-radius: 6px;
  }

  .cakes {
    max-width: 60%;
    position: relative;
    -webkit-transition: all 0.25s ease-in-out;
    border-radius: 6px;
  }

  .sandwiches {
    max-width: 39%;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-transition: all 0.25s ease-in-out;

    .category-text-container {
      h2 {
        font-size: 24px;
      }
    }
  }

  .croissants {
    max-width: 39%;
    position: absolute;
    right: 0;
    bottom: 0;
    -webkit-transition: all 0.25s ease-in-out;

    .category-text-container {
      h2 {
        font-size: 24px;
      }
    }
  }

  & > * {
    &:hover {
      cursor: pointer;

      img {
        filter: none;
        -webkit-filter: grayscale(0);
      }
    }
  }
}

@media only screen and (max-width: 1548px) {
  .trend-container {
    margin: 110px 3.3vw 0;
  }

  .categories {
    margin: 0 3.3vw;
    margin-top: 110px;
  }
}

@media only screen and (max-width: 768px) {
  .trend-container {
    h2 {
      font-size: 30px;
    }
  }

  .categories {
    .cakes {
      max-width: 100%;

      .category-text-container {
        h2 {
          font-size: 24px;
        }
      }

      img {
        content: url('../assets/img/products/salty-and-nutty.jpg');
      }
    }

    .sandwiches {
      position: inherit;
      max-width: 100%;
      margin-top: 14px;
    }

    .croissants {
      position: inherit;
      max-width: 100%;
      margin-top: 14px;
    }
  }
}
</style>
