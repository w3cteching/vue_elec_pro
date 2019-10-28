<template>
  <div>
      <swiper :options="swiperConfig" ref="mySwiper">
        <swiperSlide v-for="(item,index) in list" :key="index">
           <img :src="item" alt="">
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
         <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

     <p>{{ num }}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    data() {
      return {
        list: ['https://img30.360buyimg.com/babel/s1180x940_jfs/t1/85023/2/113/80935/5da6cd4bE3f857286/fd5030673ed1aa72.jpg.webp',
                'https://imgcps.jd.com/ling/963181/5LmQ5LqL5aSn54mM54uC5qyi/5L2O6IezNuaKmA/p-5bd81f3682acdd181dfeb407/5312a5f3.jpg',
                'https://img11.360buyimg.com/pop/s1180x940_jfs/t1/77961/39/13155/49010/5da7db06Eaa97b038/aa7bb81b583d2502.jpg.webp',
                'https://img13.360buyimg.com/pop/s1180x940_jfs/t1/82209/16/13406/158836/5dae81cdE68e3939c/b55e46a230b1a85f.jpg.webp'],
        swiperConfig:{
           slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
             type: 'fraction'
          },
          navigation:{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      ...mapState(['arr','num']),
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    components:{
      swiper,
      swiperSlide,
    }
  }
</script>

<style lang="scss" scoped>
img {
  height:200px;
}
</style>