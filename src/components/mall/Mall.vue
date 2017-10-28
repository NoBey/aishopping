<template>
  <div class="mall">
    <navigation></navigation>
    <div class="main">
      <div class="main_content">
        <h3>商城</h3>
      </div>
      <div class="items">
        <div class="row">
          <div class="col-sm-3" v-for="shop in shops" @click="toDetail(shop.id)">
            <div class="img_wrapper">
              <img :src="shop.image" alt="" width="250" height="250">
              <div class="descript">{{shop.brand.name}}</div>
            </div>
            <h3>{{shop.name}} </h3>
            <span class="price"> €{{shop.price}} </span>
          </div>
        </div>
        <div class="row" v-if="morebtn">
          <div class="col-sm-12">
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
  import Foot from '../layout/Foot'

  export default {
    data () {
      return {
        shops: [],
        page: 1,
        morebtn: true
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getShops(this.page)
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'MallDetail', query: {id: id}})
      },
      getShops (page) {
        API.getShops(page)
          .then(res => {
            if (res.data.current_page === res.data.last_page) {
              this.morebtn = false
            }
            console.log(res.data)
            this.shops.push(...res.data.data)
            this.refreshPage()
          })
      },
      // 加载更多
      loadMore () {
        this.getShops(this.page)
      },
      refreshPage () {
        this.page += 1
      }
    }
  }
</script>
<style scope lang="less">
  .mall{
    height:100%;
    width:100%;
    .main{
      margin-top:108px;
      width:100%;
      .main_content{
        width:80%;
        margin:0 auto;
        h3{
          color:#FDAF7E;
          font-weight: 700;
          font-size: 3rem;
          padding:3rem;
        }
      }
      .items {
        padding:0;
         list-style: none;
         width:90%;
         margin:0 auto;
         overflow: hidden;
        margin-bottom: 2rem;
         .col-sm-3{
           position: relative;
           margin-bottom:2rem;
           .img_wrapper{
             position: relative;
             width:250px;
             height: 250px;
             overflow:hidden;
             img{
               transition:  all .3s;
             }
             .descript{
               width:100%;
               height:50px;
               line-height:50px;
               background: rgba(255, 255, 255, 0.75);
               position: absolute;
               bottom:0;
               text-align: center;
               display: none;
             }
           }

           &:hover{
             .img_wrapper{
               img {
                 transform: scale(1.1);
               }
               .descript{
                 display: block;
                 transition: all .3s;
               }
             }
           }
           h3{
             color:#c9c9c9;
             font-size: 1.2rem;
             font-weight: 400;
             padding-top:1rem;
           }
           span{
             font-size: .8rem;
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
