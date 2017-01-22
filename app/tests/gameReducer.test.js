/* Third-Party Dependencies */
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

/* App Dependencies */
import reducer from '../gameReducer';
// import { DISABLE_USER_INPUT_EDITING, ENABLE_USER_INPUT_EDITING, SIMVVC_MODE, WAVEFORM_DATA_POINTS, UPDATE_USER_INPUT, TICK } from '../containers/Ventilator/constants';
// import { PATIENTS, SELECT_PATIENT } from '../containers/PatientSelection/constants';

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
