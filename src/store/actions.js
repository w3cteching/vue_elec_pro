const actions={
        //增加
        increment({ commit },n) {
          //  console.log('context:',context)
            console.log('n:::::::',n)
            commit('INCREMENT',n)
            
        },
        //减少
        decrement({ commit },n) {
            commit('DECREMENT',n)
        }
}

export default actions;