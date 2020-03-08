<template lang="pug">
  .project-view
    .wrapper
      .go-back.mb-5(@click="goBack")
        font-awesome-icon.icon(:icon="['fas', 'chevron-left']" size="lg")
        span.ml-3 Go back
      b-row
        b-col.mb-5.carousel-images(cols="12" v-if="handleProject.images.length > 0")
          .carousel
            b-carousel(
              v-model="carouselSlide"
              :interval="3000"
              :fade="true"
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
        b-col.video(lg="7" md="12" v-if="handleProject.video !== 'no-video'")
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
      return projectId;
    },

    handleProject() {
      let obj = projects.find(obj => obj.id == this.getId);
      return obj;
    }
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/include.scss';

  .project-view {
    background-color: $black;
    min-height: 100vh;
    max-height: fit-content;

    .wrapper {
      padding: 1em 4em 4em 4em;
      height: 100%;

      @media screen and (max-width: $screen-width-s){
        padding: 5em 1em 1em 1em;
      }

      .title {
        font-size: $font32;
        color: $white;
        font-weight: bold;
        background-color: $primary-color;
        padding: 20px
      }

      .description {
        font-size: $font24;
        text-align: justify;
        color: $white;
      }
    }

    .go-back {
      cursor: pointer;
      font-size: 18px;
      color: $primary-color-2;

      span {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }

</style>

<style lang="scss">
@import '../../assets/styles/include.scss';

  .carousel {
    &-images {
      height: 70vh;
      overflow: hidden;
      position: relative;

      img {
        object-fit: cover;
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
      }

      @media screen and (max-width: $screen-width-xl){
        height: 55vh;
      }

      @media screen and (max-width: $screen-width-l){
        height: 45vh;
      }

      @media screen and (max-width: $screen-width-s){
        height: 25vh;
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


