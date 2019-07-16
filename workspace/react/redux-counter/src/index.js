import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //和context的provider一样
import index from './reducer/index';
import Count from './App'

const store = createStore(index);


ReactDOM.render(
<Provider store={store}>
  <Count />
</Provider>
, document.getElementById('root'));



