<template>
  <footer>
    <div class="footer-content">
      <div class="footer-content__column">
        <h4>Meet Mia</h4>
        <nuxt-link to="/"> Naslovna </nuxt-link>
        <nuxt-link to="/o-nama"> O nama </nuxt-link>
        <nuxt-link to="/kontakt"> Kontakt </nuxt-link>
      </div>
      <div class="footer-content__column">
        <h4>Proizvodi</h4>
        <nuxt-link to="/proizvodi/kolaci"> Kolači </nuxt-link>
        <nuxt-link to="/proizvodi/sendvici"> Sendviči </nuxt-link>
        <nuxt-link to="/proizvodi/kroasani"> Kroasani </nuxt-link>
      </div>

      <div class="footer-content__column brand-logo-container">
        <nuxt-link class="logo" to="/">
          <img
            src="../assets/img/logo-cropped.png"
            alt="logo"
            width="100%"
            @click="scrollToTop()"
          />
        </nuxt-link>
        <div class="brands">
          <a href="https://www.facebook.com/meetmia/" target="_blank"
            ><img
              src="../assets/svg/facebook-logo.svg"
              alt="facebook"
              class="brand-icon"
          /></a>

          <a
            href="https://www.instagram.com/meetmiacakes/?hl=hr"
            target="_blank"
            ><img
              src="../assets/svg/instagram-logo.svg"
              alt="instagram"
              class="brand-icon"
          /></a>
        </div>
      </div>
      <div class="footer-content__column">
        <h4>Pronađite nas</h4>
        <p>Vlaška ul. 43, 10000, Zagreb</p>
        <p>meetmia.cakes@gmail.com</p>
        <p>+385 91 445 5122</p>
      </div>
      <div class="footer-content__column">
        <h4>Zapratite nas</h4>
        <a href="https://www.facebook.com/meetmia/" target="_blank">
          Facebook</a
        >
        <a href="https://www.instagram.com/meetmiacakes/?hl=hr" target="_blank">
          Instagram</a
        >
        <a
          href="https://wolt.com/hr/hrv/zagreb/restaurant/meet-mia"
          target="_blank"
        >
          Wolt</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background: #6a9eb6;
  color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  .footer-content {
    margin: 0 auto;
    max-width: 1500px;
    padding: 54px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__column {
      min-width: 160px;
      display: flex;
      flex-direction: column;

      h4 {
        font-size: 18px;
        margin-bottom: 22px;
        font-weight: 600;
        cursor: initial;

        &:hover {
          opacity: 1;
        }
      }

      p {
        cursor: initial;

        &:hover {
          opacity: 1;
        }
      }

      a {
        color: white;
        text-decoration: none;
        margin-bottom: 10px;
        width: fit-content;
        transition: all 0.2s ease-in-out;
      }

      .brand-icon {
        width: 26px;
        transition: all 0.2s ease-in-out;

        &:hover {
          opacity: 0.7;
        }
      }

      .logo {
        max-width: 100px;
        position: relative;
        bottom: 8px;

        img {
          width: 100px;
        }

        &:hover {
          opacity: 0.8;
        }
      }

      & > * {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        width: fit-content;

        &:hover {
          opacity: 0.7;
        }
      }

      @media only screen and (max-width: 1000px) {
        &:not(:nth-of-type(3)) {
          margin-bottom: 42px;
          display: flex;
          flex-direction: column;
          align-items: center;

          h4 {
            margin-bottom: 16px;
          }
        }

        &:nth-of-type(3) {
          order: 1;
          width: 100%;
        }
      }
    }

    .brand-logo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 18px;

      .brands {
        display: flex;
        gap: 28px;
        align-items: center;

        &:hover {
          opacity: 1;
        }
      }
    }

    @media only screen and (max-width: 1548px) {
      margin: 0 3.3vw;
    }

    @media only screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
