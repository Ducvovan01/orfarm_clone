<script setup>
 import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {ref} from 'vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.min.css'
const swiperOption = ref({
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
</script>
<template>
    <section class="blog-area pt-30">
        <div class="container-fluid">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
                <swiper-slide>Slide 10</swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
           <div class="swiper-container blog-active-3 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
              <div class="swiper-wrapper" id="swiper-wrapper-bc445a6c1e43ab32" aria-live="off" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                 <div class="swiper-slide swiper-slide-active" style="width: 452.667px; margin-right: 30px;" role="group" aria-label="1 / 4">
                    <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                          <img src="../assets/img/blog/blog-single-1.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                          <div class="tpblog__entry-wap">
                             <span class="cat-links"><a href="shop-details.html">Lifestyle</a></span>
                             <span class="author-by"><a href="#">Admin</a></span>
                             <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                          </div>
                          <h4 class="tpblog__single-title mb-20">
                             <a href="blog-details.html">Popular Reasons You Must Drinks <br> Juice Everyday</a>
                          </h4>
                          <a href="blog-details.html">Continue reading</a>
                       </div>
                    </div>
                 </div>
                 <div class="swiper-slide swiper-slide-next" style="width: 452.667px; margin-right: 30px;" role="group" aria-label="2 / 4">
                    <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                          <img src="../assets/img/blog/blog-single-2.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                          <div class="tpblog__entry-wap">
                             <span class="cat-links"><a href="shop-details.html">Lifestyle</a></span>
                             <span class="author-by"><a href="#">Admin</a></span>
                             <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                          </div>
                          <h4 class="tpblog__single-title mb-20">
                             <a href="blog-details.html">Popular Reasons You Must Drinks <br> Juice Everyday</a>
                          </h4>
                          <a href="blog-details.html">Continue reading</a>
                       </div>
                    </div>
                 </div>
                 <div class="swiper-slide" style="width: 452.667px; margin-right: 30px;" role="group" aria-label="3 / 4">
                    <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                          <img src="../assets/img/blog/blog-single-3.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                          <div class="tpblog__entry-wap">
                             <span class="cat-links"><a href="shop-details.html">Lifestyle</a></span>
                             <span class="author-by"><a href="#">Admin</a></span>
                             <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                          </div>
                          <h4 class="tpblog__single-title mb-20">
                             <a href="blog-details.html">Popular Reasons You Must Drinks <br> Juice Everyday</a>
                          </h4>
                          <a href="blog-details.html">Continue reading</a>
                       </div>
                    </div>
                 </div>
                 <div class="swiper-slide" role="group" aria-label="4 / 4" style="width: 452.667px; margin-right: 30px;">
                    <div class="tpblog__single p-relative">
                       <div class="tpblog__single-img">
                          <img src="../assets/img/blog/blog-single-1.jpg" alt="">
                       </div>
                       <div class="tpblog__single-text text-center">
                          <div class="tpblog__entry-wap">
                             <span class="cat-links"><a href="shop-details.html">Lifestyle</a></span>
                             <span class="author-by"><a href="#">Admin</a></span>
                             <span class="post-data"><a href="#">SEP 15. 2022</a></span>
                          </div>
                          <h4 class="tpblog__single-title mb-20">
                             <a href="blog-details.html">Popular Reasons You Must Drinks <br> Juice Everyday</a>
                          </h4>
                          <a href="blog-details.html">Continue reading</a>
                       </div>
                    </div>
                 </div>
              </div>
           <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
     </section>
</template>
<style scoped>
.tpblog__single-img {
    position: relative;
}
.tpblog__single-img::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background: rgba(10, 12, 31, 0.5);
}
.tpblog__single-img img {
    width: 100%;
    border-radius: 10px;
}
.tpblog__single-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
}
.tpblog__single-text .tpblog__entry-wap span {
    color: var(--tp-common-white);
}

.tpblog__entry-wap .cat-links {
    color: var(--tp-heading-secondary);
}
.tpblog__entry-wap span::after {
    position: absolute;
    content: "";
    height: 3px;
    width: 3px;
    border-radius: 50%;
    background-color: #CFD4DE;
    top: 50%;
    transform: translateY(-50%);
    right: 0px;
}
.tpblog__single-text .tpblog__entry-wap span {
    color: var(--tp-common-white);
}

@media only screen and (min-width: 1400px) and (max-width: 1600px), only screen and (min-width: 1200px) and (max-width: 1399px), only screen and (min-width: 576px) and (max-width: 767px) {
    .tpblog__entry-wap span {
        margin-right: 4px;
        padding-right: 7px;
    }
}
.tpblog__entry-wap span {
  
    margin-right: 8px;
    padding-right: 10px;
    position: relative;
    display: inline-block;
    margin-bottom: 8px;
}
.tpblog__entry-wap span a{
    font-weight: 500;
    font-size: 12px;
    text-transform: uppercase;
    color: var(--tp-common-white);
}
.tpblog__entry-wap span:last-child {
    margin-right: 0;
    padding-right: 0;
}
.tpblog__single-title a {
    font-weight: 700;
    font-size: 24px;
    line-height: 1.22;
    color: var(--tp-common-white);
}
.tpblog__entry-wap span a:hover {
    color: var(--tp-heading-secondary);
}
.tpblog__single-text > a {
    font-family: var(--tp-ff-jost);
    font-weight: 600;
    font-size: 12px;
    line-height: 17px;
    align-items: center;
    text-transform: uppercase;
    color: var(--tp-common-white);
}
.swiper-wrapper {
    display:flex;
}
</style>