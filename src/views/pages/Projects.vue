<template lang="pug">
  .projects
    b-row(align-h="center")
      b-col(lg="8" md="11" sm="11")
        .title_small.mb-3.mt-5
          span {{textProjects.about_small_text}}
      b-col(lg="8" md="11" sm="11")
        .title_big.mb-5
          span {{textProjects.about_big_text}}

</template>

<script>
import { textProjects } from '@/utils/textUtil';

export default {
  name: 'Projects',

  data() {
    return {
      textProjects,
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
  }
</style>
