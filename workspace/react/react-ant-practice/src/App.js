import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import logo from './logo.svg';
import TouchableOpacity from './TouchableOpacity'
import './App.css';
import 'antd/dist/antd.css';

const size = 'large';
class App extends Component {
  constructor(props) {
    super(props);
    this.functinRef = null;
    this.objectRef = React.createRef();
    this.inpurRef = React.createRef();
  }
  state = {
    value: ''
  }
  handleInputChange = (e) => {
    let value = e.target.value;
    value = value.slice(0,10);
    this.setState({
      value
    })
  }
  componentDidMount() {
    //组件 挂载在页面上
    //通过原生js 操作 dom
    this.refs.strRef.innerHTML = 'String ref';
    this.functinRef.innerHTML = 'Function ref';
    this.objectRef.current.innerHTML = 'object ref'; //注意有current
    // this.functinRef.addEventListener('click',() => {
    //   console.log('functin ref clicked'); 不推荐
    //})
  }
  handlePrint1 = () => {
    console.log(this.inpurRef.current.value);

  }
  handlePrint2 = () => {

  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
          <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Normal</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <Button type="danger" size={size}>
          Danger
        </Button>
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" shape="round" icon="download" size={size}>
          Download
        </Button>
        <Button type="primary" icon="download" size={size}>
          Download
        </Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />
            Backward
          </Button>
          <Button type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </Button.Group>
        <TouchableOpacity>
          确定
          <a href="">确定</a>
        </TouchableOpacity>
        <TouchableOpacity>
          取消
        </TouchableOpacity>
        </div>
        <h1 ref="strRef"></h1>
        <h1 ref={(node) => {
          this.functinRef = node;
        }}></h1>
        <h1 ref={this.objectRef}></h1>
        {/* 非受控 value不受控*/}
        <input type="text" ref={this.inpurRef} />
        <button onClick={this.handlePrint1}>btn1</button> 
        {/* 受控 
        value  可以控制用户输入的长度
        state 来源应该单一 value来自于state
        */}
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <button onClick={this.handlePrint2}>btn2</button> 
      </div>
      
    );
  }
}

export default App;
