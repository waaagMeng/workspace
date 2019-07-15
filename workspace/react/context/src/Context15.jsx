import React, { Component } from 'react';
import propTypes from 'prop-types';
class Context extends Component { //父
    state = {
        theme: 'red'
    }
    //后代组件可以从这里取信息
    getChildContext() {
        return {
            theme: this.state.theme
        }
    }
    // handleToggleTheme = (e) => {
    //      const theme = e.target.dataset.theme;
    //      this.setState({
    //          theme
    //      })
    // }方法一

    // handleToggleTheme = (theme) => () => {
    //     this.setState({
    //         theme
    //     })
    // }方法二

    handleToggleTheme = (theme) => {
        this.setState({
            theme
        })
    }
    render() { 
        const msg = ['str1','str2','str3'];
        return (
            <div>
                {
                    msg.map((item,i) => {
                        return (
                            <Message key={i} text={item} />
                        )
                    })
                }
                {/* 方法一：把要传的参数绑定自定义属性上去(简单的数据类型这样) 在方法上取下来 */}
                {/* <button onClick={this.handleToggleTheme} data-theme="purple">purple</button>
                <button onClick={this.handleToggleTheme} data-theme="yellowgreen">yellowgreen</button> */}
                {/* 方法二 */}
                {/* <button onClick={this.handleToggleTheme('purple')} data-theme="purple">purple</button>
                <button onClick={this.handleToggleTheme('yellowgreen')} data-theme="yellowgreen">yellowgreen</button> */}
                {/* 方法三  总之onclick里要返回一个函数*/}
                <button onClick={() => {this.handleToggleTheme('purple')}} data-theme="purple">purple</button>
                <button onClick={() => {this.handleToggleTheme('yellowgreen')}}data-theme="yellowgreen">yellowgreen</button>
            </div>
        );
    }
}
//通过一个静态属性childContextTypes声明提供给子组件的Context对象的属性 也可用static childContextType声明
Context.childContextTypes= {
    theme: propTypes.string
}
class Message extends Component {  //子
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { text } = this.props;
        return (
            <li>
                { text }
                <MyButton />
            </li>
        )
    }
}
class MyButton extends Component { //孙
    static contextTypes = {
        theme: propTypes.string
    }
    render() {
        const { theme } =this.context;
        return (
            <button style={{
                color: theme
            }}>delete</button>
        )
    }
}
export default Context;