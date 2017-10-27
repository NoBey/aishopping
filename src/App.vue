<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      if (toDepth === fromDepth) {
        this.transitionName = 'page'
      } else if (toDepth < fromDepth) {
        this.transitionName = 'page-out'
      } else {
        this.transitionName = 'page-in'
      }
    }
  }
}
</script>

<style lang="less">
/*
 *  过渡效果
 */
// 页面切换过渡 in
.page-enter-active {
  transition: all .3s
}
.page-enter {
  opacity: 0;
}
// 页面切换过渡 in
.page-in-enter-active {
  transition: all .3s
}
.page-in-enter {
  opacity: 0;
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
// 页面切换过渡 out
.page-out-enter-active {
  transition: all .3s
}
.page-out-enter {
  opacity: 0;
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}

.col-sm-4 {
  cursor: pointer;
}
</style>
