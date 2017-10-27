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
      <div class="total">
        <router-link :to="{name:'Product'}">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="23px" height="28px" viewBox="8.3 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" >
            <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
            <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
            <text x="58.5" y="77" dy=".65em" text-anchor="middle" class="quantity" data-hook="cart-widget-items-count">0</text>
          </svg>
        </router-link>
      </div>

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
