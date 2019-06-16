<template lang="pug">
  .pages
    #home
      Home
    #about
      About
    #services
      Services
    #projects
      Projects
    #contact
      Contact
</template>

<script>
import Home from './Home.vue';
import About from './About.vue';
import Services from './Services.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

export default {
  name: 'Index',

  components: { Home, About, Services, Projects, Contact },

}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/include.scss';

  .pages {
    color: $white;
  }

</style>
