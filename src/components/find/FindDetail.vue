<template>
  <div class="finddetail">
    <navigation></navigation>
    <div class="notice">
      <div class="notice-content">
        <h4>独家折扣</h4>
        <p>下载爱shopping APP，享受妒忌折扣信息，提前退税，扫码积分换取好礼，更有优惠，路线信息请下载爱shopping APP。</p>
      </div>
    </div>
    <div class="cart">
      <h4>
        <span>所有发现</span>
        <span v-for="item in categories" @click="toCate(item.id)">{{item.name}}</span>
      </h4>
    </div>
    <div class="main">
      <div class="cart">
          <div class="author">
            <div class="img-wrapper">
              <img :src="discover.thumbnail" alt="" width="100%" height="100%">
            </div>
            <h4>{{discover.name}}</h4>
            <h6>{{discover.description}}</h6>
            <p><span>发表时间：{{discover.created_at}}</span> <span>更新时间：{{discover.updated_at}}</span><span>分享数：{{discover.enable}}</span></p>
          </div>
          <div class="content" v-html="discover.content">
          </div>
          <div class="text-right share">
            <div class="share-item">
              <a><img src="../layout/img/weixin.jpg" alt="" width="100%" height="100%"></a>
              <a><img src="../layout/img/weibo.jpg" alt="" width="100%" height="100%"></a>
            </div>
            <div class="message">
              <h5>留言</h5>
              <textarea name="message" id="message" cols="60" rows="5"></textarea>
              <button class="btn btn-lg">确认</button>
            </div>
          </div>
        </div>
      </div>
    <foot></foot>
  </div>
</template>
<script>
  import Navigation from '../layout/Navigation'
  import Foot from '../layout/Foot'
  import API from '@/api'

  export default {
    data () {
      return {
        id: this.$route.query.id,
        discover: {},
        categories: []
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getDiscover(this.id)
      this.getCategories()
    },
    methods: {
      getDiscover (id) {
        API.getDiscover(id)
        .then(res => {
          console.log(res.data)
          this.discover = res.data
        })
      },
      toCate (id) {
        this.getCategoriesId(id)
      },
      getCategories () {
        API.getCategories()
          .then(res => {
            console.log(res)
            this.categories.push(...res.data)
          })
      },
      getCategoriesId (id) {
        API.getCategoriesId(id)
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>
<style scope lang="less">
  .finddetail{
    height:100%;
    box-sizing:border-box;
    width:100%;
    .notice{
      margin-top:108px;
      width:100%;
      background:#F8786B;
      .notice-content{
        width:80%;
        margin:0 auto;
        color:#fff;
        padding-bottom: 1rem;
        h4{
          font-size:1.05rem;
          font-weight: 500;
          padding-top:1.3rem;
          margin-bottom:1.1rem;
        }
        p{
          font-size:.9rem;
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
          cursor:pointer;
          padding:5px 0;
          margin-right:3.5rem;
          &:hover{
            color:#F8786B;
          }
        }
      }
    }
    .main{
      margin-top:10px;
      width:100%;
      .cart{
        width:100%;
        text-align: center;
        .author {
          width: 80%;
          margin: 2rem auto;
          color: #333;
          font-size: 1rem;
          position: relative;
          .img-wrapper{
            width:100%;
            height:270px;
            margin-bottom:15px;
          }
          h6 {
            font-weight: 200;
          }
          p {
            font-size: .8rem;
            color: #ccc;
            span {
              display: inline-block;
              margin-right: 2rem;
            }
          }
        }
      }
      .content {
        width:80%;
        margin: 2rem auto;
        p {
          line-height: 1.4rem;
          text-indent: 2rem;
          word-spacing: .3rem;
        }
      }
      .share{
        width:80%;
        margin:0 auto;
        .share-item{
          width:60%;
          margin:0 auto;
          a{
            display: inline-block;
            width:30px;
            height:30px;
            margin:5px;
            img{
              display: block;
            }
          }
        }
        .message{
          width:60%;
          margin:0 auto;
          text-align: center;
          overflow: hidden;
          textarea{
            width:100%;
            margin-top:15px;
          }
          h5{
            text-align: left;
          }
          button{
            float: right;
            padding:5px 15px;
            border:1px solid #F8786B;
            margin:15px 0 15px 0;
            background: #ffffff;
          }
        }
      }
    }
  }
</style>
