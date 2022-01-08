<template>
  <div class="nav-container">
    <nav class="nav-main">
      <div id="hamburger-icon" @click="extendHamburger()">
        <fa class="fa-bars" icon="bars"></fa>
      </div>

      <nuxt-link id="logo" to="/">
        <img src="../assets/img/logo.png" alt="logo" />
      </nuxt-link>

      <ul>
        <li class="dropdown">
          <button class="dropbtn">
            PROIZVODI
            <fa class="fa-caret-square-down" icon="caret-square-down"></fa>
          </button>
          <div class="dropdown-content">
            <a href="#" id="dropdown-item">KOLAČI</a>
            <a href="#" id="dropdown-item">SENDVIČI</a>
            <a href="#" id="dropdown-item">KROASANI</a>
          </div>
        </li>
        <li>
          <nuxt-link to="about-us">O NAMA </nuxt-link>
        </li>
        <li><a href="#">KONTAKT</a></li>
      </ul>

      <div class="user-icons">
        <div class="shopping-cart-icon">
          <fa class="fa-shopping-cart" icon="shopping-cart"></fa>
        </div>

        <div class="user-icon">
          <fa class="fa-user" icon="user"></fa>
        </div>
      </div>
    </nav>

    <ul class="mobile-nav" ref="mobileNav">
      <li id="mobile-dropdown" @click="extendMobileDropdown()">
        <a href="#">PROIZVODI</a>

        <fa class="fa-caret-square-down" icon="caret-square-down"></fa>
      </li>

      <div class="mobile-dropdown-content" ref="mobileDropdownContent">
        <li id="mobile-dropdown-item"><a href="#">KOLAČI</a></li>
        <li id="mobile-dropdown-item"><a href="#">SENDVIČI</a></li>
        <li id="mobile-dropdown-item"><a href="#">KROASANI</a></li>
      </div>

      <li><a href="#">O NAMA</a></li>
      <li><a href="#">KONTAKT</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    extendHamburger() {
      this.$refs['mobileNav'].classList.toggle('show-element');
    },

    extendMobileDropdown() {
      this.$refs['mobileDropdownContent'].classList.toggle('show-element');
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
  background: #f0f0f0;
  height: 94px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  z-index: 999;
  position: fixed;
  top: 0;
  width: 100%;
  opacity: 0.93;

  &:hover {
    opacity: 1;
  }
}

.nav-main {
  margin: 0 auto;
  max-width: 1500px;
  height: 94px;
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

.nav-main li {
  height: 100%;
  font-size: 20px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  cursor: pointer;
}

.nav-main li:hover {
  background-color: #719bb3;
}

.nav-main li:hover a {
  color: #fff;
}

.nav-main li a {
  text-decoration: none;
  color: #507c95;
  font-weight: 500;
}

.fa-caret-square-down {
  position: relative;
  left: 10px;
  color: #507c95;
}

.nav-main li:hover #dropdown-icon {
  fill: #fff;
}

.nav-main {
  display: flex;
}

.dropdown {
  float: left;
  position: relative;

  &:hover {
    .fa-caret-square-down,
    .dropbtn {
      color: #fff;
    }
  }

  .dropbtn {
    font-size: 20px;
    color: #507c95;
    font-weight: 500;
    border: none;
    outline: none;
    padding: 14px 16px;
    background-color: inherit;
    font-family: inherit;
    margin: 0;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  left: 0;
  top: 94px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 8px 8px;
}

#dropdown-item {
  color: #507c95;
  width: 223px;
}

#dropdown-item:last-of-type {
  border-radius: 0 0 8px 8px;
}

#dropdown-item:hover {
  background-color: #719bb3;
  color: #fff;
}

.dropdown-content a {
  float: none;
  padding: 16px 16px;
  display: block;
  text-align: center;
}

.dropdown-content a:hover {
  background-color: #719bb3;
}

.dropdown:hover .dropdown-content {
  display: block;
}

#logo {
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  user-select: none;
}

#logo img {
  max-height: 94px;
  display: block;
  transition: 0.15s ease-in-out;
}

#logo:hover img {
  transform: scale(1.35, 1);
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
}

.user-icons > :hover {
  cursor: pointer;
  opacity: 0.75;
}

.fa-user {
  width: 30px;
  height: 30px;
  color: #507c95;
}

.fa-shopping-cart {
  width: 30px;
  height: 30px;
  margin-right: 10px;
  color: #507c95;
}

#hamburger-icon {
  display: none;

  .fa-bars {
    width: 22px;
    height: 22px;
    margin-left: 10px;
    color: #507c95;
  }
}

.mobile-nav {
  display: none;
}

@media only screen and (max-width: 768px) {
  .nav-main ul {
    display: none;
  }

  .mobile-nav {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 10px;
  }

  .mobile-nav > li {
    background-color: #f0f0f0;
  }

  #hamburger-icon {
    display: block;
    cursor: pointer;
    padding: 10px;
  }

  #hamburger-icon:hover {
    opacity: 0.75;
  }

  h1 {
    margin-top: 60px;
  }

  #logo {
    position: absolute;
    left: 41.4%;
  }

  .user-icons {
    margin-right: 10px;
  }

  .user-icons > * {
    padding: 10px;
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
    left: 10px;
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
  }
}
</style>
