import { fromJS } from 'immutable';

const initialState = fromJS({
  patient: undefined,
});


function patientHistoryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default patientHistoryReducer;
