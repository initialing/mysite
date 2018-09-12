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
            <swiper-slide id="slide-3">
                <div class="slide-3-body">
                    <div class="s3-title">
                        <h5>相关技能</h5>
                    </div>
                    <div class="html">
                        <p>html</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>熟练</p>
                    </div>
                    <div class="css">
                        <p>css</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>熟练</p>
                    </div>
                    <div class="hjs">
                        <p>js</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>熟练</p>
                    </div>
                    <div class="vue">
                        <p>vue.js</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>熟练</p>
                    </div>
                    <div class="node">
                        <p>node.js</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>了解</p>
                    </div>
                    <div class="python">
                        <p>python</p>
                        <span class="total"><span class="percent"></span></span>
                        <p>了解</p>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide id="slide-4">
                <div class="slide-4-body">
                    <div class="s4-title">
                        <h5>教育经历</h5>
                    </div>
                    <Steps :current="1" direction="vertical">
                        <Step title="2012-2016" content="本科：东华大学机械工程"></Step>
                        <Step title="2016至今" content="硕士：东华大学机电控制工程"></Step>
                    </Steps>
                </div>
            </swiper-slide>
            <swiper-slide id="slide-5">
                <div class="slide-5-body">
                    <div class="s5-title">
                        <h5>项目实习经历</h5>
                    </div>
                    <div class="s5-content">
                        <div class="date">
                            <p>2018.5至今</p>
                        </div>
                        <div class="situation">
                            <p>&lt;web前端工程师&gt;</p>
                        </div>
                        <div class="work">
                            <ul>
                                <li>编写网页所需的VUE组件</li>
                                <li>编写雪佛兰经销商素材管理的页面</li>
                                <li>编写雪佛兰经销商微信服务号的搜索页面</li>
                                <li>参与编写泛亚售车电商平台的经销商端的操作页面</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide id="slide-6">
                <div class="slide-6-body">
                    <div class="s6-title">
                        <h5>感谢浏览</h5>
                    </div>
                    <div class="s6-content">
                        <p>我相信学习能力是职业生涯的关键</p>
                        <p>前端编程魅力能及时获取工作效果正向反馈</p>
                        <p>前端编程即兴趣所在，希望能给我面试机会</p>
                    </div>
                </div>
                <div class="bottom">请尝试Ctrl+Shift+I,点击console</div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script src='./home.js'></script>
<style scoped></style>
<style src='./home.css'></style>
