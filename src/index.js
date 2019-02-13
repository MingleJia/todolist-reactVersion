import React from 'react';
import ReactDOM from 'react-dom';

// App组件，大写字母开头的都是组件
import TodoList from './TodoList';
import './style.css';
// 将App组件挂载到rootDOM节点
// ReactDOM.render(<Clock />, document.getElementById('root'));
// 组件就是页面上的一部分
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date:new Date()}
    }

componentDidMount(){
    this.timeID = setInterval(
        () => this.tick(),
        1000
    )
}

componentWillUnmount(){
    clearInterval(this.timeID);
}

tick(){
    this.setState({
        date:new Date()
    })
}

render(){
    return(
        <div>
            <h1>hello world</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
    );
}
}

ReactDOM.render(
    <Clock></Clock>,
    document.getElementById('root')
);

// class Clock extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>hello world!</h1>
//                 <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
//             </div>
//         )
//     }
// }

// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     )
// }

// setInterval(tick,1000);

// function Clock(props){
//     return (
//         <div>
//             <h1>Hello Clock!</h1>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }

// function tick(){
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }

// setInterval(tick,1000)

// function formatDate(date){
//     return date.toLocaleDateString();
// }

// function Comment(props){
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }

// const comment = {
//     date:new Date(),
//     text:'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// );

