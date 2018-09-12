/* eslint-disable */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'

export default {
    name:'Home',
    compounents:{swiper,swiperSlide},
    data(){
        return {
            swiperOption:{
                direction:'vertical',
                mousewheel:true,
                speed:800,
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
}
