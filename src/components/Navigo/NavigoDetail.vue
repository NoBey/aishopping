<template>
  <div class="dealdetail">
    <navigation></navigation>
    <div class="main">
      <div class="notice">
        <h1>{{navigo.name}}</h1>
      </div>
      <div class="cart">
        <div class="author">
          <div class="row">
            <div class="col-sm-4 col-xs-4">
              <img :src="navigo.image" alt="" width="100" height="100">
            </div>
            <div class="col-sm-8 col-xs-8">
              <h4>{{navigo.name}}</h4>
              <h6>{{navigo.description}}</h6>
              <p><span>发表时间：{{navigo.created_at}}</span> <span>更新时间：{{navigo.updated_at}}</span><span>分享数：{{navigo.enable}}</span></p>
            </div>
          </div>
        </div>
        <div class="content" v-html="navigo.content">
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
        id: this.$route.query.id,
        navigo: {}
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getNavigo(this.id)
    },
    methods: {
      getNavigo (id) {
        API.getNavigo(id)
          .then(res => {
            console.log(res)
            this.navigo = res.data
          })
      }
    }
  }
</script>
<style scope lang="less">
  .dealdetail{
    width:100%;
    header{
      width:100%;
      height:108px;
      background:rgba(233,244,255,.8);
      margin-top:108px;
      h1{
        width:980px;
        margin:0 auto;
        height:65px;
        line-height: 65px;
        text-align: center;
        color:#f50;
        font-weight:500;
      }
      p{
        width:980px;
        margin:0 auto;
        font-size: .8rem;
        text-align:right;
      }
    }
    .main{
      margin-top:108px;
      width:100%;
      .notice{
        width:100%;
        h1{
          width:80%;
          margin:0 auto;
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
