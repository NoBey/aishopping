<template>
  <div class="find">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="cart">
        <h4>
          <span>所有发现</span>
          <span v-for="item in categories" @click="toCate(item.id)">{{item.name}}</span>
        </h4>
      </div>
      <div  class="content">
        <div class="container">
          <div class="row">
            <div class="col-sm-4" v-for="discover in discovers" @click="toDetail(discover.id)">
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
  import Notice from '../layout/Notice'
  import Foot from '../layout/Foot'

  export default {
    data () {
      return {
        discovers: [],
        categories: [],
        page: 1,
        morebtn: true
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
    methods: {
      toDetail (id) {
        this.$router.push({name: 'FindDetail', query: {id: id}})
      },
      toCate (id) {
        this.getCategoriesId(id)
      },
      getDiscovers (page) {
        API.getDiscovers(page)
        .then(res => {
          if (res.data.current_page === res.data.last_page) {
            this.morebtn = false
          }
          this.discovers.push(...res.data.data)
          this.refreshPage()
        })
      },
      getCategories () {
        API.getCategories()
          .then(res => {
            this.categories.push(...res.data)
          })
      },
      getCategoriesId (id) {
        API.getCategoriesId(id)
          .then(res => {
            console.log(res)
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
