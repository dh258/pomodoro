import React from "react";

class TimerInput extends React.Component {
  render() {
    const { minutes, onChange } = this.props;
    return (
      <div>
        <form>
          <label>Enter custom timer</label>
          <input type="number" value={minutes} onChange={onChange} />
        </form>
      </div>
    );
  }
}

export default TimerInput;
