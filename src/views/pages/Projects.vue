<template lang="pug">
  .projects
    b-row(align-h="center")
      b-col(lg="8" md="11" sm="11")
        .title_small.mb-3.mt-5
          span {{textProjects.about_small_text}}
      b-col(lg="8" md="11" sm="11")
        .title_big.mb-5
          span {{textProjects.about_big_text}}
      .project-wrapper.pb-5
        .arrow(@click="scrollLeft")
          font-awesome-icon(:icon="['fas', 'chevron-left']" size="lg")
        .project-items
          .item(v-for="project in handleProjects")
            Project(:project="project")
        .arrow(@click="scrollRight")
          font-awesome-icon(:icon="['fas', 'chevron-right']" size="lg")

</template>

<script>
import { textProjects } from '@/utils/textUtil';
import { projects } from '@/utils/projectsUtil';
import Project from '@/components/Project';

export default {
  name: 'Projects',

  components: { Project },

  data() {
    return {
      textProjects,
      projects,
    }
  },

  computed: {
    handleProjects() {
      return this.projects.slice(0, 8);
    }
  },

  methods: {
    scrollLeft() {
      let content = document.querySelector(".project-items");
      content.scrollLeft -= 140;
    },
    scrollRight() {
      let content = document.querySelector(".project-items");
      content.scrollLeft += 140;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .projects {
    background-color: $black;
    text-align: center;

    @media screen and (max-width: $screen-width-s) {
      padding: 10px;
    }

    .title_big {
      span {
        border-bottom: 1px solid $hard-red;
      }
    }

    .project-items {
      display: flex;
    }
  }

  .project-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow {
      padding: 1em;
      cursor: pointer;
      
      &:hover {
        color: $med-red;
      }
    }

    .project-items {
      max-width: 90vw;
      display: flex;
      overflow-x:scroll;  
      white-space: nowrap;

      .item {
        margin: 2em;
      }
    }
  }
</style>
