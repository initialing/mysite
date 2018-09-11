/* eslint-disable */
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    name:'Home',
    compounents:{swiper,swiperSlide},
    data(){
        return {
            swiperOption:{
                autoplay: true,
            }
        }
    },
    methods:{

    },
}
