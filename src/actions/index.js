import { START, STOP, RESET, TICK, SET } from "./types";

export const setTimer = minutes => {
  return {
    type: SET,
    payload: minutes
  };
};

export const startTimer = () => {
  return {
    type: START
  };
};

export const stopTimer = () => {
  return {
    type: STOP
  };
};

export const resetTimer = minutes => {
  if (minutes !== "") {
    return {
      type: RESET,
      payload: minutes
    };
  } else {
    return {
      type: RESET,
      payload: "25"
    };
  }
};

export const tick = (min, sec) => {
  return {
    type: TICK,
    minutes: min,
    seconds: sec
  };
};
