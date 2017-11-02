<template>
  <div class="mall">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="main_content">
        <h3>ALL PRODUCTS</h3>
      </div>
      <h4>商品</h4>
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide  v-for="shop in shops" :key="shop.id">
            <router-link :to="{name: 'MallDetail', query: {id: shop.id}}">
              <div class="img-box" >
                <img :src="shop.image" height="70%" width="100%">
                <div class="descript">{{shop.brand.name}}</div>
                <h6>{{shop.name}} </h6>
                <span class="price"> €{{shop.price}} </span>
              </div>
            </router-link>
          </swiper-slide>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import API from '@/api'
  import bottomHeight from '@/util/bottomHeight'
  import Navigation from '../layout/Navigation'
  import Notice from '../layout/Notice'
  import Foot from '../layout/Foot'

  export default {
    data () {
      return {
        shops: [],
        page: 1,
        swiperOption: {
          setWrapperSize :true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
          autoplayDisableOnInteraction:false,
          slidesPerView: 4,
          spaceBetween: 30,
        },
        swiperSlides: []
      }
    },
    components: {
      Navigation,
      Foot,
      Notice
    },
    created () {
      this.getShops(this.page)
    },
    methods: {
      async getShops (page) {
        let res = await API.getShops(page)
        console.log(res)
        this.shops.push(...res.data.data)
      }
    }
  }
</script>
<style scope lang="less">
  .mall{
    height:100%;
    width:100%;
    .main{
      width:100%;
      .main_content{
        width:80%;
        margin:0 auto;
        h3{
          color:#FDAF7E;
          font-weight: 700;
          font-size: 2.6rem;
          padding:3rem;
          text-align:center;
        }
      }
      h4{
        padding-left: 10%;
      }
      .items {
        padding:0;
        list-style: none;
        width:90%;
        margin:0 auto;
        overflow: hidden;
        margin-bottom: 2rem;
      }
    }
  }
  .swiper-box{
    width: 80%;
    margin: 40px auto;
  }
  .img-box{
    position: relative;
    height:400px;
    text-align: center;
    border: 1px solid #eee;
  }
  .img-box div{
    padding-top: 1rem;
  }
  .img-box h6{
    padding-top: .6rem;
  }
  .img-box span{
    padding-top: .6rem;
  }
</style>
