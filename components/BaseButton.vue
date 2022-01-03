<template>
  <nuxt-link v-if="to" class="btn">{{ buttonText }}</nuxt-link>
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
$primary-color: #558faa;
$secondary-color: #fff;

* {
  box-sizing: border-box;
}

.btn {
  border-radius: 8px;
  background: $primary-color;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 500;
  padding: 8px 24px;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  &:hover {
    background: $secondary-color;
    color: $primary-color;
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }
}
</style>
