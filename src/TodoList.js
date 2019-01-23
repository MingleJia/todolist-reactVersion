import React, { Component, Fragment } from 'react';
import TodoItem from './todoItem';

// 定义一个React组件
class TodoList extends Component {
  // 父组件通过属性向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  constructor(props){
    // 组件的构造函数 组件创建时，constructor函数自动被执行
    super(props); // 初始化
    this.state = { // 存放数据内容
      list:[],
      inputValue:''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  // handleItemClick(index){
  //   const list = [...this.state.list]; // 复制一个list的副本，避免直接修改原数据
  //   list.splice(index,1);
  //   this.setState({list})
  // }

  handleDelete(index){
    // console.log('index:',index)
    const list = [...this.state.list];
    list.splice(index,1);
    this.setState({list});
  }

  getTodoItems(){
      return (
        this.state.list.map((item,index) => {
          return (
            <TodoItem 
              delete = {this.handleDelete} 
              key={index} 
              content={item} 
              index={index}
            />
          );
          // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
        })
      )
  }

  render() {
    // jsx语法
    return (
      <Fragment>
        <div>
          {/* js表达式  */}
          {/* {1 + 2 } */}
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button className="red-btn" style={{background:'red',color:'#ccc'}} onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;
