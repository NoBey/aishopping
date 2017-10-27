<temeplate>
  <div class="detail">
    详情
  </div>
</temeplate>
<script>
  import API from '@/api'

  export default {
    data () {
      return {
      }
    },
    components: {
    },
    created () {
      this.getFinds()
    },
    methods: {
      getBrands () {
        API.getBrands()
          .then(res => {

          })
      }
    }
  }
</script>
<style scope>

</style>
