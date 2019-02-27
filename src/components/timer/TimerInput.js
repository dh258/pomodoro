import React from "react";

class TimerInput extends React.Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <div className="d-flex justify-content-center">
        <form onSubmit={onSubmit} className="form-group">
          <label for="timer">Enter timer minute: </label>
          <input
            className="form-control"
            type="number"
            value={value}
            onChange={onChange}
          />
        </form>
      </div>
    );
  }
}

export default TimerInput;
