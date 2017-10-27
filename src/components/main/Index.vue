<template>
  <div class="index">
    <navigation></navigation>
    <banner></banner>
    <item></item>
    <foot></foot>
  </div>
</template>

<script>
import Navigation from '../layout/Navigation'
import Foot from '../layout/Foot'
import Banner from './common/Banner'
import Item from './common/Item'
import API from '@/api'

export default {
  data () {
    return {

    }
  },
  components: {
    Navigation,
    Foot,
    Item,
    Banner
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.index {

}

</style>
