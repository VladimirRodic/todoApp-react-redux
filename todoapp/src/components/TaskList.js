import React from "react";
import { connect } from "react-redux";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TaskList);
