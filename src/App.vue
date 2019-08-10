<template lang="pug">
  #app
    Navigation(v-if="!hideNavOnProjectView")
    router-view
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'App',

  components: { Navigation },

   computed: {
    hideNavOnProjectView() {
      const routes = ['ProjectView'];
      return routes.includes(this.$route.name);
    },
  }
}
</script>

