var React = require('react');

export default class TodoBox extends React.Component {
    render() {
        return(
            <div className="todoBox">
                <TodoList data={this.props.data}/>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        var todo = this.props.data.map(function(obj) {
            return <Todo name={obj.name} key={obj.priority} priority={obj.priority} dueDate={obj.dueDate} checked={obj.checked}></Todo>
        });
        return(
            <div className="todoList">
                <table style={style.listStyle}>
                <tbody>
                    {todo}
                </tbody>
                </table>
            </div>
        );
    }
}

//TODO: Make this look better
class Todo extends React.Component {
    render() {
        return(
            <div className="todo">
                <tr><td style={style.todoStyle}>Name:</td><td style={style.todoStyle}>{this.props.name}</td></tr>
                <tr><td style={style.todoStyle}>Priority:</td><td style={style.todoStyle}>{this.props.priority}</td></tr>
                <tr><td style={style.todoStyle}>Due Date:</td><td style={style.todoStyle}>{this.props.dueDate}</td></tr>
                <tr><td style={style.todoStyle}>Checked:</td><td style={style.todoStyle}>{this.props.checked}</td></tr>
            </div>
        );
    }
}

let style = {
    todoStyle: {
        border: "1px solid black"
    },
    listStyle: {
        border: "2px solid black"
    }
};