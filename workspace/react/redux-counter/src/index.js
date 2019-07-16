import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
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
const store = createStore(index);
class Count extends React.Component {
    state = {}
    handleIn = () => {
        store.dispatch({type: 'INCREMENT'})
    }
    handleDE = () => {
        store.dispatch({type: 'DECREMENT'})
    }
    handleAddFilm = () => {
        store.dispatch({
            type:'ADD_FILM',
            film: {name:'123'}
        })
    }
    render() {
        return (
            <div>
                {/* 多个reducer组合在一起 count就是一个对象了 所以.count */}
                count: {store.getState().count}  
                <button onClick={this.handleIn}>+</button>
                <button onClick={this.handleDE}>-</button>
                <button onClick={this.handleAddFilm}>添加电影</button>
                {
                    //.map((film,i) => (<li></li>)) 要return
                    store.getState().films.map((film,i) => {
                        return (
                            <li key={i}>{film.name}</li>
                        )
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<Count />, document.getElementById('root'));
store.subscribe(() => {
    ReactDOM.render(<Count />, document.getElementById('root'));
})


