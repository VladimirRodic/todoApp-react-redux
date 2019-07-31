import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
//import { bindActionCreators } from "redux";

class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <button onClick={() => this.handleOnClick(this.state.inputValue)}>
          Add
        </button>
      </div>
    );
  }
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  handleOnClick(inputValueArg) {
    this.props.addTodo(inputValueArg);
    this.setState({
      inputValue: ""
    });
  }
}

const mapDispatchToProps = {
  addTodo
};

export default connect(
  null,
  mapDispatchToProps
)(InputTask);
