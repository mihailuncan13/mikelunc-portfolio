<template lang="pug">
  .home
    Parallax(:sectionHeight="100")
      .parallax-img
    .logo
      span Mike Lunc. Production
    .wrapper
      .small-text.mb-2
        span {{ textHome.home_small_text }}
      .big-text.mb-4
        span {{ textHome.home_big_text }}
      b-button(@click="scrollTo('#contact', 1000)") Contact me
    Social(:isNavbar="false")
</template>

<script>
import Parallax from 'vue-parallaxy'
import { textHome } from '@/utils/textUtil'
import { doScrolling } from '@/utils/scrollUtil';
import Social from '@/components/Social'

export default {
  name: 'Home',

  components: { Parallax, Social },

  data() {
    return {
      textHome,
    }
  },

    methods: {
    scrollTo(elem, time) {
      return doScrolling(elem, time)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .logo {
    position: absolute;
    font-size: $font20;
    top: 36px;
    left: 36px;
  }

  .parallax-img {
    background: url('../../assets/styles/images/Covers/cover_me1.jpg');
    background-position: center;
    background-repeat: no-repeat;
    -webkit-background-size: 100%; 
    -moz-background-size: 100%; 
    -o-background-size: 100%; 
    height: 100%;
    background-size: cover;
    -webkit-background-size: cover; 
    -moz-background-size: cover; 
    -o-background-size: cover; 
    background-size: cover;
  }

  .wrapper {
    position: absolute;
    top: 15%;
    left: 15%;
    max-width: 40%;

    .small-text {
      font-size: $font20;
      text-transform: uppercase;
      color: $light-gray;
      font-weight: bold;
      opacity: 0.5;
    }

    .big-text {
      font-size: $font48;
      font-weight: bold;
      line-height: 1.2em;
      text-align: start;
      @include smaller-font();
    }
    @media screen and (max-width: $screen-width-l) {
      top: 10%;
      left: 20px;
      max-width: 90%;
    }

    @media screen and (max-width: $screen-width-s) {
      top: 20%;
      left: 20px;
      max-width: 90%;
    }
  }
</style>


