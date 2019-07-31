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

function getVisibleTodos(todos, visibility) {
  console.log("visibility", visibility);
  switch (visibility) {
    case "SHOW_ALL":
      return todos;
    case "TO_DO":
      return todos.filter(todo => todo.completed === false);
    case "COMPLETED":
      return todos.filter(todo => todo.completed === true);
    default:
      return todos;
  }
}

const mapDispatchToProps = {
  toggleTodo
};

const mapStateToProps = (state, ownProps) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibility)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
