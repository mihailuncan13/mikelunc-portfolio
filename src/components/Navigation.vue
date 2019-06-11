<template lang="pug">
  .navigation
    b-navbar(toggleable='lg', type='dark', variant='danger')
      b-navbar-brand 
        router-link(:to="{ name:'Home' }") Mike Lunc.
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav='')
        b-navbar-nav
          b-nav-item
            router-link(:to="{ name:'Home' }") Home
          b-nav-item
            router-link(:to="{ name:'Projects' }") Projects
          b-nav-item
            router-link(:to="{ name:'About' }") About
          b-nav-item
            router-link(:to="{ name:'Contact' }") Contact

</template>

<script>
export default {
  name: 'Navigation',
}


</script>


<style lang="scss" scoped>
  @import '../assets/styles/include.scss';

  .navigation {
    position: fixed;
  }
</style>

