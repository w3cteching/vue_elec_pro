const getters={
    totalPrice(state) {
        console.log('getters state:::',state)
        let total=0;
        state.arr.forEach((item,index)=>{
          return total+=item.price*item.num;
        });

        return total;
    },
    mingzizi:state=>state.Users.name,
    goodsmingzizi:state=>state.Goods.name
    
}

export default getters;