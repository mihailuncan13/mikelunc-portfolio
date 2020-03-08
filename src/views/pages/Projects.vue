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
        .project-items#proj(ref="projectsRef")
          .item(v-for="project in handleProjects")
            Project(:project="project")
        button.arrow.left(@click="scrollLeft")
          font-awesome-icon(:icon="['fas', 'chevron-left']" size="lg")
        button.arrow.right(@click="scrollRight")
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
      return this.projects.slice(0, 20);
    }
  },

  methods: {
    scrollLeft() {
      let content = this.$refs.projectsRef
      this.sideScroll(content, 'left', 15, 220, 10)
    },

    scrollRight() {
      let content = this.$refs.projectsRef
      this.sideScroll(content, 'right', 15, 220, 10)
    },

    sideScroll(element, direction, speed, distance, step) {
      let scrollAmount = 0
      const slideTimer = setInterval(function() {
        if (direction == 'left') {
          element.scrollLeft -= step
        } else {
          element.scrollLeft += step
        }
        scrollAmount += step
        if (scrollAmount >= distance) {
          window.clearInterval(slideTimer)
        }
      }, speed)
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
        border-bottom: 1px solid $primary-color;
      }
    }

    .project-items {
      display: flex;
    }
  }

  .project-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    button.arrow {
      position: absolute;
      padding: 10px 15px;
      border: 0;
      background-color: #0000003f;
      color: #ffffff;
      cursor: pointer;
      font-size: 20px;
      backdrop-filter: blur(5px);

      &:hover {
        color: $primary-color-2;
      }

      &.right {
        right: 20px;
      }

      &.left {
        left: 20px;
      }
    }

    .project-items {
      display: flex;
      overflow-x:scroll;  
      white-space: nowrap;

      .item {
        margin: 10px;
      }
    }
  }
</style>
