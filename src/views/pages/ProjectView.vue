<template lang="pug">
  .project-view
    h1 {{handleProject.name}}
    h2 {{handleProject.description}}
    .images(v-for="image in handleProject.images")
      img.image(:src="require(`../../assets/styles/images/${image.url}`)" alt="broken")
    
</template>

<script>
import { projects } from '@/utils/textUtil';

export default {
  name: 'ProjectView',

  data() {
    return {
      projects,
      projectId,
      project,
    }
  },

  computed: {
    getId() {
      const { projectId } = this.$route.params;
      return this.projectId = projectId
    },

    handleProject() {
      let obj = projects.find(obj => obj.id == this.getId);
      return obj;
    }
  },
}
</script>

<style lang="scss" scoped>

.images {
  display: flex;
  flex-direction: column;
}

.image {
  width: 30vh;
  height: 40vh;
  display: block;
  object-fit: cover;
  transition: .5s ease;
  backface-visibility: hidden;
}

</style>


