const { createStore,combineReducers } = require('redux');
//action.type 常量 决定了这次dispatch要干什么
//reducer 可以收到 action的信息
const add = {
    type: 'INCREMENT'
}
const reduce = {
    type: 'DECREMENT'
}
//添加一步电影 action.type是ADD_FILM
//type + payload
function filmReducer(state = [],action) {
    switch (action.type) {
        case 'ADD_FILM':
            return [...state,action.film];   //返回一份新的数据
        default :
            return state;   
    }
}
function reducer(state,action) {
    console.log('reducer->>>>',action);
    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1
    }else {
         return 0;
    }
    // console.log('reducer触发了')
   
}
//多个reducer 要先组合 然后把组合后的reducer传给createStore
const index = combineReducers({
    count: reducer,
    films: filmReducer
})
//createStore 只接收reducer
const store = createStore(index);
store.subscribe(() => {
    console.log(store.getState());
})
store.dispatch(add);
store.dispatch(add);
store.dispatch(reduce);
store.dispatch({
    type: 'ADD_FILM',
    a: 1,
    b:2,
    id:0,
    film: {name: '狮子王'}
})




