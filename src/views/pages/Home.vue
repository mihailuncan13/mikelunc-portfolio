<template lang="pug">
  .home
    .video-wrapper
      video(autoplay muted loop playsinline id="myVideo")
        source(:src="require('../../assets/styles/video/home_video.mp4')" type="video/mp4")
    .logo
      b-img(:src="require('../../assets/styles/images/logo.png')")
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
  .video-wrapper {
    display: flex;
    justify-content: center;
    background-color: $black;
    
    video {
      margin-left: auto;
      margin-right: auto;

      @media screen and (max-width: $screen-width-l) {
        height: 110vh;
      }

      @media screen and (min-width: $screen-width-xl) {
        min-width: 100vw;
      }
      
      @media screen and (min-width: 1920px) {
        min-width: 100vw;
      }
    }
  }

  .logo {
    position: absolute;
    top: 36px;
    left: 36px;

    @media screen and (max-width: $screen-width-l) {
      top: 36px;
      left: 20px;
    }

    img {
      width: 100px;

      @media screen and (max-width: $screen-width-s) {
        width: 80px;
      }
    }
  }

  // .parallax-img {
  //   background-image: linear-gradient(90deg, rgba(2,0,36,0.10) 0%, rgba(0,0,0,0.75) 100%), url('../../assets/styles/images/Covers/cover_me1.jpg');
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   -webkit-background-size: 100%;
  //   -moz-background-size: 100%;
  //   -o-background-size: 100%;
  //   height: 100%;
  //   background-size: cover;
  //   -webkit-background-size: cover;
  //   -moz-background-size: cover;
  //   -o-background-size: cover;
  //   background-size: cover;
  // }

  .wrapper {
    position: absolute;
    top: 50%;
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
      top: 50%;
      left: 20px;
      max-width: 90%;
    }
  }
</style>


