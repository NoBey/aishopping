<template>
  <div class="banner">
    <!--轮播图组件start-->
    banner部分
    <!--轮播图组件start-->
  </div>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        banner: []
      }
    },
    created () {
      this.getCarousel()
    },
    methods: {
      getCarousel () {
        API.getCarousel()
      }
    },
    components: {
    }
  }
</script>

<style scoped lang="less">
  .banner {
    width:100%;
    margin-top:108px;
    height:600px;

  }

</style>
