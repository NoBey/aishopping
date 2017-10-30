<template>
  <div class="find">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="cart">
        <h4>
          <span>所有发现</span>
          <span v-for="tag in tags" :key="tag" @click="discoversByTag(tag)">{{tag}}</span>
        </h4>
      </div>
      <div  class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-4" v-for="discover in discovers" :key="discover.id" @click="toDetail(discover.id)">
              <div class="img_wrapper">
                <img :src="discovers.thumbnail" alt="">
              </div>
              <div class="item-content">
                <h5>{{ discover.name }}</h5>
                <h3>
                  {{ discover.description }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p v-if="isBottom" class="is-bottom">到底了</p>
    <foot></foot>
  </div>
</template>
<script>
  import API from '@/api'
  import Navigation from '../layout/Navigation'
  import Notice from '../layout/Notice'
  import Foot from '../layout/Foot'

  export default {
    data () {
      return {
        discoversShow:[],
        discovers: [],
        tags: {},
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
    },
    mounted (){
      window.onscroll = () => {
        // console.log(bottomHeight())
        if( bottomHeight() < 120 ){
          if( !this.one ) return
          this.one = false
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
        if( res.data.current_page == res.data.last_page) {
          this.isBottom = true
          //清除滚动事件监听
          window.onscroll = null
        }
        this.refreshPage()
        //当此加载事件完毕
        this.one = true
        this.tagFormate()
      },
      async getCategories () {
        let res = await API.getCategories()
        this.categories.push(...res.data)
      },
      async getCategory (id) {
        let res = await API.getCategory(id)
        console.log(res)
      },
      tagFormate(){
        this.discovers.forEach( item =>{
          this.tags[item.tag.id] = item.tag.name
        })
      },
      // 更新分页
      refreshPage () {
        this.page++
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
              img{
                width:100%;
                height: 460px;
                transition: all .3s;
              }

            }
            & .item-content{
              position:absolute;
              bottom:1rem;
              left:50%;
              padding:1.9rem 1rem;
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
  .is-bottom {
    text-align: center;
    margin: 15px 0;
    padding: 15px;
    color: #999;
  }
</style>
