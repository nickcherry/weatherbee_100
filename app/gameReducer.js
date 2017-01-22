import { fromJS } from 'immutable';
import { DISABLE_USER_INPUT_EDITING, ENABLE_USER_INPUT_EDITING, SIMVVC_MODE, WAVEFORM_DATA_POINTS, UPDATE_USER_INPUT, TICK } from './containers/Ventilator/constants';
import { PATIENTS, SELECT_PATIENT } from './containers/PatientSelection/constants';

import calculateFreq from './containers/Ventilator/calculators/patientFeedback/freq';
import calculateIe from './containers/Ventilator/calculators/patientFeedback/ie';
import calculateMap from './containers/Ventilator/calculators/patientFeedback/map';
import calculateMinuteVolume from './containers/Ventilator/calculators/patientFeedback/minuteVolume';
import calculatePeep from './containers/Ventilator/calculators/patientFeedback/pip';
import calculatePip from './containers/Ventilator/calculators/patientFeedback/peep';
import calculateTidalVolume from './containers/Ventilator/calculators/patientFeedback/tidalVolume';

import calculateFlow from './containers/Ventilator/calculators/waveforms/flow';
import calculatePressure from './containers/Ventilator/calculators/waveforms/pressure';
import calculateVolume from './containers/Ventilator/calculators/waveforms/volume';

const initialState = fromJS({
  patient: PATIENTS.first(),
  ventilator: {
    editing: undefined,
    time: 0,
    userInputs: {
      fi02: 0,
      flow: 0,
      iTime: 0,
      mode: SIMVVC_MODE,
      peep: 0,
      pressureControl: 0,
      pressureSupport: 0,
      rate: 0,
      sensitivity: 0,
      tidalVolume: 0,
    },
    patientFeedback: {
      freq: 0,
      ie: 0,
      map: 0,
      minuteVolume: 0,
      peep: 0,
      pip: 0,
      tidalVolume: 0,
    },
    waveforms: {
      flow: [],
      pressure: [],
      volume: [],
    },
  },
});

function handleSelectPatient(state, action) {
  return state.set('patient', fromJS(action.patient));
}

function handleDisableUserInputEditing(state) {
  return state.setIn(['ventilator', 'editing'], undefined);
}

function handleEnableUserInputEditing(state, action) {
  return state.setIn(['ventilator', 'editing'], action.inputName);
}

function handleUpdateUserInput(state, action) {
  return state.setIn(['ventilator', 'userInputs', action.inputName], action.inputValue);
}

function handleTick(state) {
  const time = state.getIn(['ventilator', 'time']) + 1;
  const patient = state.get('patient').toJS();
  const userInputs = state.getIn(['ventilator', 'userInputs']).toJS();
  const existingWaveforms = state.getIn(['ventilator', 'waveforms']).toJS();

  function shiftData(waveforms, calculator) {
    return waveforms
      .slice(-WAVEFORM_DATA_POINTS)
      .concat(calculator(time, patient, userInputs));
  }

  return state
    .setIn(['ventilator', 'time'], time)
    .setIn(['ventilator', 'patientFeedback'], fromJS({
      freq: calculateFreq(time, patient, userInputs),
      ie: calculateIe(time, patient, userInputs),
      map: calculateMap(time, patient, userInputs),
      minuteVolume: calculateMinuteVolume(time, patient, userInputs),
      peep: calculatePeep(time, patient, userInputs),
      pip: calculatePip(time, patient, userInputs),
      tidalVolume: calculateTidalVolume(time, patient, userInputs),
    }))
    .setIn(['ventilator', 'waveforms'], fromJS({
      flow: shiftData(existingWaveforms.flow, calculateFlow),
      pressure: shiftData(existingWaveforms.pressure, calculatePressure),
      volume: shiftData(existingWaveforms.volume, calculateVolume),
    }));
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_PATIENT:
      return handleSelectPatient(state, action);
    case DISABLE_USER_INPUT_EDITING:
      return handleDisableUserInputEditing(state, action);
    case ENABLE_USER_INPUT_EDITING:
      return handleEnableUserInputEditing(state, action);
    case UPDATE_USER_INPUT:
      return handleUpdateUserInput(state, action);
    case TICK:
      return handleTick(state);
    default:
      return state;
  }
}

export default reducer;
