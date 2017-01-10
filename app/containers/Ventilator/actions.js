import { DISABLE_USER_INPUT_EDITING, ENABLE_USER_INPUT_EDITING, UPDATE_USER_INPUT, TICK } from './constants';

export function enableUserInputEditing(inputName) {
  return {
    type: ENABLE_USER_INPUT_EDITING,
    inputName,
  };
}

export function disableUserInputEditing(inputName) {
  return {
    type: DISABLE_USER_INPUT_EDITING,
    inputName,
  };
}

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
