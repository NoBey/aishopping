<template>
  <div class="itineraries">
    <navigation></navigation>
    <notice></notice>
    <div class="main">
      <div class="parallax">
        <div id="group6" :style="'background-image:url('+item.image+');'" class="parallax__group" v-for="item in itineraries" :key="item.id" @click="toDetail(item.id)">
          <div class="parallax__layer parallax__layer--fore">
            <div class="title"><h3 style="color:#fff;">{{item.name}}</h3></div>
          </div>
          <div class="parallax__layer parallax__layer--base">
            <div class="title"><p style="color:yellow">{{item.description}}</p></div>
          </div>
        </div>
        <p v-loading="loading"></p>
        <p v-if="isBottom" class="is-bottom">到底了</p>
        <foot></foot>
      </div>
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
      one: false
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
    toDetail(id) {
      this.$router.push({ name: "ItinerariesDetail", query: { id: id } });
    },
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

<style scope lang="less">
.is-bottom {
  text-align: center;
  margin: 15px 0;
  padding: 15px;
  color: #999;
}
.parallax {
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-perspective: 300px;
  perspective: 300px;
  -webkit-perspective-origin-x: 100%;
  perspective-origin-x: 100%;
}
.parallax__group {
  position: relative;
  height: 500px; /* fallback for older browsers */
  height: 100vh;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.parallax__layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transform-origin-x: 100%;
  transform-origin-x: 100%;
}
.parallax__layer--fore {
  -webkit-transform: translateZ(90px) scale(0.7);
  transform: translateZ(90px) scale(0.7);
  z-index: 1;
}

.parallax__layer--base {
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  z-index: 4;
}

.parallax__layer--back {
  -webkit-transform: translateZ(-300px) scale(2);
  transform: translateZ(-300px) scale(2);
  z-index: 3;
}

.parallax__layer--deep {
  -webkit-transform: translateZ(-600px) scale(3);
  transform: translateZ(-600px) scale(3);
  z-index: 2;
}

* {
  margin: 0;
  padding: 0;
}

.parallax {
  font-size: 200%;
}

/* centre the content in the parallax layers */
.title {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

/* style the groups
--------------------------------------------- */

#group6 {
  z-index: 2; /* slide under group 5 and 7 */
  background-size: 100% 100%;
}
#group6 .parallax__layer--back {
  // background: rgb(245, 235, 100);
}

/* misc
--------------------------------------------- */
.demo__info {
  position: absolute;
  z-index: 100;
  bottom: 1vh;
  top: auto;
  font-size: 80%;
  text-align: center;
  width: 100%;
}
.main{
  position: absolute;
  width: 100%;
  top: 152px;
  bottom: 10px;
}
</style>