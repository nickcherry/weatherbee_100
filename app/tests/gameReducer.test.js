/* Third-Party Dependencies */
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

/* App Dependencies */
import reducer from '../gameReducer';
import { DISABLE_USER_INPUT_EDITING, ENABLE_USER_INPUT_EDITING } from '../containers/Ventilator/constants';
import { PATIENTS, SELECT_PATIENT } from '../containers/PatientSelection/constants';

/* Setup */
const expect = chai.expect;
chai.use(chaiImmutable);

describe('default state', () => {
  it('should return a default state', () => {
    const state = reducer(undefined, {});
    const patient = state.get('patient');
    const ventilator = state.get('ventilator');
    const patientFeedback = ventilator.get('patientFeedback');
    const userInputs = ventilator.get('userInputs');
    const waveforms = ventilator.get('waveforms');

    expect(ventilator).to.have.property('editing');
    expect(ventilator).to.have.property('time');

    ['age', 'description', 'gender', 'id', 'name', 'unlocked'].forEach((prop) => {
      expect(patient).to.have.property(prop);
    });

    expect(patientFeedback).to.have.keys([
      'freq',
      'ie',
      'map',
      'minuteVolume',
      'peep',
      'pip',
      'tidalVolume',
    ]);

    expect(userInputs).to.have.keys([
      'fi02',
      'flow',
      'iTime',
      'mode',
      'peep',
      'pressureControl',
      'pressureSupport',
      'rate',
      'sensitivity',
      'tidalVolume',
    ]);

    expect(waveforms).to.have.keys([
      'flow',
      'pressure',
      'volume',
    ]);
  });
});

describe('SELECT_PATIENT', () => {
  it('should select the patient', () => {
    const patient = PATIENTS.last();
    const state = reducer(undefined, { type: SELECT_PATIENT, patient });
    expect(state).to.have.property('patient', patient);
  });
});

describe('DISABLE_USER_INPUT_EDITING', () => {
  it('should disable editing', () => {
    const state = reducer(undefined, { type: DISABLE_USER_INPUT_EDITING });
    expect(state).to.have.deep.property('ventilator.editing', undefined);
  });
});

describe('ENABLE_USER_INPUT_EDITING', () => {
  it('should enable editing', () => {
    const inputName = 'someInput';
    const state = reducer(undefined, { type: ENABLE_USER_INPUT_EDITING, inputName });
    expect(state).to.have.deep.property('ventilator.editing', inputName);
  });
});
