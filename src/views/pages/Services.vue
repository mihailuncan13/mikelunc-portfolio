<template lang="pug">
  .services
    b-row(align-h="center")
      b-col(lg="8" md="11" sm="11")
        .title_small.mb-3.mt-5
          span {{textServices.about_small_text}}
      b-col(lg="8" md="11" sm="11")
        .title_big.mb-5
          span {{textServices.about_big_text}}
      b-col(lg="8" md="11" sm="11")
        b-row(align-h="between")
          b-col.service(lg="6")
            b-row.mb-5
              b-col.icon(cols="1")
                font-awesome-icon(:icon="['fas', 'camera-retro']")
              b-col
                .service-title
                  span {{ textServices.service_1_title }}
                .description
                  span {{ textServices.service_1_description }}
          b-col.service(lg="6")
            b-row.mb-5
              b-col.icon(cols="1")
                font-awesome-icon(icon="video")
              b-col
                .service-title
                  span {{ textServices.service_2_title }}
                .description
                  span {{ textServices.service_2_description }}

</template>

<script>
import { textServices } from '@/utils/textUtil'

export default {
  name: 'Services',

  data() {
    return {
      textServices,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .services {
    color: $black;
    background-color: $white;
    text-align: center;

    .title_small {
      font-size: $font24;
      font-weight: bold;
      color: $hard-red;
    }

    .title_big {
      font-size: $font48;
      font-weight: bold;
      @include smaller-font();
      span {
        padding: 20px;
        border-bottom: 1px solid $black;
      }
    }

    .text_info {
      font-size: $font24;
      @media screen and (max-width: $screen-width-l) {
        font-size: $font20;
      }
    }

    .service {
      text-align: start;

      .icon {
        font-size: $font32;
        color: $hard-red;
      }

      .service-title {
        font-size: $font32;
        font-weight: 500;
      }

      .description {
        color: $gray;
      }
    }
  }
</style>

