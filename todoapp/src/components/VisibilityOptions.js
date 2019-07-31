import React from "react";
import { connect } from "react-redux";
import { setVisibility } from "../store/actions/";

class VisibilityOptions extends React.Component {
  render() {
    return (
      <div className="visibilityOptions">
        {/*eslint-disable-next-line*/}
        Show:
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.props.setVisibility("ALL");
          }}
          class={this.props.visibility === "ALL" ? "normalText" : ""}
        >
          All
        </a>
        {/*eslint-disable-next-line*/}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.props.setVisibility("TO_DO");
          }}
          class={this.props.visibility === "TO_DO" ? "normalText" : ""}
        >
          To Do
        </a>
        {/*eslint-disable-next-line*/}
        <a
          href="#"
          onClick={e => {
            e.preventDefault();
            this.props.setVisibility("COMPLETED");
          }}
          class={this.props.visibility === "COMPLETED" ? "normalText" : ""}
        >
          Completed
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    visibility: state.visibility
  };
};

const mapDispatchToProps = {
  setVisibility
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityOptions);
//export default VisibilityOptions;
