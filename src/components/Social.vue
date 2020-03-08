<template lang="pug">
  .social(:class="isNavbar ? 'navbar' : 'home' ")
    a.icon(:href="`${social.instagram}`" target="_blank")
      font-awesome-icon(:icon="['fab', 'instagram']")
    a.icon(:href="`${social.facebook}`" target="_blank")
      font-awesome-icon(:icon="['fab', 'facebook-f']")
    a.icon(:href="`${social.twitter}`" target="_blank")
      font-awesome-icon(:icon="['fab', 'twitter']")
</template>

<script>
import { social } from '@/utils/textUtil'

export default {
  name: 'Social',

  props: {
    isNavbar: {
      type: Boolean,
      default: false,
    }
  },

  data() {
    return {
      social,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/include.scss';

.social {
  .icon {
    color: $white;
    padding: 10px 0;
    cursor: pointer;
    &:hover {
      color: $primary-color;
      transition: 0.2s ease-in;
    }
  }
}

.home {
  display: none;
  @media screen and (min-width: $screen-width-s) {
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 36px;
    top: 45%;
    font-size: $font24;
  }
}

.navbar {
  display: none;
  @media screen and (max-width: $screen-width-s) {
    display: flex;
    font-size: $font20;
    .icon {
      padding: 0 20px;
    }
  }
}

</style>


