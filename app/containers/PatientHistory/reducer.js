import { fromJS } from 'immutable';

const initialState = fromJS({
});


function patientHistoryReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default patientHistoryReducer;
