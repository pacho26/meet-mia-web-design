<template>
  <nuxt-link v-if="to" class="btn" :to="to">{{ buttonText }}</nuxt-link>
  <button v-else class="btn">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-700: #4d8199;
$primary-600: #558faa;

* {
  box-sizing: border-box;
}

.btn {
  border-radius: 5px;
  background: $primary-700;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 10px 26px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  cursor: pointer;
  outline: 0;
  border: none;

  &:hover {
    background: $primary-600;
    transform: scale(1.01);
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
}
</style>
