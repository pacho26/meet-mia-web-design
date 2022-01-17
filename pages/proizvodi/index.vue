<template>
  <div>
    <BaseLoader v-if="numberOfLoadedImages < getNumberOfAllProducts" />
    <div class="content">
      <CategoryProducts id="cakes" categoryName="Kolači" :products="getCakes" />
      <hr class="line" />
      <CategoryProducts
        id="sandwiches"
        categoryName="Sendviči"
        :products="getSandwiches"
      />
      <hr class="line" />
      <CategoryProducts
        id="croissants"
        categoryName="Kroasani"
        :products="getCroissants"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    this.resetNumberOfLoadedImages();
  },
  computed: {
    ...mapGetters([
      'getCakes',
      'getSandwiches',
      'getCroissants',
      'getNumberOfAllProducts',
    ]),
    ...mapState(['numberOfLoadedImages']),
  },
  methods: {
    ...mapMutations(['resetNumberOfLoadedImages']),
  },
};
</script>

<style lang="scss" scoped>
.content {
  .line {
    border-color: #dde9ee;
    margin-bottom: 68px !important;
  }

  @media only screen and (max-width: 1548px) {
    margin: 0 3.3vw;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 75px + 38px;
  }

  @media only screen and (max-width: 592px) {
    margin-top: 75px + 23px;
  }
}
</style>
