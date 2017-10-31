<template>
  <div class="finddetail">
    <navigation></navigation>
    <notice></notice>
    <div class="cart">
      <h4>
        <span>所有发现</span>
        <el-tag type="danger" 
          v-for="item in categories" 
          :key="item.id" 
          @click="discoversByTag(item.id)">
          {{item.name}}
        </el-tag>
      </h4>
    </div>
    <div class="main">
      <div class="cart">
          <div class="author">
            <div class="img-wrapper">
              <img :src="discover.thumbnail" alt="" width="100%" height="100%">
            </div>
            <h3>{{discover.name}}</h3>
            <h4>{{discover.description}}</h4>
            <h5>{{discover.tag.name}}</h5>
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
              <el-input
                type="textarea"
                :autosize="{ minRows: 6 }"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
              <el-button type="danger" plain>确认</el-button>
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
  import Notice from '../layout/Notice'
  import API from '@/api'

  export default {
    data () {
      return {
        id: this.$route.query.id,
        discover: {},
        categories: [],
        textarea:''
      }
    },
    components: {
      Navigation,
      Foot,
      Notice
    },
    created () {
      this.getDiscover(this.id)
      this.getCategories()
    },
    methods: {
      async getDiscover (id) {
        let res = await API.getDiscover(id)
        this.discover = res.data
        console.log(res)
      },
      discoversByTag (id) {
        this.$router.push('/find?tag=' + id)
      },
      async getCategories () {
        let res = await API.getCategories()
        this.categories = res.data
      }
    }
  }
</script>
<style scope lang="less">
  .finddetail{
    height:100%;
    box-sizing:border-box;
    width:100%;
    .cart{
      width:100%;
      h4{
        width:80%;
        margin:.5rem auto;
        color:#333;
        font-size:1rem;
        span{
          margin-right:1.5rem;
          margin-top: 10px;
          cursor: pointer;
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
            margin-bottom:15px;
            width: 60%;
            margin: 0 auto;
          }
          h4 {
            padding-top: 1rem;
          }
          h5 {
            padding: 1rem 0;
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
        width:70%;
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
            margin: 15px 0;
          }
        }
      }
    }
  }
</style>
