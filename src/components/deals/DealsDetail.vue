<template>
  <div class="dealdetail">
    <navigation></navigation>
    <header>
      <h1>Galeries Lafayette 冬季特别礼遇</h1>
      <p>Galeries Lafayette是一个值得信赖的品牌，典雅尊贵，是身份的象征，您值得拥有！</p>
    </header>
    <div class="main">
      <ul class="items">
        <li>
          <div class="img_wrapper_0">
            <div class="descript">APERÇU RAPIDE</div>
            <span class="special">热门推荐</span>
          </div>
          <h3> TAPIS </h3>
          <span class="price"> €89.00 </span>
        </li>
        <li>
          <div class="img_wrapper_1">
            <div class="descript">APERÇU RAPIDE</div>
          </div>
          <h3> TAPIS </h3>
          <span class="price"> €89.00 </span>
        </li>
        <li>
          <div class="img_wrapper_2">
            <div class="descript">APERÇU RAPIDE</div>
          </div>
          <h3> TAPIS </h3>
          <span class="price"> €89.00 </span>
        </li>
        <li class="last">
          <div class="img_wrapper_3">
            <div class="descript">APERÇU RAPIDE</div>
          </div>
          <h3> TAPIS </h3>
          <span class="price"> €89.00 </span>
        </li>
      </ul>
      <ul>
        <li v-for=" item in  this.deal">{{item.name}}</li>
      </ul>
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
            this.deal = res.data.data
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
      width:100%;
      ul.items {
        padding:0;
        list-style: none;
        width:1066px;
        margin:0 auto;
        overflow: hidden;
        margin-bottom: 2rem;
        li{
          float:left;
          margin-right:22px;
          position: relative;
          &.last{
            margin-right: 0;
          }
          .img_wrapper_0,.img_wrapper_1,.img_wrapper_2,.img_wrapper_3{
            position: relative;
            width:250px;
            height: 250px;
            background: url("../mall/img/mall_01.png")no-repeat center center;
            .descript{
              width:100%;
              height:50px;
              line-height:50px;
              background: rgba(255, 255, 255, 0.75);
              position: absolute;
              bottom:0;
              text-align: center;
              display: none;
            }
            .special{
              display: block;
              color:#fff;
              font-size:.8rem;
              padding:10px 15px;
              position: absolute;
              top:0;
              left:0;
              background:rgba(230,0,0,.8);
            }
          }
          .img_wrapper_1{
            background: url("../mall/img/mall_02.png")no-repeat center center;
          }
          .img_wrapper_2{
            background: url("../mall/img/mall_01.png")no-repeat center center;
          }
          .img_wrapper_3{
            background: url("../mall/img/mall_02.png")no-repeat center center;
          }
          &:hover{
            .img_wrapper_0,.img_wrapper_3,.img_wrapper_2,.img_wrapper_1 {
              background-size: 120%;
              transition:  all .3s;
              .descript{
                display: block;
                transition: all .3s;
              }
            }
          }
          h3{
            color:#c9c9c9;
            font-size: 1.2rem;
            font-weight: 400;
            padding-top:1rem;
          }
          span{
            font-size: .8rem;
          }
        }
      }
    }
  }
</style>
