<template>
  <main>
    <div class="slideshow-container">
      <div class="slide fade">
        <img src="../assets/img/about-us-cover.jpg" style="width: 100%" />
        <div class="slideshow-text">
          <h1>Meet Mia</h1>
          <p>Dobro došli u naš branch & cake bar, najslađe mjesto u gradu!</p>
          <BaseButton :buttonText="'Saznajte više'" />
        </div>
      </div>

      <div class="slide fade">
        <img src="../assets/img/christmas-cover.jpg" style="width: 100%" />
        <div class="slideshow-text">
          <h1>Božićna ponuda</h1>
          <p>
            Kušajte naše Božićne delicije i upotpunite svoj blagdanski ugođaj.
          </p>
          <BaseButton :buttonText="'Saznajte više'" />
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
  </main>
</template>

<script>
export default {
  data() {
    return {
      slideIndex: 1,
      skipSwitching: false,
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
    this.startChangeSlidesInterval();
  },
  methods: {
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
        console.log('this.skipSwitching :>> ', this.skipSwitching);
        if (!this.skipSwitching) {
          this.plusSlides(1);
        } else {
          this.skipSwitching = false;
        }
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
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
    max-height: 770px;
    overflow: hidden;

    img {
      width: 100%;
      user-select: none;
    }

    .slideshow-text {
      position: absolute;
      bottom: 0px;
      background-color: hsla(0, 0%, 93%, 0.7);
      width: 100%;
      padding: 14px 24px 24px 30px;
      // text-align: center;

      h1 {
        font-size: 48px;
        color: #223944;
        font-weight: 500;
      }

      p {
        font-size: 20px;
        color: #2b4755;
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
        transform: scale(1.15);
      }
    }
  }

  &:hover {
    .fa {
      display: block;
    }
  }
}

.dots-container {
  text-align: center;
  user-select: none;
  margin-top: 20px;

  .dot {
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin: 0 14px;
    background-color: #cccccc;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: #669ab2;
    }
  }

  .active {
    background-color: #3c6477 !important;
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
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
