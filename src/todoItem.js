import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    // 子组件跟父组件通信：调用父组件传来的方法
    handleDelete() {
        this.props.delete(this.props.index);
        console.log(this.props.index);
    }

    
    render() {
        const { content } = this.props; // es6结构赋值
        return (
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem;