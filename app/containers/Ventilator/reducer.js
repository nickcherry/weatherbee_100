import { fromJS } from 'immutable';
import { SIMVVC_MODE, WAVEFORM_DATA_POINTS, UPDATE_USER_INPUT, TICK } from './constants';

import calculateFreq from './calculators/patientFeedback/freq';
import calculateIe from './calculators/patientFeedback/ie';
import calculateMap from './calculators/patientFeedback/map';
import calculateMinuteVolume from './calculators/patientFeedback/minuteVolume';
import calculatePeep from './calculators/patientFeedback/pip';
import calculatePip from './calculators/patientFeedback/peep';
import calculateTidalVolume from './calculators/patientFeedback/tidalVolume';

import calculateFlow from './calculators/waveforms/flow';
import calculatePressure from './calculators/waveforms/pressure';
import calculateVolume from './calculators/waveforms/volume';

const initialState = fromJS({
  time: 0,
  userInputs: {
    fi02: 1,
    flow: 1,
    iTime: 1,
    mode: SIMVVC_MODE,
    peep: 1,
    pressureControl: 1,
    pressureSupport: 1,
    rate: 1,
    sensitivity: 1,
    tidalVolume: 1,
  },
  patientFeedback: {
    freq: 10,
    ie: 20,
    map: 30,
    tidalVolume: 40,
    pip: 50,
    peep: 60,
    minuteVolume: 70,
  },
  waveforms: {
    flow: [],
    pressure: [],
    volume: [],
  },
});

function handleUpdateUserInput(state, action) {
  return state.setIn(['userInputs', action.inputName], action.inputValue);
}

function handleTick(state) {
  const time = state.get('time') + 1;
  const userInputs = state.get('userInputs').toJS();
  const existingWaveforms = state.get('waveforms').toJS();

  function shiftData(waveforms, calculator) {
    return waveforms
      .slice(-WAVEFORM_DATA_POINTS)
      .concat(calculator(time, userInputs));
  }

  return state
    .set('time', time)
    .set('patientFeedback', fromJS({
      freq: calculateFreq(time, userInputs),
      ie: calculateIe(time, userInputs),
      map: calculateMap(time, userInputs),
      minuteVolume: calculateMinuteVolume(time, userInputs),
      peep: calculatePeep(time, userInputs),
      pip: calculatePip(time, userInputs),
      tidalVolume: calculateTidalVolume(time, userInputs),
    }))
    .set('waveforms', fromJS({
      flow: shiftData(existingWaveforms.flow, calculateFlow),
      pressure: shiftData(existingWaveforms.pressure, calculatePressure),
      volume: shiftData(existingWaveforms.volume, calculateVolume),
    }));
}

function ventilatorReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_INPUT:
      return handleUpdateUserInput(state, action);
    case TICK:
      return handleTick(state);
    default:
      return state;
  }
}

export default ventilatorReducer;
