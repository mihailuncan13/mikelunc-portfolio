<template lang="pug">
  .services
    b-row(align-h="center")
      b-col(lg="8" md="11" sm="11")
        .title_small.mb-3.mt-5
          span {{textServices.about_small_text}}
      b-col(lg="8" md="11" sm="11")
        .title_big.mb-5
          span {{textServices.about_big_text}}
      b-col.service(lg="8" md="10")
        b-col(v-for="item in services" lg="6" md="11" sm="11")
          Service(:service="item")

</template>

<script>
import { textServices, services } from '@/utils/textUtil'
import Service from '@/components/Service'

export default {
  name: 'Services',

  components: { Service },

  data() {
    return {
      textServices,
      services,
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

    @media screen and (max-width: $screen-width-s) {
      padding: 10px;
    }

    .title_big {
      span {
        border-bottom: 1px solid $primary-color;
      }
    }

    .text_info {
      font-size: $font24;
      @media screen and (max-width: $screen-width-l) {
        font-size: $font20;
      }
    }
  }

  .service {
    display: flex;
    flex-wrap: wrap;
  }
</style>

