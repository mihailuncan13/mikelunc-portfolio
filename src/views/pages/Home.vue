<template lang="pug">
  #home
    .parallax
    .info#section1(ref="section1")
      p Scroll Up and Down this page to see the parallax scrolling effect.
      p This div is just here to enable scrolling.
      p Tip: Try to remove the background-attachment property to remove the scrolling effect.
    .info#section2(ref="section2")
      p Scroll Up and Down this page to see the parallax scrolling effect.
      p This div is just here to enable scrolling.
      p Tip: Try to remove the background-attachment property to remove the scrolling effect.
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/include.scss';

  .parallax {
    background: url('https://source.unsplash.com/hfk6xOjQlFk');
    min-height: 100vh; 
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .info {
    text-align: center;
    color: $white;
    width: 100%;
  }

  #section1 {
    background-color: pink;
    height: 100vh;
  }
  
  #section2 {
    background-color: aquamarine;
    height: 100vh;
  }

</style>
