<template>
  <div class="find">
    <navigation></navigation>
    <div class="main">
      <div class="notice">
        <div class="notice-content">
          <h4>独家折扣</h4>
          <p>下载爱shopping APP，享受妒忌折扣信息，提前退税，扫码积分换取好礼，更有优惠，路线信息请下载爱shopping APP。</p>
        </div>
      </div>
      <div class="cart">
        <h4>
          <span>所有发现</span>
          <span>美食</span>
          <span>购物</span>
          <span>旅游</span>
          <span>文化</span>
          <span>社会</span>
          <span>Tips</span>
        </h4>
      </div>
      <div  class="content">
        <div class="container">
          <div class="find-wrap">
            <div class='find-li'  v-for="discover in discovers" @click="toDetail(discover.id)">
              <div class="img_wrapper">
                <img :src="discover.thumbnail" alt="">
              </div>
              <div class="item-content">
                <h5>{{ discover.name }}</h5>
                <h3>
                  {{ discover.description }}
                </h3>
              </div>
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
        discovers: [],
        page: 1,
        morebtn: true
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getDiscovers()
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'FindDetail', query: {id: id}})
      },
      getDiscovers (page) {
        API.getDiscovers(page)
        .then(res => {
          if (res.data.data.length <= 0) {
            this.morebtn = false
          }
          this.discovers.push(...res.data.data)
          this.refreshPage()
        })
      },
      // 加载更多
      loadMore () {
        this.getDiscovers(this.page)
      },
      // 更新分页
      refreshPage () {
        this.page += 1
      }
    }
  }
</script>
<style scope lang="less">
  .find{
    height:100%;
    box-size:border-box;
    width:100%;
    .main{
      margin-top:108px;
      width:100%;
      .notice{
        width:100%;
        background:#F8786B;
        .notice-content{
          width:80%;
          margin:0 auto;
          color:#fff;
          h4{
            font-size:1.05rem;
            font-weight: 500;
            padding-top:1.3rem;
            margin-bottom:1.1rem;
          }
          p{
            font-size:.9rem;
            padding-bottom: 1rem;
          }
        }
      }
      .cart{
        width:100%;
        h4{
          width:80%;
          margin:.5rem auto;
          color:#333;
          font-size:1rem;
          span{
            display: inline-block;
            padding:5px 0;
            margin-right:3.5rem;
          }
        }
      }
      .content{
        width:100%;
        margin-top:1rem;
        .container{
          width:80%;
          margin:.5rem auto;
          .col-sm-4{
            height:460px;
            position:relative;
            margin-bottom:1rem;
            .img_wrapper{
              width:310px;
              height: 460px;
              overflow: hidden;
              img{
                width:310px;
                height: 460px;
                transition: all .3s;
              }

            }
            & .item-content{
              position:absolute;
              bottom:1rem;
              left:50%;
              /*padding:1.9rem 1rem;*/
              width:260px;
              transform: translateX(-50%);
              background:#fff;
              border:1px solid transparent;
              text-align: center;
              h5{
                font-size:.9rem;
                letter-spacing:.5rem;
              }
              h3{
                font-size:1.3rem;
                line-height: 1.8rem;
                letter-spacing: .01rem;
                font-family:"STKaiti,KaiTi";
              }

            }
            &:hover{
              img{
                transform: scale(1.1);
                width:310px;
                height: 460px;
                overflow: hidden;
              }
              .item-content{
                border-color:#000;

              }
              h3{
                text-decoration: underline #FFA3A3;
              }
            }
          }
        }

      }

    }
  }
  .find-wrap{
    display: flex;
    justify-content: center;


  }
  .find-li{
  width: 30%;
  img{
    width:310px;
    height: 460px;
    transition: all .3s;
  }
   .item-content{
    position:absolute;
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
