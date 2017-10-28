<template>
  <div class="detail">
    <navigation></navigation>
    <div class="main">
      <div class="main_content">
        <p><router-link  :to="{name: 'Index'}">Accueil</router-link>/
          <router-link :to="{name: 'Mall'}">商城</router-link>/
          TAPIS</p>
      </div>
      <div class="row items">
        <div class="col-sm-6">
          <img :src="mainsrc" alt="" width="100%" height="330">
          <ul>
            <li class="item" v-for="gallery in shop.galleries" >
              <img :src="gallery.image" alt="" width="50" height="50" @click="toggleSrc(gallery.image)">
            </li>
          </ul>
          <p>Résumé de l'article. Décrivez votre article à vos clients afin d'en donner un aperçu avant l'achat.</p>
        </div>
        <div class="col-sm-6 item-r">
            <h3>{{shop.name}}</h3>
            <p>UGS : 0006</p>
            <p class="price">€{{shop.price}}</p>
            <p>Quantité</p>
            <input type="number" class="form-control" value="0">
            <input type="submit" class="form-control btn" value="AJOUTER AU PANIER">
          <ul>
            <li>
              <h3>{{shop.brand.name}}</h3>
              <p>{{shop.description}}</p>
            </li>
          </ul>
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
        shop: {},
        mainsrc: ''
      }
    },
    components: {
      Navigation,
      Foot
    },
    created () {
      this.getShop(this.id)
    },
    methods: {
      getShop (id) {
        API.getShop(id)
          .then(res => {
            console.log(res)
            this.shop = res.data
            this.mainsrc = res.data.image
          })
      },
      toggleSrc (src) {
        console.log(src)
        console.log(this.mainsrc)
        this.mainsrc = src
        console.log(this.mainsrc)
      }
    }
  }
</script>
<style scope lang="less">
  .detail{
    height:100%;
    width:100%;
    .main{
      margin-top:108px;
      width:100%;
      background: #2d2d2d;
      .main_content{
        width:80%;
        margin:0 auto;

        p{
          color:#ccc;
          padding:3rem 0;
          a{
            color:#fff;
            padding-right:.3rem;
          }
        }
      }
      .items{
      width:80%;
      margin:0 auto;
        ul{
          width:100%;
          overflow:hidden;
          list-style:none;
          padding:1.5rem 0;
          li{
            float:left;
            img{
              display: block;
              margin-right:.5rem;

            }
          }
        }
        p{
          color:#fff;
        }
        .item-r{
          h3{
            color:#575757;
          }
          p{
            color:#c7c7c7;
          }
          input[type="number"]{
            width:65px;
            padding:.8rem 2px;
          }
          input.btn{
            margin-top:2rem;
            background:#607F9c;
          }
        }
    }
    }
  }
</style>
