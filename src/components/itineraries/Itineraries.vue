<template>
  <div class="itineraries">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="img" :style="'background-image:url('+item.image+');'" 
        v-for="item in itineraries" :key="item.id">
        <div class="in">
          <h1>{{item.name}}</h1>
          <h3>{{item.description}}</h3>
          <router-link :to="{ name: 'ItinerariesDetail', query: {id: item.id} }">
            <div class="detail">
              <div>详细信息</div>
              <img :src="imgUrl" alt="">
            </div>
          </router-link>
        </div>
      </div>
      <p v-loading="loading"></p>
      <p v-if="isBottom" class="is-bottom">到底了</p>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import API from "@/api";
import bottomHeight from "@/util/bottomHeight";
import Navigation from "../layout/Navigation";
import Notice from "../layout/Notice";
import Foot from "../layout/Foot";

export default {
  data() {
    return {
      loading: false,
      itineraries: [],
      page: 1,
      isBottom: false,
      //保证window.onscroll在bottomHeight() < 120时，不会重复调用this.getItineraries(this.page)
      one: false,
      imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYR+1WwVHDMBC0KoAS6ICkA1MBdEDSAekAKoAOCBVAB6QDnAowHZAKzK7nlJHkk63YMf5YMxpHtnS7t9KtYrKJm5kYP5sJzApMr0BVVVeohHv0N2NM+R9V4WFi8AnQHP0X/QYkijFJAG+B+MS8RC8NXhDwWkBJYjmWEsAi6LeAE/KHBMhoh34hJEiISpDM2ZqAM3PisR2ofH0IxyahgBOWShfHKsCkFV6+OikXmLA8hwSI/Y44d06sNWJvOfbKUCGxxcT1EBKIyaSYnG1H8AYB2Y4HPJ+dBb1JKOBPSOjRTUg1IiykPPQG2xoLu1RBjDAR+oyrRB0i6oQKCU+6NgLKVqrgrQRkOz7wvI3tn0ZCAd8jc1t6jSWtd4GUzw6rrFExQF0+EXDX5Thlj563eUrnZaSQUC07sNgk8M4tsFkKiRJj65YeCblcvvCdVstGl1ukWHqnAg6J0LJJyBpV02ITL7VkAnIotXuDn3x/TwRP3gL3wEHuHGNmrLXkUrWLT1LA2Y4Vfrv3Bj+dDN5LgQiJDQ7cS0SV1te9FAgOZjbkX9QgAn0yDtfMBGYF/gAsjbYk2kLzKgAAAABJRU5ErkJggg=='
    };
  },
  components: {
    Navigation,
    Notice,
    Foot
  },
  created() {
    this.getItineraries(this.page);
  },
  mounted() {
    window.onscroll = async () => {
      // console.log(bottomHeight())
      if (bottomHeight() < 120) {
        if (!this.one) return;
        this.one = false;
        this.loading = true;
        await this.getItineraries(this.page);
      }
    };
  },
  methods: {
    async getItineraries(page) {
      if (this.isBottom == true) return;
      let res = await API.getItineraries(page);
      console.log(res);
      this.itineraries.push(...res.data.data);
      this.loading = false;
      if (res.data.current_page == res.data.last_page) {
        this.isBottom = true;
        //清除滚动事件监听
        window.onscroll = null;
      }
      this.refreshPage();
      //当此加载事件完毕
      this.one = true;
    },
    // 更新分页
    refreshPage() {
      this.page++;
    }
  }
};
</script>

<style scope >
html{
  position: relative;
  width: 100%;
  height: 100%;
}
.main{
  position: absolute;
  width: 100%;
  height: 100%;
}
.img{
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment:fixed;
  background-size:cover;
  display: table;
  width: 100%;
}
.in{
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
h1{
  color: #fff;
  font-weight: bold;
}
h3{
  color: #fff;
  font-size: 30px;
  padding: 40px 15%;
}
.detail{
  color: #fff;
  font-size: 22px;
  position: relative;
  top: 7rem;
}
.detail img{
  height: 24px;
  width: 28px;
}
.is-bottom {
  text-align: center;
  margin: 15px 0;
  padding: 15px;
  color: #999;
}
</style>