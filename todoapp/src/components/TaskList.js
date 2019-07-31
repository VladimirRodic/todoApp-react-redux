import React from "react";
import { connect } from "react-redux";

function TaskList() {
  return (
    <div>
      <ul>
        <li>first</li>
        <li>second</li>
        <li>third</li>
      </ul>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TaskList);
