<template>

<div class="container">
    <div class="filter"> 
    <a href="#all" class="ui blue label" >全部</a>
    <a href="#{{item.name}}" class="ui orange label" v-for="item in categoriesListData">{{item.name}}</a>
    </div>

      <div class="sets" v-for="item in categoriesListData">
        <a href="#" class="{{item.name}}" ><img src="https://pbs.twimg.com/media/CcFXoDrWIAExSQP.jpg"></a>
      </div>
<!-- <div class="ui segment">
  <div class="ui cards">
    <div class="card"  v-for="n in 10">
      <div class="content" style="background-image()">
       <a class="image">
        <img src="/images/avatar/large/elliot.jpg">
       </a>

       <a class="header">文章标题</a>
       <div class="description">
         简单描述
      </div>
    </div>
      <div class="extra content">
    <span class="left floated like">
      <i class="like icon"></i>
      喜欢
    </span>
    <span class="right floated star">
      <i class="star icon"></i>
      收藏
    </span>
    <span class="right floated star">
      <i class="see icon"></i>
      观看
    </span>
  </div>
  </div>
</div> -->
</div>
</template>

<script>
  import $ from 'jquery'
  window.$ = $
  window.jquery = $

  export default {
    attached () {
      window.jquery('.filter a').click(function (e) {
        e.preventDefault()
        var a = window.jquery(this).attr('href')
        a = a.substr(1)
        window.jquery('.sets a').each(function () {
          if (!window.jquery(this).hasClass(a) && a !== 'all') {
            window.jquery(this).addClass('hide')
          }
          else {
            window.jquery(this).removeClass('hide')
          }
        })
      })
      window.jquery('.sets a').click(function (e) {
        e.preventDefault()
        var $i = window.jquery(this)
        window.jquery('.sets a').not($i).toggleClass('pophide')
        $i.toggleClass('pop')
      })
    },
    data () {
      return {
        categoriesListData: [],
        categoriesTableLoading: true,
        categoriesTableError: false,
        errorMessage: ''
      }
    },
    created () {
      this.fetchBrandData()
    },
    methods: {
      fetchBrandData () {
        this.$http.get('/api/categories').then(response => {
          this.categoriesListData = response.data
          this.categoriesTableLoading = false
        }).catch(error => {
          this.categoriesTableError = true
          this.errorMessage = error.message
          this.categoriesTableLoading = false
        })
      },
      onAttached () {
        console.vm.$log('test')
      },
      handleBrandCreate: function () {
      }
    }
  }
</script>