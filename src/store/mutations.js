const  mutations={
        INCREMENT(state,n) {
            //console.log('我才能真正改变数据的增加')
           // console.log('state:',state)
           // console.log('n', n);
            state.num += n;
        },
        DECREMENT(state,n) {
            state.num -= n;
        }
}

export default mutations;