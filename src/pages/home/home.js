/* eslint-disable */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import Steps from 'iview/src/components/steps'
import Step from 'iview/src/components/step'

export default {
    name:'Home',
    compounents:{swiper,swiperSlide,Steps,Step},
    data(){
        return {
            swiperOption:{
                direction:'vertical',
                mousewheel:true,
                speed:600,
                // effect:'fade',
                // fadeEffect:{
                //     crossFade:true,
                // },
            }
        }
    },
    methods:{
        test(){
            this.$Message.info('this is iview')
        }
    },
    mounted(){
        console.log('这是第一版网页，做工略显粗糙，我会继续\n升级维护,这是用vue-cli脚手架编写的页\n面，用到了vue-awesome-swiper插件以及\niview组件库的组件，这个静态网页部署在\n阿里云服务器上。\n再次希望能得到一个工作面试的机会')
    }
}
