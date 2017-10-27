<template>
  <div class="main">
    <!--发现-->
    <div class="find">
      <div class="row">
        <div class="col-sm-4 left item l-item">
          <div class="item-content">
            <h3>{{discovers.data[0].name}}</h3>
            <div class="line-icon"></div>
            <p>{{discovers.data[0].description}}</p>
            <a>​阅读全文</a>
            <div class="item-footer">
              <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
              <img src="../../layout/img/fly.png" alt="" height="22" width="22">
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item item-top">
            <div class="item-content">
              <h3>{{discovers.data[1].name}}</h3>
              <div class="line-icon"></div>
              <p>{{discovers.data[1].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
          <div class="item item-bottom">
            <div class="item-content">
              <h3>{{discovers.data[2].name}}</h3>
              <div class="line-icon"></div>
              <p>{{discovers.data[2].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item header-f">
            发现
          </div>
          <div class="r-c item">
            <div class="item-content">
              <h3>{{discovers.data[3].name}}</h3>
              <div class="line-icon"></div>
              <p>{{discovers.data[3].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--线路-->
    <div class="find">
      <div class="row">
        <div class="col-sm-4 ">
          <div class="item header-f">
            线路
          </div>
          <div class="r-c item">
            <div class="item-content">
              <h3>{{itineraries.data[0].name}}</h3>
              <div class="line-icon"></div>
              <p>{{itineraries.data[0].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item item-top">
            <div class="item-content">
              <h3>{{itineraries.data[1].name}}</h3>
              <div class="line-icon"></div>
              <p>{{itineraries.data[1].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
          <div class="item item-bottom">
            <div class="item-content">
              <h3>{{itineraries.data[2].name}}</h3>
              <div class="line-icon"></div>
              <p>{{itineraries.data[2].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 left item l-item">
          <div class="item-content">
            <h3>{{itineraries.data[3].name}}</h3>
            <div class="line-icon"></div>
            <p>{{itineraries.data[3].description}}</p>
            <a>​阅读全文</a>
            <div class="item-footer">
              <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
              <img src="../../layout/img/fly.png" alt="" height="22" width="22">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌-->
    <div class="find">
      <div class="row">
        <div class="col-sm-4 ">
          <div class="item header-f">
            品牌
          </div>
          <div class="r-c item">
            <div class="item-content">
              <h3>{{brands.data[0].name}}</h3>
              <div class="line-icon"></div>
              <p>{{brands.data[0].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item item-top">
            <div class="item-content">
              <h3>{{brands.data[1].name}}</h3>
              <div class="line-icon"></div>
              <p>{{brands.data[1].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
          <div class="item item-bottom">
            <div class="item-content">
              <h3>{{brands.data[2].name}}</h3>
              <div class="line-icon"></div>
              <p>{{brands.data[2].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 left item l-item">
          <div class="item-content">
            <h3>{{brands.data[3].name}}</h3>
            <div class="line-icon"></div>
            <p>{{brands.data[3].description}}</p>
            <a>​阅读全文</a>
            <div class="item-footer">
              <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
              <img src="../../layout/img/fly.png" alt="" height="22" width="22">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--福利-->
    <div class="find">
      <div class="row">
        <div class="col-sm-4 left item l-item">
          <div class="item-content">
            <h3>{{deals.data[0].name}}</h3>
            <div class="line-icon"></div>
            <p>{{deals.data[0].description}}</p>
            <a>​阅读全文</a>
            <div class="item-footer">
              <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
              <img src="../../layout/img/fly.png" alt="" height="22" width="22">
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item item-top">
            <div class="item-content">
              <h3>{{deals.data[1].name}}</h3>
              <div class="line-icon"></div>
              <p>{{deals.data[1].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
          <div class="item item-bottom">
            <div class="item-content">
              <h3>{{deals.data[2].name}}</h3>
              <div class="line-icon"></div>
              <p>{{deals.data[2].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item header-f">
            福利
          </div>
          <div class="r-c item">
            <div class="item-content">
              <h3>{{deals.data[3].name}}</h3>
              <div class="line-icon"></div>
              <p>{{deals.data[3].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--商城-->
    <div class="find">
      <div class="row">
        <div class="col-sm-4 ">
          <div class="item header-f">
            商城
          </div>
          <div class="r-c item">
            <div class="item-content">
              <h3>{{shops.data[0].name}}</h3>
              <div class="line-icon"></div>
              <p>{{shops.data[0].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 left item l-item">
          <div class="item-content">
            <h3>{{shops.data[1].name}}</h3>
            <div class="line-icon"></div>
            <p>{{shops.data[1].description}}</p>
            <a>​阅读全文</a>
            <div class="item-footer">
              <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
              <img src="../../layout/img/fly.png" alt="" height="22" width="22">
            </div>
          </div>
        </div>
        <div class="col-sm-4 ">
          <div class="item item-top">
            <div class="item-content">
              <h3>{{shops.data[2].name}}</h3>
              <div class="line-icon"></div>
              <p>{{shops.data[2].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
              </div>
            </div>
          </div>
          <div class="item item-bottom">
            <div class="item-content">
              <h3>{{shops.data[3].name}}</h3>
              <div class="line-icon"></div>
              <p>{{shops.data[3].description}}</p>
              <a>​阅读全文</a>
              <div class="item-footer">
                <img src="../../layout/img/facebook.png" alt="" width="22" height="22">
                <img src="../../layout/img/fly.png" alt="" height="22" width="22">
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

export default {
  data () {
    return {
      discovers: {},
      itineraries: {},
      brands: {},
      deals: {},
      shops: {}
    }
  },
  async created () {
    // Discovers
    const res_discovers = await API.getDiscovers()
    console.log('1',res_discovers)
    this.discovers = res_discovers.data
    // Itineraries
    const res_itineraries = await API.getItineraries()
    console.log('2',res_itineraries)
    this.itineraries = res_itineraries.data
    // Brands
    const res_brands = await API.getBrands()
    console.log('3',res_brands)
    this.brands = res_brands.data
    // Deals
    const res_deals = await API.getDeals()
    this.deals = res_deals.data
    // Shops
    const res_shops = await API.getShops()
    this.shops = res_shops.data
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.main {
  width:100%;
  margin-top:108px;
  background:#fff;
  .find{
    width:1240px;
    margin:0 auto;
    height:810px;
    margin-top:2.5rem;
    .left{
      height:810px;
    }
    .l-item{
      background:green;
    }
    .item{
      text-align: center;
      color:#fff;
      font-family: "avenir-lt-w01_85-heavy1475544,sans-serif";
      .item-content{
        display: none;
        h3{
          padding-top:6rem;
          font-size: 1.1rem;
        }
        .line-icon{
          width:4rem;
          height:4px;
          margin: 3rem auto;
          background:#FDAF7E;
        }
        p{
          font-size:1rem;
          line-height: 1.5rem;
        }
        a{
          text-decoration: underline;
          color:#fff;
          margin-top:3.3rem;
        }
        .item-footer{
          margin-top:2rem;
          img{
            display: inline-block;
            margin:5px;
          }

        }
      }
      &:hover {
        .item-content{
          display: block;
        }
      }
    }
    .item-top{
      background:url("../../layout/img/find02.png")no-repeat;
      height:395px;

      h3{
        padding-top:1rem;
        margin:0;
      }
    }
    .item-bottom{
      height:395px;
      background: url("../../layout/img/fand03.png")no-repeat;
      margin-top:1.3rem;
      h3{
        padding-top: 1rem;
        margin-top:0;
      }
    }
    .header-f{
      height:214px;
      background:#F8786B;
      text-align:center;
      line-height: 214px;
      font-size:3rem;
      font-weight: 700;
    }
    .r-c{
      background:url(../../layout/img/fand04.png)no-repeat;
      height:580px;
      margin-top:1.5rem
    }
  }

}

</style>
