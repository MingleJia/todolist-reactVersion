import React, { Component } from 'react';

// 定义一个React组件
class TodoList extends Component {
  constructor(props){
    // 组件的构造函数 组件创建时，constructor函数自动被执行
    super(props); // 初始化
    this.state = { // 存放数据内容
      list:[],
      inputValue:''
    }
  }
  handleBtnClick() {
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  handleItemClick(index){
    const list = [...this.state.list]; // 复制一个list的副本，避免直接修改原数据
    list.splice(index,1);
    this.setState({
      list,
    })
  }

  render() {
    // jsx语法
    return (
      <div>
        <div>
          {/* js表达式  */}
          {/* {1 + 2 } */}
          <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
          <button onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {
            this.state.list.map((item,index) => {
              return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
