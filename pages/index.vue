<template>
  <div>
    <Navigation />
    <main>
      <div class="cover-container">
        <img src="../assets/img/christmas-cover.jpg" style="width: 100%" />
        <div class="cover-text">
          <h1>Božićna ponuda</h1>
          <p>
            Kušajte naše Božićne delicije i upotpunite svoj blagdanski ugođaj.
          </p>
          <BaseButton :buttonText="'Saznajte više'" />
        </div>
      </div>

      <div class="trendy-container">
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
            :name="'Salty & Nutty'"
            :price="22"
            imageSrc="salty-and-nutty.jpg"
          />

          <Product
            name="Petit Fours"
            :price="20"
            imageSrc="christmas-product1.jpg"
          />

          <Product name="6 divas" :price="28" imageSrc="6-divas.jpg" />

          <Product name="No Name" :price="28" imageSrc="no-name.jpg" />

          <Product
            :name="'Salty & Nutty'"
            :price="22"
            imageSrc="salty-and-nutty.jpg"
          />
        </div>
      </div>

      <div class="categories mt-5">
        <div class="cakes">
          <img
            src="../assets/img/products/carrot-cake-cover.jpg"
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
main {
  margin: 0 auto;
  max-width: 1500px;
  margin-top: 140px;
  margin-bottom: 140px;

  .cover-container {
    position: relative;

    img {
      width: 100%;
    }

    h1 {
      font-size: 48px;
      color: #223944;
      font-weight: 500;
    }

    p {
      color: #2b4755;
    }
  }

  .cover-text {
    position: absolute;
    bottom: 0px;
    background-color: hsl(0, 0%, 93%, 0.75);
    width: 100%;
    padding: 14px 24px 24px 30px;
    // text-align: center;

    p {
      font-size: 20px;
    }
  }

  .trendy-container {
    margin-top: 100px;

    h2 {
      font-size: 36px;
      color: #2b4755;
    }

    .products-container {
      display: inline-flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > * {
        margin-bottom: 52px;
      }
    }
  }

  .categories {
    position: relative;

    .category-text-container {
      background-color: hsl(0, 0%, 93%, 0.6);
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

      &:hover {
      }
    }

    .cakes {
      max-width: 60%;
      position: relative;
      -webkit-transition: all 0.25s ease-in-out;
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
}
</style>
