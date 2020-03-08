<template lang="pug">
  b-col.service
    b-row.mb-5
      b-col
        .service-title
          font-awesome-icon.icon(:icon="service.logo")
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
    .service-title {
      font-size: $font32;
      font-weight: 500;
      display: flex;
      align-items: center;

      .icon {
        font-size: $font32;
        color: $primary-color;
        margin-right: 10px;
      }
    }

    .description {
      text-align: justify;
      color: $gray;
    }
  }
</style>


