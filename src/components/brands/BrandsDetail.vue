<template>
  <div class="brand-detail">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="brand-item">
        <img :src="brand.logo">
        <h4>{{brand.name}}</h4>
        <h6>{{brand.description}}</h6>
      </div>
      <div class="map">
        <v-map style="height: 100%" :zoom="zoom" :center="center">
          <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
          <v-marker :lat-lng="marker"></v-marker>
        </v-map>
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
        p{
          color: #b74f84;
        }
      }
      .map {
        width:50%;
        height: 400px;
        margin: 80px auto 60px;
      }
    }
  }
</style>