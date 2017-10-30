<template>
  <div class="main">
    <!--轮播图组件start-->
    <banner></banner>
    <!--轮播图组件start-->
    <!--发现-->
    <div class="find" v-if="this.discovers.length > 3">
      <div class="row">
        <div class="col-sm-4">
          <div class="item">
            <img :src="discovers[0].thumbnail"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{discovers[0].name}}</h3>
                <div class="line-icon"></div>
                <p>{{discovers[0].description}}</p>
                <a @click="toFDetail(discovers[0].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(discovers[0].name,'find',discovers[0].id)" src="../../layout/img/fly.png" alt="" height="22" width="22"> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item-top">
            <img :src="discovers[1].thumbnail"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{discovers[1].name}}</h3>
                <div class="line-icon"></div>
                <p>{{discovers[1].description}}</p>
                <a @click="toFDetail(discovers[1].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img @click="twitter(discovers[1].name,'find',discovers[1].id)" src="../../layout/img/fly.png" alt="" height="22" width="22"> 
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="discovers[2]">
            <img :src="discovers[2].thumbnail"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{discovers[2].name}}</h3>
                <div class="line-icon"></div>
                <p>{{discovers[2].description}}</p>
                <a @click="toFDetail(discovers[2].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(discovers[2].name,'find',discovers[2].id)" src="../../layout/img/fly.png" alt="" height="22" width="22"> 
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <router-link to="/find">
            <div class="item header-f">
              发现
            </div>
          </router-link>
          <div class="item-r" v-if="discovers[3]">
            <img :src="discovers[3].thumbnail" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{discovers[3].name}}</h3>
                <div class="line-icon"></div>
                <p>{{discovers[3].description}}</p>
                <a @click="toFDetail(discovers[3].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(discovers[3].name,'find',discovers[3].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">          
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--线路-->
    <div class="find" v-if="this.itineraries.length > 3">
      <div class="row">
        <div class="col-sm-4 ">
          <router-link to="/find">
            <div class="item header-f">
              线路
            </div>
          </router-link>
          <div class="item-r">
            <img :src="itineraries[0].image" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{itineraries[0].name}}</h3>
                <div class="line-icon"></div>
                <p>{{itineraries[0].description}}</p>
                <a @click="toRDetail(itineraries[0].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(itineraries[0].name,'itineraries',itineraries[0].id)" src="../../layout/img/fly.png" alt="" height="22" width="22"> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4" v-if="itineraries[1]">
          <div class="item">
            <img :src="itineraries[1].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{itineraries[1].name}}</h3>
                <div class="line-icon"></div>
                <p>{{itineraries[1].description}}</p>
                <a @click="toFDetail(itineraries[1].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(itineraries[1].name,'itineraries',itineraries[1].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 "v-if="itineraries[2]">
          <div class="item-top">
            <img :src="itineraries[2].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{itineraries[2].name}}</h3>
                <div class="line-icon"></div>
                <p>{{itineraries[2].description}}</p>
                <a @click="toRDetail(itineraries[2].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(itineraries[2].name,'itineraries',itineraries[2].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="itineraries[3]">
            <img :src="itineraries[3].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{itineraries[3].name}}</h3>
                <div class="line-icon"></div>
                <p>{{itineraries[3].description}}</p>
                <a @click="toRDetail(itineraries[3].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(itineraries[3].name,'itineraries',itineraries[3].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌-->
    <div class="find" v-if="this.brands.length > 3">
      <div class="row">
        <div class="col-sm-4 ">
          <router-link to="/brands">
            <div class="item header-f">
              品牌
            </div>
          </router-link>
          <div class="item-r">
            <!-- <img :src="brands[0].logo" class="bg"> -->
            <img :src="brands[0].logo" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{brands[0].name}}</h3>
                <div class="line-icon"></div>
                <p>{{brands[0].description}}</p>
                <a @click="toBDetail(brands[0].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(brands[0].name,'brands',brands[0].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="item" v-if="brands[1]">
            <img :src="brands[1].logo"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{brands[1].name}}</h3>
                <div class="line-icon"></div>
                <p>{{brands[1].description}}</p>
                <a @click="toBDetail(brands[1].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(brands[1].name,'brands',brands[1].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item-top" v-if="brands[2]">
            <img :src="brands[2].logo"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{brands[2].name}}</h3>
                <div class="line-icon"></div>
                <p>{{brands[2].description}}</p>
                <a @click="toBDetail(brands[2].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(brands[2].name,'brands',brands[2].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="brands[3]">
            <img :src="brands[3].logo"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{brands[3].name}}</h3>
                <div class="line-icon"></div>
                <p>{{brands[3].description}}</p>
                <a @click="toBDetail(brands[3].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(brands[3].name,'brands',brands[3].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--福利-->
    <div class="find" v-if="this.deals.length > 3">
      <div class="row">
        <div class="col-sm-4">
          <div class="item">
            <img :src="deals[0].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{deals[0].name}}</h3>
                <div class="line-icon"></div>
                <p>{{deals[0].description}}</p>
                <a @click="toFDetail(deals[0].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(deals[0].name,'deals',deals[0].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item-top" v-if="deals[1]">
            <img :src="deals[1].image" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{deals[1].name}}</h3>
                <div class="line-icon"></div>
                <p>{{deals[1].description}}</p>
                <a @click="toDDetail(deals[1].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(deals[1].name,'deals',deals[1].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="deals[2]">
            <img :src="deals[2].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{deals[2].name}}</h3>
                <div class="line-icon"></div>
                <p>{{deals[2].description}}</p>
                <a @click="toDDetail(deals[2].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(deals[2].name,'deals',deals[2].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <router-link to="/deals">
            <div class="item header-f">
              福利
            </div>
          </router-link>
          <div class="item-r" v-if="deals[3]">
            <img :src="deals[3].image" class="bg">
            <div class="item-content">
              <div class="vertical-center"> 
                <h3>{{deals[3].name}}</h3>
                <div class="line-icon"></div>
                <p>{{deals[3].description}}</p>
                <a @click="toDDetail(deals[3].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(deals[3].name,'deals',deals[3].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商城-->
    <div class="find" v-if="this.shops.length > 3">
      <div class="row">
        <div class="col-sm-4 ">
          <router-link to="/shops">
            <div class="item header-f">
              商城
            </div>
          </router-link>
          <div class="item-r">
            <img :src="shops[0].image" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{shops[0].name}}</h3>
                <div class="line-icon"></div>
                <p>{{shops[0].description}}</p>
                <a @click="toSDetail(shops[0].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(shops[0].name,'mall',shops[0].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="item" v-if="shops[1]">
            <img :src="shops[1].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{shops[1].name}}</h3>
                <div class="line-icon"></div>
                <p>{{shops[1].description}}</p>
                <a @click="toSDetail(shops[1].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(shops[1].name,'mall',shops[1].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="item-top" v-if="shops[2]">
            <img :src="shops[2].image" class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{shops[2].name}}</h3>
                <div class="line-icon"></div>
                <p>{{shops[2].description}}</p>
                <a @click="toSDetail(shops[2].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(shops[2].name,'mall',shops[2].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>
              </div>
            </div>
          </div>
          <div class="item-bottom" v-if="shops[3]">
            <img :src="shops[3].image"  class="bg">
            <div class="item-content">
              <div class="vertical-center">
                <h3>{{shops[3].name}}</h3>
                <div class="line-icon"></div>
                <p>{{shops[3].description}}</p>
                <a @click="toSDetail(shops[3].id)">​阅读全文</a>
                <div class="item-footer">
                  <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                  <img @click="twitter(shops[3].name,'mall',shops[3].id)" src="../../layout/img/fly.png" alt="" height="22" width="22">
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from '@/api'
import Banner from './Banner'

export default {
  data () {
    return {
      discovers: [],
      itineraries: [],
      brands: [],
      deals: [],
      shops: [],
      morebtn: true
    }
  },
  components: {
    Banner
  },
  created () {
    this.getDiscovers()
    this.getItineraries()
    this.getBrands()
    this.getDeals()
    this.getShops()
  },
  methods: {
    async getDiscovers () {
      const res = await API.getDiscovers()
      console.log('discovers',res)
      this.discovers = res.data.data
    },
    async getItineraries () {
      const res = await API.getItineraries()
      console.log('itineraries',res)
      this.itineraries = res.data.data
    },
    async getBrands () {
      const res = await API.getBrands()
      console.log('brands',res)
      this.brands = res.data.data
    },
    async getDeals () {
      const res = await API.getDeals()
      console.log('deals',res)
      this.deals = res.data.data
    },
    async getShops () {
      const res = await API.getShops()
      console.log('shops',res)
      this.shops = res.data
    },
    twitter(name, type, id){
      window.open('http://twitter.com/home/?status=' + encodeURIComponent(name) + ' ' + encodeURIComponent(location.host + type + '/detail?id=' + id) )
    },
    toFDetail (id) {
      this.$router.push({name: 'FindDetail', query: {id: id}})
    },
    toRDetail (id) {
      this.$router.push({name: 'ItinerariesDetail', query: {id: id}})
    },
    toDDetail (id) {
      this.$router.push({name: 'DealsDetail', query: {id: id}})
    },
    toSDetail (id) {
      this.$router.push({name: 'MallDetail', query: {id: id}})
    },
    toBDetail (id) {
      this.$router.push({name: 'BrandsDetail', query: {id: id}})
    }
  }
}
</script>

<style scoped lang="less">
.main {
  width:100%;
  margin-top:108px;
  background:#fff;
  .banner{
    margin-bottom:3.5rem;
  }
  .find{
    width:90%;
    margin:20px auto;
    height:810px;
    margin-bottom:1rem;
    .row{
      width:100%;
      height:100%;
      .col-sm-4{
        height:100%;
      }
    }
    .item{
      text-align: center;
      color:#fff;
      font-family: "avenir-lt-w01_85-heavy1475544,sans-serif";
      width:100%;
      height:100%;
      position: relative;
      overflow:hidden;
      img.bg{
        display: block;
        transition: all .3s;
        height:100%;
        width:100%;
        border: none;
      }
      .item-content{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        z-index:5;
        display: none;
        .vertical-center{
          position:absolute;
          width: 100%;
          left:50%;    
          top:50%;
          -webkit-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -ms-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
          h3{
            padding: 0 10%;
            line-height: 2rem;
            font-size: 1.1rem;
          }
          .line-icon{
            width:4rem;
            height:4px;
            margin: 1rem auto 3rem;
            background:#fff;
          }
          p{
            width:70%;
            margin:0 auto;
            font-size:1rem;
            line-height: 1.6rem;
            margin-bottom:4rem;
            word-wrap:break-word;
            color: #fff;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 14;
            overflow: hidden;
          }
          a{
            text-decoration: underline;
            color:#fff;
            margin-top:3rem;
          }
          .item-footer{
            margin-top:2rem;
            img{
              display: inline-block;
              margin:5px;
            }
          }
        }
      }
      &:hover {
        img{
          transform: scale(1.2);
        }
        .item-content{
          background: rgba(242,177,171,.8);
          display: block;
        }
      }
    }
    .item-top,.item-bottom{
      text-align: center;
      color:#fff;
      font-family: "avenir-lt-w01_85-heavy1475544,sans-serif";
      width:100%;
      height:48%;
      position: relative;
      overflow:hidden;
      img.bg{
        display: block;
        transition: all .3s;
        height:100%;
        width:100%;
        border: none;
      }
      .item-content{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        z-index:5;
        display: none;
        .vertical-center{
          position:absolute;
          width: 100%;
          left:50%;    
          top:50%;
          -webkit-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -ms-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
          h3{
            padding: 0 10%;
            line-height: 2rem;
            font-size: 1.1rem;
          }
          .line-icon{
            width:4rem;
            height:4px;
            margin: .4rem auto 1rem;
            background:#fff;
          }
          p{
            width:70%;
            margin:0 auto;
            font-size:1rem;
            line-height: 1.6rem;
            margin-bottom: 2rem;
            word-wrap:break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
          a{
            text-decoration: underline;
            color:#fff;
          }
          .item-footer{
            margin-top:2rem;
            img{
              display: inline-block;
              margin:5px;
            }
          }
        }
      }
      &:hover {
        img{
          transform: scale(1.2);
        }
        .item-content{
          background: rgba(242,177,171,.8);
          display: block;
        }
      }
    }
    .item-bottom{
      margin-top:1.6rem;
    }
    .header-f{
      height:214px;
      background:#F8786B;
      text-align:center;
      line-height: 214px;
      font-size:3rem;
      font-weight: 700;
    }
    .item-r{
      text-align: center;
      margin-top:1.3rem;
      color:#fff;
      font-family: "avenir-lt-w01_85-heavy1475544,sans-serif";
      width:100%;
      height:70%;
      position: relative;
      overflow:hidden;
      img.bg{
        display: block;
        transition: all .3s;
        height:100%;
        width:100%;
        border: none;
      }
      .item-content{
        width:100%;
        height:100%;
        position: absolute;
        top:0;
        left:50%;
        transform: translateX(-50%);
        z-index:5;
        display: none;
        .vertical-center{
          position:absolute;
          width: 100%;
          left:50%;    
          top:50%;
          -webkit-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -ms-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
          h3{
            padding: 0 10%;
            line-height: 2rem;
            font-size: 1.1rem;
          }
          .line-icon{
            width:4rem;
            height:4px;
            margin: .4rem auto 1rem;
            background:#fff;
          }
          p{
            width:70%;
            margin:0 auto;
            font-size:1rem;
            line-height: 1.6rem;
            margin-bottom: 2rem;
            word-wrap:break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 9;
            overflow: hidden;
          }
          a{
            text-decoration: underline;
            color:#fff;
          }
          .item-footer{
            margin-top:2rem;
            img{
              display: inline-block;
              margin:5px;
            }
          }
        }
      }
      &:hover {
        img{
          transform: scale(1.2);
        }
        .item-content{
          background: rgba(242,177,171,.8);
          display: block;
        }
      }
    }
  }
}
</style>
