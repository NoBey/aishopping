<template>
<div class="wrapper container">
  <div class="col threeQuarter border">
    <div class="section">
      <h2>标题</h2>
      <img src="https://static.tumblr.com/minmqb8/Xoamrl7u9/shoefront.jpg" draggable="false" class="itemImg" alt="Item Image" />
    </div>

    <div class="section gallery">
      <img src="https://static.tumblr.com/minmqb8/Xoamrl7u9/shoefront.jpg" draggable="false" alt="Shoe Front" />
      <img src="https://static.tumblr.com/minmqb8/eINmrl7ts/shoeback.jpg" draggable="false" alt="Shoe Back" />
    </div>

    <div class="section last">
      <p>2 查看</p>
    </div>
  </div>

  <div class="col quarter padding">
    <div class="section">
  	  <p>详细内容描述地区</a></p>
      <p class="tags"><a href="#">标签1</a><a href="#">标签2</a><a href="#">标签3</a></p>
    </div>

    <div class="section price">
      <p>&pound;94.95</p>
    </div>

    <div class="section last">
      <input type="submit" value="Add to Basket" class="button" />
    </div>
  </div>
</div>

</template>
<script>
export default {
  data () {
    return {
      productListData: [],
      productTableLoading: true,
      productTableError: false,
      errorMessage: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>
