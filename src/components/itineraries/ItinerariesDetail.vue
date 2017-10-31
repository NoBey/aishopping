<template>
  <div class="dealdetail">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="itinerary-item">
        <img :src="itinerary.image">
        <h4>{{itinerary.name}}</h4>
        <p><span>发表时间：{{itinerary.created_at}}</span> <span>更新时间：{{itinerary.updated_at}}</span><span>分享数：{{itinerary.enable}}</span></p>
        <h6>{{itinerary.description}}</h6>
      </div>
      <div class="content" v-html="itinerary.content">
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
        id: this.$route.query.id,
        itinerary: {},
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
      this.getItinerary(this.id)
    },
    methods: {
      async getItinerary(){
        let res = await API.getItinerary(this.id)
        console.log('id'+this.id,res.data)
        this.itinerary = res.data        
      }
    }
  }
</script>
<style scope lang="less">
  .dealdetail{
    width:100%;
    .main{
      width:100%;
      margin-top:15px;
      .itinerary-item{
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
          // color: #b74f84;
        }
      }
      .content {
        width:80%;
        margin:0 auto;
        text-align: center;
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
</style>
