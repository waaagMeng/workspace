import { combineReducers } from 'redux';

function reducer(state, action) {
    console.log('reducer->>>>', action);
    if (action.type === 'INCREMENT') {
      return state + 1;
    } else if (action.type === 'DECREMENT') {
      return state - 1;
    } else {
      return 0;
    }
  }
  function filmReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_FILM':
        return [...state, action.film];
      default :
        return state;
    }
  }
const index =  combineReducers({
    count:reducer,
    films: filmReducer
})

export default index;