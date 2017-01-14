import { fromJS } from 'immutable';
import { PATIENTS } from './constants';

const initialState = fromJS({
  patient: PATIENTS[0],
});


function patientHistoryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default patientHistoryReducer;
