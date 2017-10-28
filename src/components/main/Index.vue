<template>
  <div class="index">
    <navigation></navigation>
    <item></item>
    <foot></foot>
  </div>
</template>

<script>
import Navigation from '../layout/Navigation'
import Foot from '../layout/Foot'
import Item from './common/Item'

export default {
  data () {
    return {
    }
  },
  components: {
    Navigation,
    Foot,
    Item
  },
  created () {
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
</style>
