<template>
  <div class="home">
     <h2>home</h2>
     <p>vuex1:: {{ num  }}</p>
     <button @click="increment(9)">增加-苏日娜</button>
     <button @click="decrement(9)">减少-李阳</button>
  
     <p>aaaa{{ mingzizi }}</p>
     <p>{{ goodsmingzizi }}</p>
     <ul v-if="loading">
       <li v-for="(item) in list" :key="item.id">
          {{ item.name }}
          <img :src="item.imgurl" alt="">
       </li>
     </ul>

     <p v-else>正在加载中。。。</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import {mapState,mapActions,mapGetters} from 'vuex';

export default {
  name: 'home',
  data() {
    return {
      n:100,
      loading:false,
      list:[]
    }
  },
  created() {
    this.getData();
  },
  computed:{
    /*
     mingzi() {
       return this.$store.state.Users.name
     },
     goodsmingzi() {
       return this.$store.state.Goods.name
     },
     */
     ...mapState(['num','arr']),
     ...mapGetters(['totalPrice','mingzizi','goodsmingzizi']),
    
     /*
     vuexstatenum() {
       console.log('this.$store.state：',this.$store.state)
       return this.$store.state.num;
     },
     vuexstatearr() {
       console.log('this.$store.state：',this.$store.state)
       return this.$store.state.arr;
     },*/


  },
  methods:{
    getData() {
      //在组件中如何用
      this.$http.get('http://www.1902A.com/api/goods')
          .then(res=>{
            console.log('我请求的数据：',res)
            if(res.status===200 && res.statusText==="OK") {
               console.log(1111111111)
               this.loading=true;
               this.list=res.data.data;
            }
          })
          .catch(error=>{
            console.log('报错啦')
          })
    },
    ...mapActions(['increment','decrement'])
    /*
    add() {
      this.$store.dispatch('increment',this.n)
    }
    */
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss" scoped>

</style>
