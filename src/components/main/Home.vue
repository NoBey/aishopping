<template>

<!-- <div class="ui container">
    <h1>AIShoppingParis</h1>

<ul class="slides">

    <input type="radio" name="radio-btn" id="img-1" checked />
    <li class="slide-container">
    <div class="slide">
      <img src="http://farm9.staticflickr.com/8072/8346734966_f9cd7d0941_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-6" class="prev">&#x2039;</label>
      <label for="img-2" class="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-2" />
    <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8504/8365873811_d32571df3d_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-1" class="prev">&#x2039;</label>
      <label for="img-3" class="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-3" />
    <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8068/8250438572_d1a5917072_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-2" class="prev">&#x2039;</label>
      <label for="img-4" class="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-4" />
    <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8061/8237246833_54d8fa37f0_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-3" class="prev">&#x2039;</label>
      <label for="img-5" class="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-5" />
    <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8055/8098750623_66292a35c0_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-4" class="prev">&#x2039;</label>
      <label for="img-6" class="next">&#x203a;</label>
    </div>
    </li>

    <input type="radio" name="radio-btn" id="img-6" />
    <li class="slide-container">
        <div class="slide">
          <img src="http://farm9.staticflickr.com/8195/8098750703_797e102da2_z.jpg" />
        </div>
    <div class="nav">
      <label for="img-5" class="prev">&#x2039;</label>
      <label for="img-1" class="next">&#x203a;</label>
    </div>
    </li>
</ul>

</div> -->
<div class="ui segment" sytle="    overflow-y: auto;">
<!-- <div id="slider">
<figure>
<img src="http://i4.download.fd.pchome.net/t_960x600/g1/M00/0D/1E/oYYBAFTJxqWIXFVZABsepp-h-nAAACQmwAcZ3kAGx6-244.jpg" alt>
<img src="http://atelierchristine.com/wp-content/uploads/2012/08/dolcegabbana-dg-fall-winter-2013-full-print-ad-campaign-italy-taormina-sicily-man-fashion-photography-marianovivanco-runway-menswear-baroque-modern-tailoring-05.jpg" alt>
<img src="https://r.lvmh-static.com/uploads/2014/07/sauvage_1992x1296_new2-1992x1296.jpg" alt>
<img src="http://www.balmain.com/media//alpencms/cms_block_image_116_1920x1080.jpg" alt>
<img src="https://pbs.twimg.com/media/C_LxjWkUwAEBmEy.jpg" alt>
</figure>
</div>

<div class="ui modal">
  <i class="close icon"></i>
  <div class="header">
    Profile Picture
  </div>
  <div class="content">
    <div class="ui medium image">
      <img src="/images/avatar/large/chris.jpg">
    </div>
    <div class="description">
      <div class="ui header">我们为你自动选择了一张资料图片.</div>
    <p>我们从<a href="https://www.gravatar.com" target="_blank">gravatar</a>抓取的下面这些图片，图像与你注册的邮箱地址相关.</p>
      <p>可以使用这张照片吗?</p>
    </div>
  </div>
  <div class="actions">
    <div class="ui black button">
      不可以
    </div>
    <div class="ui positive right labeled icon button">
      是的，那是我
      <i class="checkmark icon"></i>
    </div>
  </div>
</div> -->

<div class="home__wrapper" v-for="n in 3" >
      <div class="homegrid">
          <div class="homecard">
            <div class="homecard__image">
              <img src="https://unsplash.it/400/608?image=123" alt="">

              <div class="homecard__overlay homecard__overlay--indigo">
                <div class="homecard__overlay-content">
                  <ul class="homecard__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> topic</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 min ago</a></li>
                  </ul>

                  <a href="#0" class="homecard__title">文章又一个标题文章又一个标题文章又一个标题文章又一个标题</a>

                  <ul class="homecard__meta homecard__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> 作者</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> 分享</a></li>
                    <li><a href="#0"><i class="fa fa-weixin"></i> 分享</a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="homegrid">
          <div class="homecard">
            <div class="homecard__image">
              <img src="https://unsplash.it/400/300?image=100" alt="">

              <div class="homecard__overlay card__overlay--blue">
                <div class="homecard__overlay-content">
                  <ul class="homecard__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i>小心</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="homecard__title">文章又一个标题文章又一个标题</a>

                  <ul class="homecard__meta homecard__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> 作者</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> 分享</a></li>
                    <li><a href="#0"><i class="fa fa-weixin"></i>分享</a></li>                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="homegrid">
          <div class="homecard">
            <div class="homecard__image">
              <img src="https://unsplash.it/400/300?image=200" alt="">

              <div class="homecard__overlay homecard__overlay--indigo">
                <div class="homecard__overlay-content">
                <ul class="homecard__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> 美食</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="homecard__title">条条大路</a>

                  <ul class="homecard__meta homecard__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> 作者</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i>分享</a></li>
                    <li><a href="#0"><i class="fa fa-weixin"></i>分享</a></li>
                  </ul>    
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="homegrid">
          <div class="homecard">
            <div class="homecard__image">
              <img src="https://unsplash.it/400/300?image=300" alt="">

              <div class="homecard__overlay homecard__overlay--indigo">
                <div class="homecard__overlay-content">
                  <ul class="homecard__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Tutorials</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="homecard__title">有滋有味</a>

                  <ul class="homecard__meta homecard__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> 作者</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i> 分享</a></li>
                    <li><a href="#0"><i class="fa fa-weixin"></i> 分享</a></li>
                  </ul>   
                </div>
              </div>
            </div>
          </div>
      </div>

      <div class="homegrid">
          <div class="homecard">
            <div class="homecard__image">
              <img src="https://unsplash.it/400/300?image=400" alt="">

              <div class="homecard__overlay homecard__overlay--blue">
                <div class="homecard__overlay-content">
                  <ul class="homecard__meta">
                    <li><a href="#0"><i class="fa fa-tag"></i> Tutorials</a></li>
                    <li><a href="#0"><i class="fa fa-clock-o"></i> 2 days ago</a></li>
                  </ul>

                  <a href="#0" class="homecard__title">美不胜收</a>

                  <ul class="homecard__meta homecard__meta--last">
                    <li><a href="#0"><i class="fa fa-user"></i> 作者</a></li>
                    <li><a href="#0"><i class="fa fa-facebook-square"></i>分享</a></li>
                    <li><a href="#0"><i class="fa fa-weixin"></i>分享</a></li>
                  </ul>   
                </div>
              </div>
            </div>
          </div>
      </div>    
</div><!-- @end site__wrapper -->
</div>

</template>

<script>
  import WebPage from 'extensions/WebPage'

  export default WebPage.extend({
    data () {
      return {
        pageTitle: '首页'
      }
    },
    components: {}
  })
</script>
<style lang="scss" scoped>
    @import "../../../assets/slide.css";
</style>

