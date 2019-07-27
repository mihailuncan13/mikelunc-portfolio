<template lang="pug">
  .project-view
    .wrapper
      b-row.mb-5
        b-col.carousel-images(lg="5" md="12" v-if="handleProject.images.length > 0")
          .carousel
            b-carousel(
              v-model="carouselSlide"
              :interval="4000"
              controls
              indicators
            )
              b-carousel-slide.carousel-images(
                v-for="(image, index) in handleProject.images",
                :key="index",
                :img-src="require(`../../assets/styles/images/${image.url}`)"
                img-alt="image"
              )
        b-col(lg="5" md="12")
          .title {{handleProject.name}}
          .description.mt-5 {{handleProject.description}}
      b-row
        b-col.video(lg="5" md="12" v-if="handleProject.video !== 'no-video'")
          b-embed(
            type="iframe"
            aspect="16by9"
            :src="handleProject.video"
            allowfullscreen
          )
    
</template>

<script>
import { projects } from '@/utils/projectsUtil';

export default {
  name: 'ProjectView',

  data() {
    return {
      projects,
      carouselSlide: 0,
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
@import '../../assets/styles/include.scss';

  .project-view {
    background-color: $black;
    
    .wrapper {
      padding: 5em 4em 4em 4em;
      height: 100%;
      
      @media screen and (max-width: $screen-width-s){
        padding: 5em 1em 1em 1em;
      }
      
      .title {
        font-size: 24px;
        color: $white;
        font-weight: bold;
        background-color: $med-red;
        padding: 20px
      }
      .description {
        font-size: 20px;
        color: $white;
      }
    }
  }

</style>

<style lang="scss">
  .carousel {

    &-images {
      height: 47vh;
      overflow: hidden;
      position: relative;

      img {
        object-fit: cover;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
      }
    }

    .images-roll-container {
      margin: 0;
      display: flex;
      align-items: center;

      .image {
        margin-top: 19px;
        margin-right: 15px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.6);
        opacity: 0.6;

        &.selected {
          opacity: 1;
          margin-right: 12px;
          height: 56px;
          width: 56px;
          border: 3px solid #DFE4E8;
          transition: opacity 0.3s;
        }
      }
    }

    .carousel-control-next {
      top: 60px;

      &-icon {
        margin-bottom: 60px;
      }
    }

    .carousel-caption {
      top: 20px;
      bottom: unset;
      left: 90%;
    }

    .rating {
      font-size: 22px;
    }
  }
</style>


