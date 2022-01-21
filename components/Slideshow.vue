<template>
  <div>
    <div class="slideshow-container">
      <div class="slide fade">
        <img
          src="image-small.jpg"
          srcset="
            ../assets/img/about-us-cover-1400.jpg 1400w,
            ../assets/img/about-us-cover-2000.jpg 2000w
          "
        />

        <div class="slideshow-text">
          <h1>Meet Mia</h1>
          <p>
            Dobro došli u naš branch & cake bar, najslađe mjesto u gradu!
            Upoznajte Miu uz vrhunske francuske slastice.
          </p>
          <nuxt-link to="o-nama">
            <BaseButton
              class="slideshow-btn"
              :buttonText="'Saznajte više'"
              to="/o-nama"
            />
          </nuxt-link>
        </div>
      </div>

      <div class="slide fade">
        <img
          src="image-small.jpg"
          srcset="
            ../assets/img/christmas-cover-1400.jpg 1400w,
            ../assets/img/christmas-cover-2000.jpg 2000w
          "
        />
        <div class="slideshow-text">
          <h1>Božićna ponuda</h1>
          <p>
            Kušajte naše Božićne delicije i upotpunite svoj blagdanski ugođaj.
          </p>
          <div
            class="slideshow-btn-container"
            @click="scroll('#bozicna-ponuda')"
          >
            <BaseButton class="slideshow-btn" :buttonText="'Saznajte više'" />
          </div>
        </div>
      </div>

      <div class="arrows">
        <fa
          class="fa fa-angle-left"
          icon="angle-left"
          @click="
            plusSlides(-1);
            skipSwitching = true;
          "
        ></fa>
        <fa
          class="fa fa-angle-right"
          icon="angle-right"
          @click="
            plusSlides(1);
            skipSwitching = true;
          "
        ></fa>
      </div>
    </div>

    <div class="dots-container">
      <span
        class="dot"
        @click="
          currentSlide(1);
          skipSwitching = true;
        "
      ></span>
      <span
        class="dot"
        @click="
          currentSlide(2);
          skipSwitching = true;
        "
      ></span>
      <!-- <span class="dot" onclick="currentSlide(3)"></span> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      skipSwitching: false,
      isTouchDevice: false,
    };
  },
  mounted() {
    this.isTouchDevice = window.ontouchstart !== undefined ? true : false;
    if (this.isTouchDevice) {
      // Make arrows always visible
      document.querySelector('.fa-angle-left').style.display = 'inherit';
      document.querySelector('.fa-angle-right').style.display = 'inherit';
    }
    this.showSlides(this.slideIndex);
    this.startChangeSlidesInterval();
  },
  methods: {
    scroll(id) {
      location.href = id;
    },
    plusSlides(n) {
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      let slides = document.querySelectorAll('.slide');
      let dots = document.querySelectorAll('.dot');

      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      let i;
      for (i = 0; i < dots.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[this.slideIndex - 1].style.display = 'block';
      dots[this.slideIndex - 1].classList.add('active');
    },
    startChangeSlidesInterval() {
      setInterval(() => {
        if (!this.skipSwitching) {
          this.plusSlides(1);
        } else {
          this.skipSwitching = false;
        }
      }, 6000);
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-900: #223944;

* {
  box-sizing: border-box;
}

.slide {
  display: none;
}

.slideshow-container {
  max-width: 1500px;
  position: relative;
  margin: auto;

  .slide {
    position: relative;
    height: 66vh;
    overflow: hidden;

    img {
      width: 100%;
      height: 66vh;
      user-select: none;
      object-fit: cover;
    }

    .slideshow-text {
      position: absolute;
      bottom: 0px;
      backdrop-filter: blur(2.5px);
      background: hsla(0, 0%, 100%, 0.35);
      width: 100%;
      padding: 12px 24px 24px 30px;
      transition: 0.2s ease-in-out;

      h1 {
        font-size: 48px;
        color: $primary-900;
        font-weight: 500;
        margin-bottom: 2px;
      }

      p {
        font-size: 20px;
        color: $primary-900;
        margin-bottom: 20px;
      }

      .slideshow-btn-container {
        width: fit-content;
      }
    }
  }

  .arrows {
    user-select: none;
    width: 100%;
    position: absolute;
    top: 46%;
    display: flex;
    justify-content: space-between;

    .fa {
      width: 60px;
      height: 70px;
      transform: scale(0.75, 1);
      color: #223944;
      opacity: 0.8;
      cursor: pointer;
      transition: ease-out 0.3s;
      display: none;

      &:first-of-type {
        margin-left: 16px;
      }

      &:last-of-type {
        margin-right: 16px;
      }

      &:hover {
        opacity: 0.95;
        transform: scale(0.86, 1.12);
      }
    }
  }

  &:hover {
    .fa {
      display: block;
    }

    .slideshow-text {
      opacity: 0.95;
    }
  }
}

.dots-container {
  text-align: center;
  user-select: none;
  margin-top: 24px;

  .dot {
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin: 0 15px;
    background: #cccccc;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s ease;

    &:hover {
      background: #669ab2;
    }
  }

  .active {
    background: #3c6477 !important;
  }
}

.fade {
  opacity: 1;
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1s;
  animation-name: fade;
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.6;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 768px) {
  .slideshow-container {
    .slide {
      .slideshow-text {
        text-align: center;

        h1 {
          font-size: 36px;
        }

        p {
          font-size: 18px;
          margin-bottom: 18px;
        }

        .slideshow-btn-container {
          margin: 0 auto;
        }
      }
    }
  }
}

@media only screen and (max-width: 580px) {
  .slideshow-container {
    .slide {
      height: 68vh;
      img {
        height: 68vh;
      }

      .slideshow-text {
        h1 {
          font-size: 32px;
        }

        p {
          font-size: 16px;
        }

        .slideshow-btn {
          transform: scale(0.95, 0.95);
        }
      }
    }

    .arrows {
      .fa {
        opacity: 0.95;
        width: 50px;
        height: 58px;

        &:first-of-type {
          margin-left: 2px;
        }

        &:last-of-type {
          margin-right: 2px;
        }
      }
    }
  }
}
</style>
