<template lang="pug">
  .contact
    .cover
      .wrapper
        .title_big.mb-5.mt-5
          span {{ textContact.about_big_text }}
        .contact-card
          .title.mb-4
            span {{ textContact.card_title }}
          .info.mb-4
            span {{ textContact.address }}
          .info.mb-4
            span {{ textContact.phone }}
          .info.mb-4
            span {{ textContact.email }}
</template>

<script>
import { textContact } from '@/utils/textUtil';

export default {
  name: 'Contact',

  data() {
    return {
      textContact,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .contact {
    position: relative;

    .cover {
      background: url('../../assets/styles/images/contact.jpg');
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 80vh;
    }

    .title_big {
      span {
        padding: 20px;
        border-bottom: 1px solid $hard-red;
      }
    }

    .wrapper {
      width: 100%;
      position: absolute;
      top: 0;
      text-align: center;
      align-content: center;
      align-items: center;

      .contact-card {
        position: absolute; 
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        background-color: $black-op;
        max-width: 600px;
        padding: 20px 40px;

        .title {
          font-size: $font24;
          font-weight: 500;
          color: $hard-red;
        }

        .info {
          text-align: start;
        }
      }
    }
  }
</style>

