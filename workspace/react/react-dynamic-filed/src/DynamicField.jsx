import React, { Component } from 'react';
let generateId = 0;
class DynamicField extends Component {
    state = {
        data: [
            {name: 'name1',age:18,id:0},
        ]
    }
    //收到onFieldValueChange函数传过来的值
    handleValueChange = (key,value,id) => {
        //不可变数据 复制一下这样就不影响state里的data数据 data.slice(0)浅拷贝
        let data = this.state.data.slice(0);
        let index = data.findIndex((item) => item.id === id);
        data[index][key] = value;
        this.setState({
            data
        })
    }
    handleDelete = (id) => {
        let data = this.state.data.slice(0);
        let index = data.findIndex((item) => item.id === id);
        data.splice(index,1);
        this.setState({
            data
        })
    }
    handleAdd = () => {
        let data = this.state.data.slice(0);
        data.push({
            name: '',age: 0, id: generateId++
        })
        //push返回的是一个数组的长度 
        this.setState({
            data
        })
    }
    render() {
        const { data } = this.state; 
        return (
            <>
            {
                data.map((filedData,i) => {
                    return (
                        <Field key={filedData.id} filedData={filedData} onFieldValueChange={this.handleValueChange} onFieldDelete={this.handleDelete}/>
                    )
                })
            }
            <br/>
            <button onClick={this.handleAdd}>添加</button>
            <br/>
            <button>提交</button>
            </>
        );
    }
}
class Field extends Component {
    state = {  }
    handleFiledChangeName = (e) => {
        const name =  e.target.value;
        const id = parseInt(e.target.dataset.id);
        const { onFieldValueChange } = this.props;
        onFieldValueChange('name',name,id)
    }
    handleFiledChangeAge = (e) => {
        const age = e.target.value;
        const id = parseInt(e.target.dataset.id);
        const { onFieldValueChange } = this.props;
        onFieldValueChange('age',age,id)
    }
    handleDelete = (e) => {
        const id = parseInt(e.target.dataset.id);
        const { onFieldDelete } = this.props;
        onFieldDelete(id);
    }
    render() {
        const { filedData } = this.props;
        const { name,age } = filedData; 
        return (
            <div>
                姓名：<input type="text" value={name} 
                data-id={filedData.id}
                onChange={this.handleFiledChangeName}/>
                年龄<input type="number" value={age} 
                data-id={filedData.id}
                onChange={this.handleFiledChangeAge}/>
                <button 
                data-id={filedData.id}
                onClick={this.handleDelete}>删除</button>
            </div>
        );
    }
}
 

export default DynamicField;