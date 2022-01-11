<template>
  <div>
    <BaseLoader v-if="isLoading" />

    <div class="content-container">
      <Navigation />
      <main>
        <Slideshow />

        <div class="trend-container" id="bozicna-ponuda">
          <h2>Božićna ponuda</h2>

          <div class="products-container">
            <Product
              name="Petit Fours"
              :price="20"
              imageSrc="christmas-product1.jpg"
            />

            <Product name="6 divas" :price="28" imageSrc="6-divas.jpg" />

            <Product name="No Name" :price="28" imageSrc="no-name.jpg" />

            <Product
              :name="'Carrot cake'"
              :price="22"
              imageSrc="carrot-cake.jpg"
            />

            <Product
              name="Petit Fours"
              :price="20"
              imageSrc="christmas-product1.jpg"
            />

            <Product name="6 divas" :price="28" imageSrc="6-divas.jpg" />

            <Product name="No Name" :price="28" imageSrc="no-name.jpg" />

            <Product
              :name="'Carrot cake'"
              :price="22"
              imageSrc="carrot-cake.jpg"
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
      </main>
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
  },
};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1500px;
  margin-top: 75px + 84px;
  margin-bottom: 140px;

  .trend-container {
    margin-top: 80px;

    h2 {
      font-size: 36px;
      color: #335566;
      margin-bottom: 32px;
    }

    .products-container {
      display: inline-flex;
      // justify-content: center;
      gap: 2.6%;
      flex-wrap: wrap;

      & > * {
        margin-bottom: 42px;
      }
    }
  }

  .categories {
    position: relative;
    margin-top: 120px;

    .category-text-container {
      background-color: hsl(0, 0%, 93%, 0.4);
      position: absolute;
      width: 100%;
      bottom: 0;

      h2 {
        text-align: right;
        padding: 16px 20px 2px 0;
        color: #2b4755;
      }
    }

    img {
      filter: gray;
      -webkit-filter: grayscale(0.5);
      -webkit-transition: all 0.25s ease-in-out;
      border-radius: 8px;
    }

    .cakes {
      max-width: 60%;
      position: relative;
      -webkit-transition: all 0.25s ease-in-out;
      border-radius: 8px;
    }

    .sandwiches {
      max-width: 39%;
      position: absolute;
      right: 0;
      top: 0;
      -webkit-transition: all 0.25s ease-in-out;

      .category-text-container {
        background-color: hsl(0, 0%, 93%, 0.2);

        h2 {
          font-size: 28px;
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
        background-color: hsl(0, 0%, 93%, 0.5);

        h2 {
          font-size: 28px;
        }
      }
    }

    & > * {
      &:hover {
        cursor: pointer;
        -webkit-transform: scale(1.01);

        img {
          filter: none;
          -webkit-filter: grayscale(0);
        }
      }
    }
  }

  @media only screen and (max-width: 1548px) {
    .trend-container {
      margin: 0 3.3vw;
    }

    .categories {
      margin: 0 3.3vw;
      margin-top: 120px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px;

    .trend-container {
      h2 {
        font-size: 30px;
      }
    }
  }

  @media only screen and (max-width: 580px) {
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
        margin-top: 12px;

        .category-text-container {
          h2 {
            font-size: 24px;
          }
        }
      }

      .croissants {
        position: inherit;
        max-width: 100%;
        margin-top: 12px;

        .category-text-container {
          h2 {
            font-size: 24px;
          }
        }
      }
    }
  }
}
</style>
