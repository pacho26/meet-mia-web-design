<template>
  <footer>
    <div class="footer-content">
      <div class="footer-content__column">
        <nuxt-link class="logo" to="/">
          <img src="../assets/img/logo-cropped.png" alt="logo" width="100%" />
        </nuxt-link>
      </div>
      <div class="footer-content__column">
        <h4>Proizvodi</h4>
        <p>Kolači</p>
        <p>Sendviči</p>
        <p>Kroasani</p>
      </div>
      <div class="footer-content__column">
        <h4>O nama</h4>
        <p>Paragraf 1</p>
        <p>Paragraf 2</p>
        <p>Paragraf 3</p>
      </div>
      <div class="footer-content__column">
        <h4>Kontaktirajte nas</h4>
        <p>Paragraf 1</p>
        <p>Paragraf 2</p>
        <p>Paragraf 3</p>
      </div>
      <div class="footer-content__column">
        <h4>Kontaktirajte nas</h4>
        <p>Paragraf 1</p>
        <p>Paragraf 2</p>
        <p>Paragraf 3</p>
      </div>
      <!-- OVDJE STAVITI DRUŠTVENE MREŽE MOZDA? -->
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #6a9db5;
  color: #fff;
  box-shadow: 12px 4px 12px rgba(0, 0, 0, 0.5);

  .footer-content {
    margin: 0 auto;
    max-width: 1500px;
    padding: 64px 0;
    display: flex;
    justify-content: space-between;

    &__column {
      h4 {
        font-size: 18px;
        margin-bottom: 22px;
        transition: all 0.2s ease-in-out;
        font-weight: 600;

        &:hover {
          opacity: 0.8;
        }
      }

      p {
        margin-bottom: 10px;
        transition: all 0.2s ease-in-out;

        &:hover {
          opacity: 0.8;
        }
      }

      .logo {
        max-width: 80px;

        img {
          width: 80px;
        }
      }

      & > * {
        cursor: pointer;
      }
    }

    @media only screen and (max-width: 1548px) {
      margin: 0 3.3vw;
    }
  }
}
</style>
