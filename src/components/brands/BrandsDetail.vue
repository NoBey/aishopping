<template>
  <div class="brand-detail">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="brand-item">
        <img :src="brand.logo">
        <h4>{{brand.name}}</h4>
        <h6>
          <span v-for="item in brand.categories" :key="item.id">{{item.name}}</span>
        </h6>
        <p>{{brand.description}}</p>
      </div>
      <div class="swiper-box">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in 9" :key="index">
            <!-- <a :href="item"> -->
              <div class="img-box">目前未登记产品
                <!-- <img :src="slide.image" :alt="slide.name"> -->
              </div>
            <!-- </a> -->
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="map">
        <div class="inner">      
          <v-map style="height: 100%" :zoom="zoom" :center="center">
            <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
            <v-marker :lat-lng="marker"></v-marker>
          </v-map>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>
<script>
  import API from '@/api'
  import Navigation from '../layout/Navigation'
  import Notice from '../layout/Notice'
  import Foot from '../layout/Foot'
  import Vue2Leaflet from 'vue2-leaflet'

  export default {
    data () {
      return {
        brand: {},
        id: this.$route.query.id,
        zoom:13,
        center: L.latLng(47.413220, -1.219482),
        url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        marker: L.latLng(47.413220, -1.219482),
        swiperOption: {
          autoplay: 3500,
          setWrapperSize :true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          pagination : '.swiper-pagination',
          paginationClickable :true,
          observeParents:true,
          autoplayDisableOnInteraction:false,
          slidesPerView: 3,
          spaceBetween: 30,
        },
        swiperSlides: []
      }
    },
    components: {
      Navigation,
      Notice,
      Foot,
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer' :Vue2Leaflet.TileLayer,
      'v-marker': Vue2Leaflet.Marker
    },
    created () {
      this.getBrand(this.id)
    },
    methods: {
      async getBrand (id) {
        let res = await API.getBrand( id )
        console.log( 'brand', res )
        this.brand = res.data
      }
    }
  }
</script>
<style scope lang="less">
  .brand-detail{
    width:100%;
    .main{
      position: relative;
      margin-top:10px;
      width:100%;
      .brand-item{
        width:80%;
        margin:0 auto;
        text-align: center;
        img{
          width: 60%;
          margin: 30px 0;
        }
        h4{
          padding:60px 0 15px;
        }
        h6{
          margin-bottom: 20px;
          span{
            margin-right: 20px;
          }
        }
        p{
          width: 90%;
          margin: 0 auto;
        }
      }
      .map {
        margin: 80px auto 60px;
        position: relative;
        width: 52%;
        height: 0;
        padding-bottom: 39%;
        .inner{
          width:100%;
          height: 100%;
          max-height: 600px;
          background: red;
          position: absolute;
        }
      }
    }
  }
  .swiper-box{
    width: 60%;
    margin: 40px auto;
  }
  .img-box{
    // width:80%;
    height:300px;
    line-height: 300px;
    text-align: center;
    border: 1px solid #ddd;
  }
</style>