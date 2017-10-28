<template>
  <div class="brand-detail">
    <p v-for="(value, key) in brand" :key="key">
      {{ key }}: {{ value }}
    </p>
  </div>
</template>

<script>
  import API from '@/api'

  export default {
    data () {
      return {
        brand:{}
      }
    },
    components: {
    },
    created () {
      this.getBrand()
    },
    methods: {
      async getBrand () {
        let res = await API.getBrand( this.$route.query.id )
        console.log( 'brand', res )
        this.brand = res.data
      }
    }
  }
</script>

<style>
.brand-detail{
  padding: 20px 10%;
}
</style>
