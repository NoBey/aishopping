<template>
  <div class="mall">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="main_content">
        <h3>商城</h3>
      </div>
      <div class="items">
        <div class="row">
          <div class="col-sm-3" v-for="shop in shops" :key="shop.id" @click="toDetail(shop.id)">
            <div class="img_wrapper">
              <img :src="shop.image" alt="" width="250" height="250">
              <div class="descript">{{shop.brand.name}}</div>
            </div>
            <h3>{{shop.name}} </h3>
            <span class="price"> €{{shop.price}} </span>
          </div>
        </div>
      </div>
    </div>
    <p v-loading="loading"></p>
    <p v-if="isBottom" class="is-bottom">到底了</p>
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
        loading: false,
        shops: [],
        page: 1,
        isBottom: false,
        //保证window.onscroll在bottomHeight() < 120时，不会重复调用this.getItineraries(this.page)
        one:false
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
    mounted (){
      window.onscroll = () => {
        // console.log(bottomHeight())
        if( bottomHeight() < 120 ){
          if( !this.one ) return
          this.one = false
          this.loading = true
          this.getShops(this.page)
        }
      }
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'MallDetail', query: {id: id}})
      },
      async getShops (page) {
        let res = await API.getShops(page)
        console.log(res)
        this.shops.push(...res.data.data)
        this.loading = false
        if( res.data.current_page == res.data.last_page) {
          this.isBottom = true
          //清除滚动事件监听
          window.onscroll = null
        }
        this.refreshPage()
        //当此加载事件完毕
        this.one = true
      },
      refreshPage () {
        this.page ++
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
  .is-bottom {
    text-align: center;
    margin: 15px 0;
    padding: 15px;
    color: #999;
  }
</style>
