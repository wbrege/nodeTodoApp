var React = require('react');

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        //Default Values
        this.state = {
            name: "TodoName",
            priority: 0,
            dueDate: null
        }
    }
    
    //TODO check for error and display

    render() {
        return (
            <form method="post">
                <fieldset>
                <legend>Create a new Todo:</legend>
                    <input type="text" name="name" value={this.state.name} /><br />
                    <input type="text" name="priority" value={this.state.priority} /><br />
                    <input type="text" name="dueDate" value={this.setState.dueDate} /><br />
                    <input type="submit" value="Make Todo!" /><br />
                </fieldset>
            </form>
        );
      }
}

