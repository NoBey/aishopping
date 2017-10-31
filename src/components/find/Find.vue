<template>
  <div class="find">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="cart">
        <h4>
          <span>所有发现</span>
          <el-tag type="danger" v-for="item in categories" :key="item.id" @click="discoversByTag(item.id)">{{item.name}}</el-tag>
        </h4>
      </div>
      <div  class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-4" v-for="discover in discovers" :key="discover.id" @click="toDetail(discover.id)">
              <div class="img_wrapper">
                <img :src="discover.thumbnail" alt="">
              </div>
              <div class="item-content">
                <el-card class="box-card">
                  <h5>{{ discover.tag.name }}</h5>
                  <h3>
                    {{ discover.name }}
                  </h3> 
                </el-card>
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
</template>
<script>
  import API from '@/api'
  import Navigation from '../layout/Navigation'
  import Notice from '../layout/Notice'
  import Foot from '../layout/Foot'
  import bottomHeight from '@/util/bottomHeight'

  export default {
    data () {
      return {
        loading: false,
        discovers: [],
        categories: [],
        page: 1,
        isBottom: false,
        one:false
      }
    },
    components: {
      Navigation,
      Notice,
      Foot
    },
    created () {
      this.getDiscovers(this.page)
      this.getCategories()
    },
    mounted (){
      window.onscroll = () => {
        // console.log(bottomHeight())
        if( bottomHeight() < 120 ){
          if( !this.one ) return
          this.one = false
          this.loading = true
          this.getDiscovers(this.page)
        }
      }
    },
    methods: {
      toDetail (id) {
        this.$router.push({name: 'FindDetail', query: {id: id}})
      },
      async getDiscovers (page) {
        let res = await API.getDiscovers(page)
        console.log(res)
        this.discovers.push(...res.data.data)
        this.loading = false
        if( res.data.current_page == res.data.last_page) {
          this.isBottom = true
          //清除滚动事件监听
          window.onscroll = null
          return
        }
        this.refreshPage()
        //当此加载完毕
        this.one = true
      },
      async getCategories () {
        let res = await API.getCategories()
        this.categories = res.data
      },
      // 更新分页
      refreshPage () {
        this.page++
      },
      async discoversByTag(id){

      }
    }
  }
</script>
<style scope lang="less">
  .find{
    height:100%;
    width:100%;
    .main{
      margin-top:20px;
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
              width:100%;
              height: 460px;
              overflow: hidden;
              border: 1px solid #eee;
              img{
                width:100%;
                height: 460px;
                transition: all .3s;
              }

            }
            & .item-content{
              position:absolute;
              bottom:0rem;
              width: 86%;
              left: 7%;
              padding:1.9rem 1rem;
              text-align: center;
              h5{
                font-size:.9rem;
                letter-spacing:.5rem;
                color: #aaa;
                padding-bottom: 20px;
              }
              h3{
                font-size:1.3rem;
                height: 3.6rem;
                line-height: 1.8rem;
                letter-spacing: .01rem;
                font-family:"STKaiti,KaiTi";
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
              }

            }
            &:hover{
              img{
                transform: scale(1.1);
                overflow: hidden;
              }
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
