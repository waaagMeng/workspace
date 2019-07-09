import React from 'react';
import {
  BrowserRouter as Router,//重命名下
  Route
} from 'react-router-dom';
import PageLayout from './page/Layout';
import 'antd/dist/antd.css';
//hashRouter #  通过hashChange
//historyRouter 不带#  BrowserRouter 实现方式是通过h5的History api
//刷新这个行为

function App() {
  return (
    <Router>
      <Route path="/" component={PageLayout} />
    </Router>
  );
}

export default App;
