<template>
    <div class="home">
        <div class='logo'>
            <a class='logo-link' href='https://github.com/initialing' target="blank"></a>
        </div>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide id='slide-1'>
                <div class="slide-1-body">
                    <h5>关于我</h5>
                    <hr/>
                    <p>郑秋桐</p>
                    <p>一名想成为前端工程师的同学</p>
                    <p>zqt_scholes@163.com</p>
                </div>
            </swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
        </swiper>
    </div>
</template>

<script src='./home.js'></script>
<style scoped></style>
<style src='./home.css'></style>
