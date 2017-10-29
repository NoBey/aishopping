<template>
  <div class="deal-detail">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="deal-item">
        <img :src="deal.image">
        <h4>{{deal.name}}</h4>
        <p>{{deal.start | formateDate}} - {{deal.end | formateDate}}</p>
        <h6>{{deal.description}}</h6>
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
        deal: {},
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
      this.getDeal(this.id)
    },
    methods: {
      async getDeal(){
        let res = await API.getDeal(this.id)
        console.log('id'+this.id,res.data)
        this.deal = res.data        
      }
    },
    filters: {
      formateDate(val){
        var monthsInEng = ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        let year = new Date(val).getFullYear()
        let month = new Date(val).getMonth()
        let day = new Date(val).getDay()
        return ' ' + day + ' ' + monthsInEng[month] + ' ' + year + ' '
      }
    }
  }
</script>
<style scope lang="less">
  .deal-detail{
    width:100%;
    .main{
      position: relative;
      margin-top:10px;
      width:100%;
      .deal-item{
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
