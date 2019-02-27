import React from "react";

class TimerInput extends React.Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={onSubmit}>
          <label>Enter timer minute: </label>
          <input type="number" value={value} onChange={onChange} />
        </form>
      </div>
    );
  }
}

export default TimerInput;
