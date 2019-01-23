import React from 'react';
import ReactDOM from 'react-dom';

// App组件，大写字母开头的都是组件
import TodoList from './TodoList';
import './style.css';
// 将App组件挂载到rootDOM节点
ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// 组件就是页面上的一部分