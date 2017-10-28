<template>
  <div class="banner-index">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <a :href="slide.link">
          <img :src="'http://ec2-52-18-155-175.eu-west-1.compute.amazonaws.com/' + slide.image" :alt="slide.name">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div> 
</template>

<script>
import API from '@/api'

export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        autoplay: 3500,
        setWrapperSize :true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        pagination : '.swiper-pagination',
        paginationClickable :true,
        observeParents:true,
        autoplayDisableOnInteraction:false
      },
      swiperSlides: []
    }
  },
  async created() {
    const res = await API.getCarousels()
    console.log('carousels', res.data)
    this.swiperSlides = res.data
  },
  mounted() {
    setInterval(() => {
      let swiperSlides = this.swiperSlides
      if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
    }, 3000)
  }
}
</script>

<style>
.banner-index{
  width: 100%;
  height: 650px;
}
.banner-index img{
  width: 100%;
  height: 650px;
}
.banner-index .swiper-button-prev, .banner-index .swiper-button-next {
  padding: 50px 30px;
}
</style>