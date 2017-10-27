<template>
  <div class="finddetail">
    <navigation></navigation>
    <div class="main">
      <div class="notice">
        <h1>{{discover.name}}</h1>
      </div>
      <div class="cart">
          <div class="author">
            <div class="row">
              <div class="col-sm-4 col-xs-4">
                <img :src="discover.thumbnail" alt="" width="100" height="100">
              </div>
              <div class="col-sm-8 col-xs-8">
                <h4>{{discover.name}}</h4>
                <h6>{{discover.description}}</h6>
                <p><span>发表时间：{{discover.created_at}}</span> <span>更新时间：{{discover.updated_at}}</span><span>分享数：{{discover.enable}}</span></p>
              </div>
            </div>
          </div>
          <div class="content" v-html="discover.content">
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
        discover: {}
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getDiscover(this.id)
    },
    methods: {
      getDiscover (id) {
        API.getDiscover(id)
        .then(res => {
          console.log(res.data)
          this.discover = res.data
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
