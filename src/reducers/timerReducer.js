import { START, STOP, RESET, TICK } from "./actions/types";

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
      break;
    case STOP:
      // Stop ticking
      // isRunning false
      break;
    case RESET:
      // Stop ticking
      // isRunning false
      // Reset back to initial state
      break;
    case TICK:
      // Tick clock 1 second
      // can be implemented as default (?)
      break;
    default:
      return state;
  }
};

export default timerReducer;
