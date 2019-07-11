import React, { Component } from 'react';
import { connect } from 'react-redux'; //将中央的数据流向组件共享

class Counter extends Component {
    state = {  }
    render() { 
        return (
            <p>
                Clicked:{this.props.count}
                times
            </p>
        );
    }
}
// 1. map共享状态
// 2. 作为参数传给组件
 const mapStateToProps = (state) => {
    //  connect 会找到这个参数，把state交给你，
     return {
         count: state.count
     }
 }
 //组件使用中央数据： 将组件进行包装 利用connect
export default connect(mapStateToProps)(Counter);