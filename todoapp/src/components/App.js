import React from "react";

import InputTask from "./InputTask";
import TaskList from "./TaskList";
import VisibilityOptions from "./VisibilityOptions";

import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VisibilityOptions />
        <InputTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
