import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../store/actions/";

class TaskList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => this.props.toggleTodo(todo.id)}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = {
  toggleTodo
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
