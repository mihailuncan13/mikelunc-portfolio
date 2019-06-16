<template lang="pug">
  #app
    Navigation
    router-view
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',

  components: { Navigation },
}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  animation: fadein 1s;
}

@keyframes fadein {
  from { opacity: 0}
  to   { opacity: 1}
}

</style>

