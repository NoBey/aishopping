<template>
  <div class="dealdetail">
    <navigation></navigation>
    <div class="notice">
      <div class="notice-content">
        <h4>独家折扣</h4>
        <p>下载爱shopping APP，享受妒忌折扣信息，提前退税，扫码积分换取好礼，更有优惠，路线信息请下载爱shopping APP。</p>
      </div>
    </div>
    <div class="main">
      <div class="deal-item">
        <img :src="deal.image" width="100%" height="230">
        <h4>{{deal.name}}</h4>
        <h6>{{deal.description}}</h6>
        <p><span>发表时间：{{deal.created_at}}</span> <span>更新时间：{{deal.updated_at}}</span><span>分享数：{{deal.enable}}</span></p>
      </div>
      <div class="content" v-html="deal.content">
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
        deal: {},
        id: this.$route.query.id
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getDeal(this.id)
    },
    methods: {
      getDeal (id) {
        API.getDeal(id)
          .then(res => {
            console.log(res)
            this.deal = res.data
            console.log(this.deal)
          })
      }
    }
  }
</script>
<style scope lang="less">
  .dealdetail{
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
    .main{
      margin-top:10px;
      width:100%;
      .deal-item{
        width:80%;
        margin:0 auto;
        text-align: center;
        h4{
          padding:15px 0;
        }
      }
      .cart{
        width:100%;
        .author {
          width: 80%;
          margin: 2rem auto;
          color: #333;
          font-size: 1rem;
          position: relative;
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
    }
  }
</style>
