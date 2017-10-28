<template>
  <div class="navigation">
    <header>
      <img src="./img/logo.png" alt="logo.png" class="logo">
      <div class="menu" @click="show()">
        <span class="icon" v-if="!showmenu"></span>
        <span class="icon" v-if="!showmenu"></span>
        <span class="icon" v-if="!showmenu"></span>
        <span class="close" v-if="showmenu">X</span>
        <ul class="nav  small" v-if="showmenu">
          <li>
            <router-link :to="{name: 'Index'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Find'}">发现</router-link>
          </li>
          <li>
            <router-link :to="{name:'Brands'}">品牌</router-link>
          </li>
          <li>
            <router-link :to="{name:'Navigo'}">路线</router-link>
          </li>
          <li>
            <router-link :to="{name:'Deals'}">福利</router-link>
          </li>
          <li>
            <router-link :to="{name:'Mall'}">商城</router-link>
          </li>
        </ul>
      </div>

      <ul class="nav navbar big">
        <li>
          <router-link :to="{name: 'Index'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Find'}">Discovery</router-link>
        </li>
        <li>
          <router-link :to="{name:'Brands'}">Brand</router-link>
        </li>
        <li>
          <router-link :to="{name:'Navigo'}">Itinerary</router-link>
        </li>
        <li>
          <router-link :to="{name:'Deals'}">Good Deal</router-link>
        </li>
        <li>
          <router-link :to="{name:'Mall'}">Mall</router-link>
        </li>
    </ul>
    </header>
  </div>
</template>

<script>
// import API from '@/api'
export default {
  data () {
    return {
      showmenu: false
    }
  },
  created () {
  },
  methods: {
    show () {
      if (this.showmenu === false) {
        this.showmenu = true
      } else {
        this.showmenu = false
      }
    }
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.navigation {
  width:100%;
  height:108px;
  position: fixed;
  top:0;
  background:rgba(255,255,255,.8);
  z-index:999;
  header{
    width:980px;
    margin:0 auto;
    height:108px;
    line-height: 108px;
    padding: 0 30px;
    display: flex;
    background:transparent;
    position: relative;
    .logo{
      display: block;
      margin-top: 1.5rem;
      width:66px;
      height:66px;
      margin-right:35px;
    }
    .menu{
      display: none;
      position: absolute;
      bottom: 1rem;
      right:1rem;
      padding:5px;
      border:2px solid #000000;
      width:50px;
      height:50px;
      background: #fc6000;
      border-radius:5px;
      text-align:center;
      .icon{
        display:block;
        width:33px;
        height:2px;
        background: #000;
        margin:8px 0;
      }
      .close {
        display: block;
        margin: 0;
        margin-right: 10px;
        margin-top: 5px;
      }
    }
    ul.navbar {
      flex:1;
      li{
        a{
          text-decoration: none;
          color:#818181;
          &.router-link-exact-active.router-link-active{
            color:#F8786B;
          }
          &:hover{
            color:#F8786B;
          }
          & img{
            display: block;
            width:23px;
            height: 29px;
            margin:0;
          }
        }
      }
    }
    ul.small{
      position: absolute;
      background: #fc6000;
      top:45px;
      right:0;
      z-index:5;
      width:310px;
      border-bottom:1px solid #000;
      border-left:1px solid #000;
      border-right:1px solid #000;
      li{
        line-height: 3rem;
        height:3rem;
        width:100%;
        text-align:left;
        border-top:1px solid #000;
        a{
          font-size: 1rem;
          padding:5px 15px;
          white-space: nowrap;
          margin:0;
          color: rgba(45, 45, 45, 1);
        }
      }
    }
    a {
      margin-left:3rem;
      margin-top:.3rem;
      fill:#F8786B;
      text{
        fill:#fff;
        width:20px;
        height: 20px;
      }
    }
  }
}
@media(max-width:360px){
  .navigation  header{
    width:360px;
   .logo{
     margin:1rem auto;
    }
    ul.big{
      display: none;
    }
    .menu{
      display: block;
    }
    .total a{
      position: absolute;
      bottom:1.6rem;
      right:5rem;
      width:50px;
      height:50px;
      svg{
        width:50px;
        height:50px;
      }
    }
  }
}
  @media(min-width:360px)and(max-width: 760px){
    .navigation  header{
      width:360px;
      .logo{
        margin:1rem auto;
      }
      ul.big{
        display: none;
      }
      .menu{
        display: block;
      }
      .total a{
        position: absolute;
        bottom:1.6rem;
        right:5rem;
        width:50px;
        height:50px;
        svg{
          width:50px;
          height:50px;
        }
      }
    }
  }
</style>
