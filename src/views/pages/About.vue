<template lang="pug">
  .about
    b-row(align-h="center")
      b-col(lg="8" md="11" sm="11")
        .title_small.mb-3.mt-5
          span {{textSocial.about_small_text}}
      b-col(lg="8" md="11" sm="11")
        .title_big.mb-5
          span {{textSocial.about_big_text}}
      b-col(lg="8" md="11" sm="11")
        .text_info.mb-5
          span {{textSocial.about_info_text}}
</template>

<script>
import { textSocial } from '@/utils/textUtil'

export default {
  name: 'About',

  data() {
    return {
      textSocial,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .about {
    background-color: $hard-red;
    text-align: center;

    .title_small {
      font-size: $font24;
      font-weight: bold;
    }

    .title_big {
      font-size: $font48;
      font-weight: bold;
      @include smaller-font();
      span {
        padding: 20px;
        border-bottom: 1px solid $white;
      }
    }

    .text_info {
      font-size: $font24;
      @media screen and (max-width: $screen-width-l) {
        font-size: $font20;
      }
    }
  }
</style>



