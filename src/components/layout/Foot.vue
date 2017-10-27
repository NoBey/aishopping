<template>
  <div class="foot">
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-sm-3">
            <h3><a href="">联系我们</a></h3>
            <p class="email">
                +33 (0) 123456789<br/>
                kai@aishoppingparis.com
            </p>
            <p>
              <img  src="./img/facebook.png" alt="facebooke.png" width="22" height="22">
              <img src="./img/fly.png" alt="fly.png" width="22" height="22">
              <img src="./img/contactus.png" alt="contactus.png" width="22" height="22">
            </p>
          </div>
          <div class="col-sm-3">
            <h3>支付方式</h3>
            <p class="pay">
              <img src="./img/pay01.png" alt="pay01.png" width="34" height="22" >
              <img src="./img/pay02.png" alt="pay02.png" width="34" height="22">
              <img src="./img/pay03.png" alt="pay03.png" width="34" height="22">
              <img src="./img/pay04.png" alt="pay04.png" width="34" height="22">
            </p>
          </div>
          <div class="col-sm-6">
            <div class="about">
              <h4>关注我们最新推荐</h4>
              <div class="group">
                <input type="text" class="car-input" placeholder="输入邮箱">
                <button>S`abonner maintenant</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import API from '@/api'

export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  },
  components: {
  }
}
</script>

<style scoped lang="less">
.foot {
    width:100%;
    background:#000;
    color:#fff;
  position: relative;
  footer{
    width:90%;
    margin:0 auto;
    padding:15px 10px 10px 10px;
    h3{
      margin-top:1rem;
      font-size: 1rem;
      a{
        font-size:1rem;
        color:#fff;
        text-decoration: underline;
      }
    }
    p{
      line-height: .8rem;
      font-size: .8rem;
      margin-bottom:.5rem;
      &.email{
        line-height: 1rem;
        margin-bottom:1.4rem;
      }
      &.pay{
        margin-top:1rem;
      }
      &.pay img{
        margin-right:.5rem;
      }
      & img{
        marin-top:.5rem;
        display: inline-block;
        margin-right:1.5rem;
      }
    }
    .about{
      padding:10px 20px 5px 10px;
      border:3px solid rgba(102,102,102,1);
      background:rgba(255,255,255,1);
      h4{
        color:rgba(87,87,87,1);
        font-weight: 400;
        font-size:1rem;
        margin-bottom:1.2rem;
      }
      input{
        outline:0 none;
        border:1px solid rgba(153,153,153,1);
        background-color:rgba(255,255,255,1);
        color:rgba(87,87,87,1);
        font:normal normal normal 15px/1.4em raleway,sans-serif;
        padding:11px 0 11px 8px;
      }
      button{
        outline:0 none;
        padding: 9px 24px;
        border-style: solid;
        -webkit-appearance: none;
        white-space: nowrap;
        background-color: rgba(0,0,0,1) !important;
        border-color: rgba(102,102,102,1);
        color:#fff;
      }
    }
  }
}

</style>
