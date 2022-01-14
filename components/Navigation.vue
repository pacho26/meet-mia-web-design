<template>
  <div class="nav-container">
    <nav class="nav-main">
      <div id="hamburger-icon" @click="extendHamburger()">
        <fa class="fa-bars" icon="bars"></fa>
      </div>

      <nuxt-link id="logo" to="/">
        <img src="../assets/img/logo-cropped.png" alt="logo" />
      </nuxt-link>

      <ul class="nav-list">
        <div class="nav-link dropdown">
          <div class="dropbtn">
            Proizvodi
            <fa class="fa-caret-square-down" icon="caret-square-down"></fa>
          </div>
          <div class="dropdown-content">
            <nuxt-link to="about-us" class="dropdown-item nav-link"
              >Kolači</nuxt-link
            >
            <nuxt-link to="about-us" class="dropdown-item nav-link"
              >Sendviči</nuxt-link
            >
            <nuxt-link to="about-us" class="dropdown-item nav-link"
              >Kroasani</nuxt-link
            >
          </div>
        </div>
        <nuxt-link class="nav-link" to="about-us">O nama </nuxt-link>
        <nuxt-link class="nav-link" to="about-us">Kontakt </nuxt-link>
      </ul>

      <div class="user-icons">
        <div class="shopping-cart-icon">
          <div v-if="getNumberOfItemsInCart" class="shopping-items">
            {{ getNumberOfItemsInCart }}
          </div>
          <fa class="fa-shopping-cart" icon="shopping-cart"></fa>
        </div>

        <div class="user-icon">
          <fa class="fa-user" icon="user"></fa>
        </div>
      </div>
    </nav>

    <ul class="mobile-nav" ref="mobileNav">
      <li id="mobile-dropdown" @click="extendMobileDropdown()">
        <a href="#">Proizvodi</a>

        <fa class="fa-caret-square-down" icon="caret-square-down"></fa>
      </li>

      <div class="mobile-dropdown-content" ref="mobileDropdownContent">
        <li id="mobile-dropdown-item"><a href="#">Kolači</a></li>
        <li id="mobile-dropdown-item"><a href="#">Sendviči</a></li>
        <li id="mobile-dropdown-item"><a href="#">Kroasani</a></li>
      </div>

      <li><a href="#">O nama</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getNumberOfItemsInCart']),
  },
  methods: {
    extendHamburger() {
      this.$refs['mobileNav'].classList.toggle('show-element');
    },

    extendMobileDropdown() {
      this.$refs['mobileDropdownContent'].classList.toggle('show-element');
    },
    changeRoute() {
      this.$router.push({
        path: '/about-us',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.nav-container {
  height: 75px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.93;
  backdrop-filter: blur(10px);
  background: hsla(0, 0%, 100%, 0.9);
  transition: 0.16s all ease-in-out;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
}

.nav-main {
  margin: 0 auto;
  max-width: 1500px;
  height: 75px;
  align-items: center;
  justify-content: space-between;
}

.nav-main ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-link {
  padding: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-main .nav-link {
  height: 100%;
  font-size: 20px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.16s all ease-in-out;
}

.nav-link:hover {
  background: #719bb3;
  color: #fff;
}

.nav-link {
  color: #507c95;
  font-weight: 500;
}

.fa-caret-square-down {
  position: relative;
  left: 10px;
  color: #507c95;
}

.nav-main .nav-link:hover #dropdown-icon {
  fill: #fff;
}

.nav-main {
  display: flex;
}

.dropdown {
  float: left;
  position: relative;

  .dropbtn {
    font-size: 20px;
    color: #507c95;
    font-weight: 500;
    padding: 14px 16px;
    font-family: inherit;
    margin: 0;
  }

  &:hover {
    .fa-caret-square-down,
    .dropbtn {
      color: #fff;
    }
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  top: 75px;
  background: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.14);
  border-radius: 0 0 6px 6px;
  transition: 0.16s all ease-in-out;
}

.dropdown-item {
  color: #507c95;
  width: 220.5px;
  transition: 0.16s all ease-in-out;
}

.dropdown-item:last-of-type {
  border-radius: 0 0 6px 6px;
}

.dropdown-content .dropdown-item {
  float: none;
  padding: 16px 16px;
  display: block;
  text-align: center;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#logo {
  cursor: pointer;
  display: inline-block;
  user-select: none;

  img {
    max-height: 75px;
    display: block;
  }
}

.user-icons {
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.user-icons > * {
  padding: 2px;
  transition: 0.2s all ease-in-out;
}

.user-icons > :hover {
  cursor: pointer;
  opacity: 0.75;
}

.fa-user {
  width: 26px;
  height: 26px;
  color: #507c95;
}

.fa-shopping-cart {
  width: 26px;
  height: 26px;
  margin-right: 10px;
  color: #507c95;
}

.shopping-cart-icon {
  position: relative;
}

.shopping-items {
  position: absolute;
  left: 16px;
  bottom: 23px;
  background: #d9a33f;
  color: #fff;
  z-index: 99;
  border-radius: 50%;
  width: 19px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
}

#hamburger-icon {
  display: none;

  .fa-bars {
    width: 22px;
    height: 22px;
    color: #507c95;
  }
}
.mobile-nav {
  display: none;
}

@media only screen and (max-width: 1548px) {
  .nav-main {
    margin: 0 3.3vw;
  }
}

@media only screen and (max-width: 768px) {
  .nav-main ul {
    display: none;
  }

  .mobile-nav {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14);
  }

  .mobile-nav > li {
    background: #f0f0f0;
  }

  #hamburger-icon {
    display: block;
    cursor: pointer;
    width: 30vw;
  }

  #hamburger-icon:hover {
    opacity: 0.75;
  }

  h1 {
    margin-top: 60px;
  }

  .user-icons {
    display: flex;
    justify-content: flex-end;
    width: 30vw;

    .shopping-cart-icon {
      margin-right: 1.5vw;
    }
  }

  ul {
    width: 100%;
    background: #f0f0f0;
  }

  ul li {
    max-width: 100%;
    height: 100%;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 14px 40px;
    border-bottom: 1px solid rgba(80, 124, 149, 0.8);
    cursor: pointer;
  }

  #mobile-dropdown-item {
    max-width: 87%;
  }

  ul li a {
    text-decoration: none;
    color: #507c95;
    font-weight: 500;
    width: 100%;
  }

  .mobile-dropdown-content {
    display: none;
  }

  .mobile-dropdown-content li {
    position: relative;
    padding: 24px 0;
    left: 10vw;
  }

  .mobile-dropdown-content li a {
    font-size: 18px;
    position: absolute;
    left: 5vw;
  }

  .show-element {
    display: block;
  }

  p {
    color: #2d4553;
    margin: 0 30px;
  }

  .fa-user {
    width: 24px;
    height: 24px;
    color: #507c95;
  }

  .fa-shopping-cart {
    width: 24px;
    height: 24px;
    position: relative;
    left: 10px;
  }
}
</style>
