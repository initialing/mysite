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
            <swiper-slide id="slide-2">
                <div class="slide-2-body">
                    <div class="s2-message">
                        <div class="age"><span></span><p>年龄：24</p></div>
                        <div class="graduate"><span></span><p>学历：硕士</p></div>
                        <div class="possition"><span></span><p>学校：东华大学</p></div>
                        <div class="eng"><span></span><p>六级：510分</p></div>
                    </div>
                    <div class="s2-content">
                        <p>虽然我的专业为机械工程，但我在做了机械与前端的相关</p>
                        <p>工作后，感觉前端工程师这一岗位更能带给我成就感，提</p>
                        <p>高对工作的兴趣。以后的工作行业也会选择前端工程师，</p>
                        <p>尽管所学专业非计算机，但内在学习规律相同，有信心接</p>
                        <p>受前端技术快速发展的挑战，不断学习，不断进步。</p>
                    </div>
                </div>
            </swiper-slide>
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
