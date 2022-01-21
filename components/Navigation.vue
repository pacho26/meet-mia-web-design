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
            <nuxt-link to="/proizvodi/kolaci" class="dropdown-item nav-link"
              >Kolači</nuxt-link
            >
            <nuxt-link to="/proizvodi/sendvici" class="dropdown-item nav-link"
              >Sendviči</nuxt-link
            >
            <nuxt-link to="/proizvodi/kroasani" class="dropdown-item nav-link"
              >Kroasani</nuxt-link
            >
          </div>
        </div>
        <nuxt-link class="nav-link" to="/o-nama">O nama </nuxt-link>
        <nuxt-link class="nav-link" to="/kontakt">Kontakt </nuxt-link>
      </ul>

      <div class="user-icons">
        <div class="shopping-cart-icon">
          <div class="shopping-items">
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
        <div class="item">Proizvodi</div>

        <fa class="fa-caret-square-down" icon="caret-square-down"></fa>
      </li>

      <div class="mobile-dropdown-content" ref="mobileDropdownContent">
        <li id="mobile-dropdown-item" @click="extendHamburger()">
          <nuxt-link to="/proizvodi/kolaci">Kolači</nuxt-link>
        </li>
        <li id="mobile-dropdown-item" @click="extendHamburger()">
          <nuxt-link to="/proizvodi/sendvici">Sendviči</nuxt-link>
        </li>
        <li id="mobile-dropdown-item" @click="extendHamburger()">
          <nuxt-link to="/proizvodi/kroasani">Kroasani</nuxt-link>
        </li>
      </div>

      <li @click="extendHamburger()">
        <!-- <a href="/o-nama">O nama</a> -->
        <nuxt-link to="/o-nama">O nama</nuxt-link>
      </li>
      <li @click="extendHamburger()">
        <nuxt-link to="/kontakt">Kontakt</nuxt-link>
      </li>
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
        path: '/o-nama',
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.93;
  backdrop-filter: blur(12px);
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0 0 5px 5px;
  transition: 0.16s all ease-in-out;
}

.dropdown-item {
  color: #507c95;
  width: 220.5px;
  transition: 0.16s all ease-in-out;
}

.dropdown-item:last-of-type {
  border-radius: 0 0 5px 5px;
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
  opacity: 0.8;
  transform: scale(1.05);
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
    box-shadow: rgba(100, 100, 111, 0.3) 0px 0px 20px 0px;
  }

  .mobile-nav > li {
    background: #f0f0f0;
  }

  #hamburger-icon {
    display: block;
    cursor: pointer;
    margin-right: 24.8vw;
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

      .shopping-items {
        left: 24px;
      }
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

  ul li .item {
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
