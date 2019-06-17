<template lang="pug">
  b-col.service
    b-row.mb-5
      b-col.icon(cols="1")
        font-awesome-icon(:icon="service.logo")
      b-col
        .service-title
          span {{ service.title }}
        .description
          span {{ service.description }}
</template>

<script>
export default {
  name: 'Service',

  props: {
    service: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/include.scss';

  .service {
    text-align: start;

    .icon {
      font-size: $font32;
      color: $hard-red;
      margin-right: 10px;
    }

    .service-title {
      font-size: $font32;
      font-weight: 500;
    }

    .description {
      color: $gray;
    }
  }
</style>


