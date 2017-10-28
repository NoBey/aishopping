<template>
  <div class="itineraries">
    <navigation></navigation>
    <div class="main">
      <notice></notice>
      <div class="cart" >
        <div class="row cart-content">
          <div class="col-sm-4" v-for="item in itineraries" :key="item.id" @click="toDetail(item.id)">
            <div class="itineraries">
              <img :src="item.image" class="img_wrapper">
              <div class="itineraries-content">
                <h3>{{item.name}}</h3>
                <p>{{item.description}}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="morebtn" class="row cart-content">
          <div class="col-sm-12 col-md-offset-1">
            <div class="load-more" @click="loadMore">
              加载更多
            </div>
          </div>
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

  export default {
    data () {
      return {
        itineraries: [],
        page: 1,
        morebtn: true
      }
    },
    components: {
      Navigation,
      Notice,
      Foot
    },
    created () {
      this.getItineraries(this.page)
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'ItinerariesDetail', query: {id: id}})
      },
      async getItineraries (page) {
        let res = await API.getDeals(page)
        console.log(res)
        this.itineraries.push(...res.data.data)
        if( res.data.current_page == res.data.last_page) {
          this.morebtn = false
        }
        this.refreshPage()
      },
      // 加载更多
      loadMore () {
        this.getItineraries(this.page)
      },
      // 更新分页
      refreshPage () {
        this.page += 1
      }
    }
  }
</script>

<style scope lang="less">
  .itineraries{
    height:100%;
    box-size:border-box;
    width:100%;
    .main{
      width:100%;
      margin:0 auto;
      .cart{
        width:100%;
        color:#fff;
        position: relative;
        .cart-content{
          width:80%;
          margin:15px auto;
        }
        .col-sm-4{
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .itineraries{
          padding:0;
          width:100%;
          height:100%;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          .img_wrapper{
            width:100%;
            height:auto;
            display: block;
            transition: all .3s;
          }
          .itineraries-content{
            width:100%;
            height:100%;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            text-align: center;
            background: rgba(235,129,124,.8);
            display: none;
            h3{
              margin-top:60px;
            }
            p{
              margin-top:45px;
              width:80%;
              margin:0 auto;
            }
          }
          &:hover{
            .deal-content{
              display: block;
            }
            .img_wrapper{
              // width:120%;
              // height:120%;
            }
          }
        }

      }
    }
  }
  .load-more {
    text-align: center;
    border: 1px solid #999;
    border-radius: 5px;
    margin: 15px 0;
    padding: 15px;
    color: #999;
    cursor: pointer;
  }
</style>