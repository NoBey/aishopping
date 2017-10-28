<template>
  <div class="deals">
    <navigation></navigation>
    <div class="main">
      <notice></notice>
      <div class="cart" >
        <div class="row cart-content">
          <div class="col-sm-4" v-for="deal in deals" :key="deal.id" @click="toDetail(deal.id)">
            <div class="deal">
              <img :src="deal.image" class="img_wrapper">
              <div class="deal-content">
                <h3>{{deal.name}}</h3>
                <p>{{deal.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="morebtn" class="row">
        <div class="col-sm-12">
          <div class="load-more" @click="loadMore">
            加载更多
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
        deals: [],
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
      this.getDeals(this.page)
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'DealsDetail', query: {id: id}})
      },
      async getDeals (page) {
        let res = await API.getDeals(page)
        console.log(res)
        this.deals.push(...res.data.data)
        if( res.data.current_page == res.data.last_page) {
          this.morebtn = false
        }
        this.refreshPage()
      },
      // 加载更多
      loadMore () {
        this.getDeals(this.page)
      },
      // 更新分页
      refreshPage () {
        this.page++
      }
    }
  }
</script>
<style scope lang="less">
  .deals{
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
        .deal{
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
          .deal-content{
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
