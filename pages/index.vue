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
        </div>
      </div>

      <div class="categories mt-5">
        <div class="cakes">
          <img
            src="../assets/img/products/carrot-cake-cover.jpg"
            style="width: 100%"
          />
          <h2>Kolači</h2>
        </div>

        <div class="sandwiches">
          <img
            src="../assets/img/products/signor-prosciutto.jpg"
            style="width: 100%"
          />
        </div>
        <div class="croissants">
          <img
            src="../assets/img/products/croissant-pistacija.jpg"
            style="width: 100%"
          />
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
    }
  }

  .cover-text {
    position: absolute;
    bottom: 0px;
    background-color: hsl(0, 0%, 93%, 0.75);
    width: 100%;
    padding: 12px 24px 22px 28px;
    // text-align: center;
  }

  .trendy-container {
    margin-top: 100px;

    h2 {
      font-size: 36px;
    }

    .products-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  .categories {
    position: relative;

    .cakes {
      max-width: 60%;
      position: relative;

      h2 {
        position: absolute;
        bottom: 16px;
        right: 30px;
      }
    }

    .sandwiches {
      max-width: 39%;
      position: absolute;
      right: 0;
      top: 0;
    }

    .croissants {
      max-width: 39%;
      position: absolute;
      right: 0;
      bottom: 0;
    }

    & > * {
      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }
}
</style>
