import { START, STOP, RESET, TICK, SET } from "../actions/types";

const INIT = {
  minutes: "25",
  seconds: "00",
  isRunning: false,
  timerInput: ""
};

const timerReducer = (state = INIT, action) => {
  switch (action.type) {
    case START:
      // isRunning true
      // Start ticking
      return {
        ...state,
        isRunning: true
      };

    case STOP:
      // Stop ticking
      // isRunning false
      return {
        ...state,
        isRunning: false
      };

    case RESET:
      // Stop ticking
      // isRunning false
      // Reset back to initial state
      return {
        ...state,
        isRunning: false,
        minutes: this.state.timerInput
      };

    case TICK:
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds
      };

    case SET:
      return {
        ...state,
        timerInput: action.payload
      };

    default:
      return state;
  }
};

export default timerReducer;
