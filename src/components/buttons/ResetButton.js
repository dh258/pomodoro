import React from "react";
class ResetButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onClick}>Reset</button>
      </React.Fragment>
    );
  }
}

export default ResetButton;
