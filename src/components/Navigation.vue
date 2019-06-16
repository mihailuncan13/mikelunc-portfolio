<template lang="pug">
  Slide(:right="true")
    a(@click="scrollTo('#home', 1000)")
      span Home
    a(@click="scrollTo('#about', 1000)")
      span About
    a(@click="scrollTo('#services', 1000)")
      span Services
    a(@click="scrollTo('#projects', 1000)")
      span Projects
    a(@click="scrollTo('#contact', 1000)")
      span Contact
    Social(:isNavbar="true")
</template>

<script>
import { Slide } from 'vue-burger-menu'
import { doScrolling } from '@/utils/scrollUtil';
import Social from '@/components/Social'

export default {
  name: 'Navigation',

  components: { Slide, Social },

  methods: {
    scrollTo(elem, time) {
      return doScrolling(elem, time)
    }
  },
}
</script>

