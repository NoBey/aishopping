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
                <div class="vertical-center">
                  <h3>{{deal.name}}</h3>
                  <p>{{deal.description}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-loading="loading"></p>
      <p v-if="isBottom" class="is-bottom">到底了</p>
      <foot></foot>
    </div>
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
        deals: [],
        page: 1,
        isBottom: false,
        //保证window.onscroll在bottomHeight() < 120时，不会重复调用this.getDeals(this.page)
        one:false
      }
    },
    components: {
      Navigation,
      Notice,
      Foot
    },
    mounted (){
      window.onscroll = async() => {
        // console.log(bottomHeight())
        if( bottomHeight() < 120 ){
          if( !this.one ) return
          this.one = false
          this.loading = true
          await this.getDeals(this.page)
        }
      }
    },
    created () {
      this.getDeals(this.page)
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'DealsDetail', query: {id: id}})
      },
      async getDeals (page) {
        if( this.isBottom == true ) return
        let res = await API.getDeals(page)
        console.log(res)
        this.deals.push(...res.data.data)
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
          padding: 10px;
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
            border: none;
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
            .vertical-center{
            position:absolute;
            width: 100%;
            left:50%;    
            top:50%;
            -webkit-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
              h3{
                padding: 0 5%;
                line-height: 2rem;
                font-size: 1.1rem;
              }
              p{
                width:80%;
                margin:0 auto;
                font-size:1rem;
                line-height: 1.6rem;
                margin-bottom: 2rem;
                word-wrap:break-word;
                color: #fff;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                overflow: hidden;
              }
            }
          }
          &:hover{
            .deal-content{
              display: block;
              background: rgba(242,177,171,.8);
            }
            .img_wrapper{
              transform: scale(1.2);
            }
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
