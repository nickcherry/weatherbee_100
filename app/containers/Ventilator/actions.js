import { UPDATE_USER_INPUT, TICK } from './constants';

export function updateUserInput(inputName, inputValue) {
  return {
    type: UPDATE_USER_INPUT,
    inputName,
    inputValue,
  };
}

export function updateWaveforms() {
  return {
    type: TICK,
  };
}
