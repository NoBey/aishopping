<template>
  <div class="brands">
    <navigation></navigation>
    <notice></notice>
    <div class="brands-wrapper">
      <div class="brands-content">
        <div class="row text-right">
          <div class="form-group">
            <el-select v-model="value" placeholder="请选择" @change="select">
              <el-option
                v-for="(category,index) in categories"
                :key="index"
                :label="category"
                :value="category">
              </el-option>
            </el-select>
            <el-button type="danger">OK</el-button>
          </div>
        </div>
        <div class="row brands-top">
          <div class="col-sm-4">
            <img src="../layout/img/find02.png" alt="" width="100%" height="auto">
          </div>
          <div class="col-sm-4">
            <h3>Top Designer Brands</h3>
            <ul class="brands-item">
              <li>Majc</li>
              <li>Majc</li>
            </ul>
          </div>
          <div class="col-sm-4">
            <img src="../layout/img/find02.png" alt="" width="100%" height="auto">
          </div>
          <span class="a-btn"></span>
        </div>
      </div>
    </div>
    <div class="designeraz" id="designeraz__mainContainer" data-siteuid="aishoppingparis-fra">
        <div class="designeraz__index" id="designeraz__index">
            <div class="designeraz__index__indexpoint">
                <a v-for="letter in letters" :key="letter.key" 
                    v-bind:class="[{ noEntries: !letter.highLight }, 'designeraz__index__indexpoint__label']"  
                    @click="scrollTo(letter.key)">{{letter.key}}</a>
            </div>
        </div>

        <div id="designeraz__categories" class="designeraz__categories__wrapper" data-site-id="aishoppingparis-fra" style="display:none"></div>

        <div class="designeraz__list" id="designeraz__list">
            <div :id="list.key" v-for="list in brands" :key="list.key" class="designeraz__list__group">
                <h3 class="designeraz__list__group__heading">{{list.key}}</h3>
                <div v-for="item in list.value" :key="item.id">
                  <router-link :to="'/brands/detail?id=' + item.id " class="designeraz__list__item tooltipstered">
                    {{item.name}}
                  </router-link>
                </div>
            </div>
        </div>

        <div class="designeraz__list" id="designeraz__sale__list"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
import Navigation from '../layout/Navigation'
import Notice from '../layout/Notice'
import API from '@/api'

export default {
  data () {
    return {
        //服务器返回的数据
        data: {},
        //服务器返回数据内的data数组经过处理后的数据
        brands: [],
        //导航栏数据，格式 [{key:'A',highLight:true},{key:'B',highLight:flase} ... ]
        letters: [],
        //分类
        categories:[],
        //选中的分类
        value:'All categories',
        //分类对象
        brandsCategories:{
          // "家居":[{},{}],
          // "男裝":[{},{}]
        }
    }
  },
  components: {
    Navigation,
    Notice
  },
  async created() {
    this.getBrands()
  },
  methods: {
    async getBrands(){
      const res = await API.getBrands()
      console.log("brands", res.data)
      if( res.status != 200 ){
        alert( res.status )
      }
      this.data = res.data
      this.dataFormate( this.data.data )
      this.categoriesFormate()
    },
    categoriesFormate(){
      let data = this.data.data
      if (data.length == 0) return
      this.brandsCategories['All categories'] = data
      data.forEach( item => {
        if( !item.categories || item.categories.length == 0 ) return
        item.categories.forEach( list => {
          this.brandsCategories[list.name] = this.brandsCategories[list.name] || []
          this.brandsCategories[list.name].push( item )
        })
      })
      console.log( 'categoriesFormate', this.brandsCategories )
      let categories = []
      for( let key in this.brandsCategories ){
        // console.log(key)
        categories.push(key)
      }
      console.log( categories)
      this.categories = categories
    },
    select( val ){
      console.log( val )
      console.log('brandsCategories[val]', this.brandsCategories[val])
      this.dataFormate( this.brandsCategories[val] )
    },
    dataFormate( data ){
      if (data.length == 0) return
      let new_data = []
      let arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      let dict = {}
      let lettersStr = ''

      for (let item of data) {
        if (!item.name) continue
        let pinyinC = item.name[0].toUpperCase()
        let actualC = "123"
        for (let c of arr) {
          if (c === pinyinC) {
            actualC = c
            break
          }
        }
        dict[actualC] = dict[actualC] || []
        dict[actualC].push(item)
        lettersStr += actualC
      }

      let finalArr = []
      for (let c of arr) {
        if (dict[c] && dict[c].length) {
          finalArr.push({
            key: c,
            value: dict[c]
          })
        }
      }
      if (dict["123"] && dict["123"].length) {
        finalArr.push({
          key: "123",
          value: dict["123"]
        })
        lettersStr += '123'
      }

      this.brands = finalArr
      console.log(this.brands)
      console.log('lettersStr',lettersStr)
      let lettersDict = ['123','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      this.letters = []
      lettersDict.forEach( letter => {
        this.letters.push({
          key: letter,
          highLight: lettersStr.indexOf(letter) > -1
        })
      })
      console.log(this.letters)
    },
    scrollTo( to ){
      console.log(to)
      console.log(document.getElementById(to))
      if(document.getElementById(to)){
        let top = document.getElementById(to).offsetTop
        console.log( top  )
        window.scrollTo(0,top - 108)        
      }
    }
  }
}
</script>
<style lang="less" scope>
.brands-wrapper{
  width:100%;
  .brands-content{
    width:80%;
    margin:0 auto;
    .form-group{
      width:100%;
      padding:15px;
      select{
        margin-right:15px;
        background: #FCe4e2;
        padding:5px 0;
        width:187px;
        border-radius:4px;
        vertical-align: middle;
      }
    }
    .brands-top{
      position:relative;
      .a-btn{
        display: inline-block;
        width:12px;
        height:12px;
        background: transparent;
        border-top:2px solid #000;
        border-left:2px solid #000;
        position: absolute;
        bottom:5px;
        left:50%;
        margin-left:-6px;
        transform: rotate(-135deg);
      }
    }
    .brands-item{
      list-style: none;
      padding:0;
      li{
        line-height: 35px;
        padding:0;
        cursor:pointer;
      }
    }
  }
}
.designeraz {
overflow: hidden;
clear: both; }

.designeraz__filter__mobile input[type="select"] {
opacity: 0; }
@media (min-width: 0em) {
.designeraz__filter__mobile .selecter {
  width: 97%;
  margin: 0;
  float: left; }
  .designeraz__filter__mobile .selecter:focus {
    outline: none; }
  .designeraz__filter__mobile .selecter .cs__options {
    outline: none;
    border: 1px solid #cccccc; }
  .designeraz__filter__mobile .selecter .cs__item, .designeraz__filter__mobile .selecter .cs__item.selected, .designeraz__filter__mobile .selecter .cs__selected {
    display: block;
    margin-bottom: -3px;
    margin-top: -3px;
    letter-spacing: 0px;
    font: 700 12px/14px Group2, "Helvetica", "Arial", sans-serif;
    text-align: left;
    text-rendering: optimizeLegibility;
    text-transform: uppercase;
    border: 1px solid #cccccc;
    background-color: white;
    color: #333333;
    cursor: pointer;
    display: block;
    margin: 0;
    margin-right: 0px;
    overflow: hidden;
    padding: 7px 10px 7px 10px;
    position: relative;
    text-overflow: clip;
    z-index: 2; }
  .designeraz__filter__mobile .selecter .cs__selected:after, .designeraz__filter__mobile .selecter .cs__item:first-child:after {
    background-image: url("./img/mf-icn-dropdown-right.svg");
    background-repeat: no-repeat;
    background-position: right center; }
  .designeraz__filter__mobile .selecter .cs__selected:after, .designeraz__filter__mobile .selecter .cs__item.selected:after, .designeraz__filter__mobile .selecter .cs__item:first-child:after {
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    float: right;
    margin-top: 0;
    background-size: 15px 15px; }
  .designeraz__filter__mobile .selecter .cs__item, .designeraz__filter__mobile .selecter .cs__item.selected {
    background: white;
    color: black;
    border: none;
    text-overflow: ellipsis;
    position: static;
    width: auto;
    z-index: auto; }
    .designeraz__filter__mobile .selecter .cs__item:hover, .designeraz__filter__mobile .selecter .cs__item.selected:hover {
      text-decoration: underline; }
  .designeraz__filter__mobile .selecter .cs__item:first-child:after {
    content: '';
    display: block;
    height: 15px;
    width: 15px;
    float: right;
    margin-top: -2px;
    margin-bottom: 3px;
    background-size: 15px 15px; } }
@media (min-width: 42.563em) {
.designeraz__filter__mobile .selecter {
  display: none; } }

@media (min-width: 0em) and (max-width: 42.5em) {
.designeraz {
  position: relative;
  display: block;
  overflow: hidden;
  margin-right: -5.26316%;
  margin-left: -5.26316%;
  padding-right: 5.26316%;
  padding-left: 5.26316%;
  margin-right: -3.26316%; } }
.designeraz__tabs__item {
font-weight: 700;
border: 1px solid #333;
cursor: pointer;
display: block;
overflow: hidden;
text-align: center;
text-transform: uppercase;
float: left;
letter-spacing: 1px;
font-family: Group2, "Helvetica", "Arial", sans-serif;
font-size: 10px;
height: 30px;
line-height: 26px;
border-bottom: none; }
.designeraz__tabs__item .tabs__link {
  border: none; }
@media (min-width: 42.563em) {
  .designeraz__tabs__item {
    font-size: 11px;
    height: 30px;
    line-height: 29px; } }
@media (min-width: 61.313em) {
  .designeraz__tabs__item {
    font-size: 12px;
    height: 26px;
    line-height: 26px; } }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__tabs__item {
    display: none; } }
@media (min-width: 42.563em) and (max-width: 61.25em) {
  .designeraz__tabs__item {
    width: 33.333%; } }
@media (min-width: 61.313em) {
  .designeraz__tabs__item {
    width: 33.333%; } }

@media (min-width: 42.563em) and (max-width: 61.25em) {
.no-sale .designeraz__tabs__item {
  width: 50%; } }
@media (min-width: 61.313em) {
.no-sale .designeraz__tabs__item {
  width: 50%; } }

.noEntries {
opacity: .5; }
.noEntries:hover {
  text-decoration: none;
  border-bottom: 0px !important; }

.designeraz__header {
zoom: 1;
clear: both;
min-height: inherit; }
.designeraz__header:before, .designeraz__header:after {
  content: "\0020";
  display: block;
  height: 0;
  overflow: hidden; }
.designeraz__header:after {
  clear: both; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__header {
    padding-top: 9px;
    padding-bottom: 10px;
    padding-right: 62px; } }
.designeraz__header__title {
  display: block;
  letter-spacing: 1px;
  font: 700 36px/36px Group1;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 0; }
  @media (min-width: 0em) and (max-width: 25em) {
    .designeraz__header__title {
      font-size: 21px;
      padding-bottom: 0;
      float: left;
      letter-spacing: 0; } }
  @media (min-width: 25.01em) and (max-width: 42.5em) {
    .designeraz__header__title {
      font-size: 21px;
      padding-bottom: 0;
      float: left;
      letter-spacing: 0; } }
  @media (min-width: 42.563em) and (max-width: 61.25em) {
    .designeraz__header__title {
      display: block;
      letter-spacing: 0px;
      font: 700 30px/31px Group1;
      text-align: center;
      text-rendering: optimizeLegibility;
      text-transform: uppercase;
      padding: 23px 0 0 0; } }
  @media (min-width: 61.313em) and (max-width: 90em) {
    .designeraz__header__title {
      padding: 33px 0 0 0; } }
  @media (min-width: 90.063em) {
    .designeraz__header__title {
      display: block;
      letter-spacing: 0px;
      font: 700 36px/36px Group1;
      text-align: center;
      text-rendering: optimizeLegibility;
      text-transform: uppercase;
      padding: 36px 0 5px 0;
      letter-spacing: -1px; } }
@media (min-width: 0) and (max-width: 42.5em) {
  .designeraz__header__cta {
    display: none; } }
@media (min-width: 42.563em) and (max-width: 61.25em) {
  .designeraz__header__cta {
    padding: 0 0 18px 0; } }
@media (min-width: 61.313em) and (max-width: 90em) {
  .designeraz__header__cta {
    padding: 0 0 28px 0; } }
@media (min-width: 90.063em) {
  .designeraz__header__cta {
    padding: 5px 0 24px 0; } }
.designeraz__header__cta ul {
  padding: 0;
  margin: 0;
  height: 42px;
  list-style: none; }
  .designeraz__header__cta ul li {
    float: none;
    line-height: 41px;
    text-align: center; }
    .designeraz__header__cta ul li a {
      display: block;
      letter-spacing: 0px;
      font: 700 14px/18px Group2, "Helvetica", "Arial", sans-serif;
      text-align: center;
      text-rendering: optimizeLegibility;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      color: black;
      text-decoration: none;
      line-height: 41px; }
      .designeraz__header__cta ul li a:after {
        content: '';
        width: 13px;
        height: 13px;
        display: inline-block;
        background-image: url("./img/mf-icn-dropdown-right.svg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 1px; }

.designeraz__filter__mobile {
display: none; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__filter__mobile {
    clear: both;
    width: 100%;
    float: left;
    display: inherit;
    margin-bottom: 10px;
    padding-right: 30px; } }

.designeraz__filter__mobile__link {
display: none; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__filter__mobile__link {
    width: 97%;
    height: 30px;
    border: 1px solid #cccccc;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: bold;
    display: block;
    padding: 7px 0 7px 10px; } }

.designeraz__tabs {
zoom: 1;
margin: auto; }
.designeraz__tabs:before, .designeraz__tabs:after {
  content: "\0020";
  display: block;
  height: 0;
  overflow: hidden; }
.designeraz__tabs:after {
  clear: both; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__tabs {
    clear: both;
    width: 100%;
    float: left;
    padding-right: 46px;
    display: none; } }
@media (min-width: 42.563em) and (max-width: 61.25em) {
  .designeraz__tabs {
    width: 48.83721%;
    margin: 0 auto;
    height: 30px; } }
@media (min-width: 61.313em) and (max-width: 90em) {
  .designeraz__tabs {
    width: 42.85714%;
    margin-left: 28.57143%;
    margin-right: -100%; } }
@media (min-width: 90.063em) {
  .designeraz__tabs {
    width: 46.26866%;
    margin-left: 26.86567%;
    margin-right: -100%; } }
.designeraz__tabs .tabs__item {
  margin-bottom: 0; }
  @media (min-width: 0em) and (max-width: 42.5em) {
    .designeraz__tabs .tabs__item {
      clear: both;
      width: 100%;
      float: left; } }
@media (min-width: 61.313em) and (max-width: 90em) {
  .designeraz__tabs {
    height: 26px;
    line-height: 26px; } }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__tabs .tabs {
    overflow: auto;
    margin-bottom: 35px; } }
.designeraz__tabs .tabber-menu {
  padding: 0; }

.designeraz__index {
text-align: center;
font-size: 32px;
float: none;
clear: both;
margin: 0;
border-top: 1px solid transparent;
border-bottom: 1px solid #cccccc;
padding: 25px 0 30px; }
@media (min-width: 90.063em) {
  .designeraz__index {
    width: 97.01493%;
    margin: 0 auto;
    padding: 17px 7.46269% 0px;
    height: 80px; } }
@media (min-width: 61.313em) and (max-width: 90em) {
  .designeraz__index {
    width: 100%;
    margin: 0 auto;
    padding: 17px 0% 0px;
    height: 80px; } }
@media (min-width: 42.563em) and (max-width: 61.25em) {
  .designeraz__index {
    width: 95.34884%;
    margin: 0 auto;
    padding: 0;
    height: 70px; }
    .designeraz__index__indexpoint {
      margin-top: 15px;
      text-align: center; } }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__index {
    right: 0;
    top: 0px;
    position: absolute;
    background: white;
    z-index: 10;
    border-left: 1px solid #efefef;
    border-top: none;
    border-bottom: none;
    padding: 0 4px;
    width: 45px;
    margin: auto; } }
.designeraz__index__indexpoint {
  overflow-y: auto; }
  @media (min-width: 42.563em) and (max-width: 61.25em) {
    .designeraz__index__indexpoint {
      margin-top: 0;
      text-align: center;
      padding: 5px 10%;
      height: 70px;
      line-height: 20px; } }
.designeraz__index__indexpoint__label {
  color: black;
  font-family: Group4;
  border-bottom: 1px solid #fff;
  cursor: pointer; }
  @media (min-width: 0em) and (max-width: 42.5em) {
    .designeraz__index__indexpoint__label {
      display: block;
      font-size: 10px;
      padding-top: 12px;
      padding-bottom: 12px;
      padding-right: 0;
      letter-spacing: 0; }
      .designeraz__index__indexpoint__label:hover {
        color: black;
        border-bottom: none; } }
  @media (min-width: 42.563em) {
    .designeraz__index__indexpoint__label {
      font-size: 13px;
      width: 5%;
      display: inline-block; }
      .designeraz__index__indexpoint__label:hover {
        color: black;
        border-bottom: 1px solid #000; } }
  @media (min-width: 61.313em) and (max-width: 90em) {
    .designeraz__index__indexpoint__label {
      font-size: 18px;
      width: 2.47273%;
      display: inline-block; }
      .designeraz__index__indexpoint__label:nth-child(2) {
        width: 4.44444%; }
      .designeraz__index__indexpoint__label:last-of-type {
        margin-right: 0; } }
  @media (min-width: 90.063em) {
    .designeraz__index__indexpoint__label {
      font-size: 18px;
      width: 1.81818%;
      display: inline-block; }
      .designeraz__index__indexpoint__label:nth-child(2) {
        width: 2.5641%; }
      .designeraz__index__indexpoint__label:last-of-type {
        margin-right: 0; } }

@media (min-width: 42.563em) {
.touch .designeraz__list {
  max-height: 4300px; } }
#designeraz__sale__list {
display: none; }
#designeraz__sale__list .designeraz__list__group {
  display: block; }

.designeraz__categories,
.designeraz__list {
/* polyfill will be required for older browsers */
margin: auto; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__categories,
  .designeraz__list {
    clear: both;
    width: 100%;
    float: left;
    column-count: 1;
    -moz-column-count: 1;
    -webkit-column-count: 1;
    clear: both;
    margin-bottom: 30px;
    margin-top: 15px; } }
@media (min-width: 42.563em) and (max-width: 61.25em) {
  .designeraz__categories,
  .designeraz__list {
    width: 95.34884%;
    float: left;
    margin-left: 4.65116%;
    margin-right: -100%;
    column-count: 4;
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-gap: 0px;
    -moz-column-gap: 0px;
    -webkit-column-gap: 0px;
    margin-top: 5px;
    padding-left: 2.32558%;
    max-height: 3250px; } }
@media (min-width: 61.313em) and (max-width: 90em) {
  .designeraz__categories,
  .designeraz__list {
    width: 84.12698%;
    float: left;
    margin-left: 12.69841%;
    margin-right: -100%;
    column-count: 4;
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-gap: 60px;
    -moz-column-gap: 60px;
    -webkit-column-gap: 60px;
    -moz-column-fill: balance;
    margin-top: 15px;
    max-height: 3250px; } }
@media (min-width: 90.063em) {
  .designeraz__categories,
  .designeraz__list {
    width: 88.0597%;
    float: left;
    margin-left: 8.95522%;
    margin-right: -100%;
    margin-top: 20px;
    column-count: 5;
    -moz-column-count: 5;
    -webkit-column-count: 5;
    column-gap: 25px;
    -moz-column-gap: 25px;
    -webkit-column-gap: 25px;
    max-height: 3250px; } }
.designeraz__categories__group,
.designeraz__list__group {
  clear: both;
  width: 100%;
  float: left;
  float: none;
  -moz-column-fill: balance;
  break-inside: avoid-column;
  -webkit-column-break-inside: avoid;
  -moz-column-break-inside: avoid;
  -o-column-break-inside: avoid;
  column-break-inside: avoid;
  page-break-inside: avoid;
  display: table; }
  @media (min-width: 0em) and (max-width: 42.5em) {
    .designeraz__categories__group,
    .designeraz__list__group {
      padding-bottom: 0; } }
  @media (min-width: 42.563em) and (max-width: 61.25em) {
    .designeraz__categories__group,
    .designeraz__list__group {
      padding-right: 11.11111%; } }
  .designeraz__categories__group__heading,
  .designeraz__list__group__heading {
    font-size: 19px;
    font-family: Group4;
    font-weight: normal;
    text-align: left;
    padding-top: 20px;
    margin-top: 0; }
    @media (min-width: 90.063em) {
      .designeraz__categories__group__heading,
      .designeraz__list__group__heading {
        margin-bottom: 15px;
        font-size: 18px; } }
    @media (min-width: 61.313em) and (max-width: 90em) {
      .designeraz__categories__group__heading,
      .designeraz__list__group__heading {
        margin-bottom: 15px;
        font-size: 18px; } }
    @media (min-width: 42.563em) and (max-width: 61.25em) {
      .designeraz__categories__group__heading,
      .designeraz__list__group__heading {
        font-size: 15px;
        font-weight: normal;
        margin-bottom: 17px;
        letter-spacing: inherit; } }
    @media (min-width: 0em) and (max-width: 42.5em) {
      .designeraz__categories__group__heading,
      .designeraz__list__group__heading {
        clear: both;
        width: 100%;
        float: left;
        padding-left: 3.56798%;
        padding-right: 3.56798%;
        margin-left: -3.56798%;
        margin-bottom: 0;
        line-height: 40px;
        font-size: 16px;
        background-color: #efefef;
        border-top: 2px #dcdcdc solid;
        border-bottom: none;
        font-weight: normal; } }
.designeraz__categories__item,
.designeraz__list__item {
  display: block;
  letter-spacing: 0px;
  font: 300 12px/12px Group2, "Helvetica", "Arial", sans-serif;
  text-align: left;
  text-rendering: optimizeLegibility;
  text-transform: uppercase; }
  @media (min-width: 0em) and (max-width: 42.5em) {
    .designeraz__categories__item,
    .designeraz__list__item {
      clear: both;
      width: 100%;
      float: left;
      font-weight: bold;
      border-bottom: 1px solid #e1e1e1;
      margin-top: -1px;
      padding: 14px 0;
      line-height: 13px; } }
  .designeraz__categories__item:last-of-type,
  .designeraz__list__item:last-of-type {
    border-bottom: none; }
  .designeraz__categories__item:hover,
  .designeraz__list__item:hover {
    cursor: pointer;
    color: black; }
  .designeraz__categories__item.inactiveLink,
  .designeraz__list__item.inactiveLink {
    pointer-events: none;
    cursor: default;
    color: #999999; }
  @media (min-width: 42.563em) {
    .designeraz__categories__item,
    .designeraz__list__item {
      font-size: 11px;
      margin-bottom: 18px; } }
  @media (min-width: 61.313em) {
    .designeraz__categories__item,
    .designeraz__list__item {
      font-size: 11px;
      color: black;
      margin-bottom: 18px;
      display: inline-block; }
      .designeraz__categories__item:hover,
      .designeraz__list__item:hover {
        text-decoration: underline; } }
  @media (min-width: 90.063em) {
    .designeraz__categories__item,
    .designeraz__list__item {
      font-size: 11px;
      line-height: 12px;
      margin-bottom: 18px; } }

@media (min-width: 42.563em) {
.touch .designeraz__list__item {
  margin-bottom: 30px; } }
.designeraz__categories {
float: none;
padding-bottom: 30px;
border-bottom: 1px solid gray;
margin-bottom: 30px; }
@media (min-width: 0em) and (max-width: 42.5em) {
  .designeraz__categories {
    border-bottom: none; } }

@media (min-width: 42.563em) {
.designeraz__categories__wrapper {
  width: 95.34884%;
  border-top: 1px solid black;
  margin: 0 auto;
  padding: 0 2.32558% 0;
  height: 70px;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  clear: both; }
.designeraz__categories__link {
  display: inline-block;
  letter-spacing: 0;
  font: 800 14px/18px Group4;
  text-align: center;
  text-rendering: optimizeLegibility;
  text-transform: uppercase;
  color: #999999;
  margin: 28px 1% 0 3%; }
  .designeraz__categories__link:hover {
    border-bottom: 1px solid; } }
@media (min-width: 61.313em) {
.designeraz__categories__wrapper {
  width: 96.8254%;
  padding: 0 12.69841% 0;
  height: 80px; }
.designeraz__categories__link {
  margin: 28px 1% 0 3%; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized {
  min-height: 175px; }
  .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-box {
    width: 275px;
    background-color: white;
    border-left-color: #888;
    border-left-width: 1px;
    border-right-color: #888;
    border-right-width: 1px;
    border-top-color: #888;
    border-top-width: 1px;
    border-bottom-color: black;
    border-bottom-width: 6px;
    -webkit-box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.42);
    -moz-box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.42);
    box-shadow: 2px 3px 5px 0 rgba(0, 0, 0, 0.42);
    margin-left: 10px;
    margin-right: 12px; }
  .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 30px; }
    .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .mfBubble__designer {
      display: block;
      letter-spacing: 0;
      font: 700 16px/18px "Group1", serif;
      text-align: center;
      text-rendering: optimizeLegibility;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 11px;
      color: #000;
      margin-top: 20px; }
      .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .mfBubble__designer.subtitle_border {
        width: 40px;
        border-top: 1px solid black;
        margin: -6px auto 6px auto; }
      .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .mfBubble__designer.subtitle {
        font-size: 14px;
        margin-top: 0;
        text-transform: uppercase; }
    .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .mfBubble__desc {
      display: block;
      letter-spacing: 0;
      font: 300 11px/14px Group3, serif;
      text-align: center;
      text-rendering: optimizeLegibility;
      color: #181818; }
    .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container {
      padding-top: 20px;
      text-align: left;
      margin: 0 auto;
      width: 240px; }
      .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container.number_of_products-1, .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container.number_of_products-2, .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container.number_of_products-3 {
        padding-bottom: 18px; }
      .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container {
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        width: 71px; }
        .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(4), .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(5), .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(6) {
          margin-top: 18px; }
        .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(1), .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(2), .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(4), .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container:nth-child(5) {
          margin-right: 10px; }
        .tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-content .image-container .individual_image_container img {
          width: 100%;
          text-align: left; }

.tooltipster-noir.tooltipster-noir-customized .tooltipster-content {
  display: block;
  letter-spacing: 0;
  font: 300 11px/14px Group3, serif;
  text-align: center;
  text-rendering: optimizeLegibility;
  color: #181818; }

.tooltipster-sidetip.tooltipster-noir-customized.tooltipster-bottom .tooltipster-arrow-border {
  border-bottom-color: #888; }

.tooltipster-sidetip.tooltipster-noir-customized.tooltipster-left .tooltipster-arrow-border {
  border-left-color: #888; }

.tooltipster-sidetip.tooltipster-noir-customized.tooltipster-right .tooltipster-arrow-border {
  border-right-color: #888; }

.tooltipster-sidetip.tooltipster-noir-customized.tooltipster-top .tooltipster-arrow-border {
  border-top-color: #888; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized.tooltipster-right .tooltipster-arrow {
  height: 22px;
  margin-left: 0;
  margin-top: -12px;
  width: 11px; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized.tooltipster-right .tooltipster-arrow-uncropped {
  left: -12px; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-arrow-border {
  border-width: 12px; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized.tooltipster-right .tooltipster-arrow-background {
  border-right-color: #fff;
  left: 1px; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized .tooltipster-arrow-background {
  border: 12px solid transparent; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-noir-customized.tooltipster-left .tooltipster-arrow {
  height: 25px;
  margin-left: 0;
  margin-top: -11px;
  width: 19px; }

.tooltipster-sidetip.tooltipster-noir.tooltipster-left .tooltipster-arrow-background {
  border-left-color: #fff;
  left: -1px !important; }

.tooltipster-sidetip .tooltipster-arrow-uncropped {
  right: -6px; } }
@media (min-width: 90.063em) {
.designeraz__categories__wrapper {
  width: 94.02985%;
  padding: 0 11.9403% 0;
  height: 80px; }
}

</style>
