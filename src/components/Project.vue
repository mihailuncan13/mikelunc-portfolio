<template lang="pug">
  .project(@click="handleGoToProject")
    img.image(:src="require(`../assets/styles/images/${project.cover}`)" alt="broken")
    .layer
      .title {{ project.name }}
</template>

<script>

export default {
  name: 'Project',

  props: {
    project: {
      type: Object,
      default: () => {},
    }
  },

  methods: {
    handleGoToProject() {
      const projectId = this.project.id;

      this.$router.push({
        name: 'ProjectView',
        params: {
          projectId,
        },
      });
      window.scroll({
        top: 0,
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/include.scss';

  .project {
    position: relative;
    cursor: pointer;
    .image {
      opacity: 1;
      flex: 1;
      height: 40vh;
      display: block;
      object-fit: cover;
      transition: .5s ease;
      backface-visibility: hidden;

      @media screen and (max-width: $screen-width-s){
      width: 50vw;
      height: 30vh;
      }
    }

    &:hover .image {
      opacity: 0.3;
    }

    .layer {
      transition: .5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }

    &:hover .layer {
      opacity: 1;
    }

    .title {
      color: $white;
      font-weight: 500;
    }
  }

</style>


