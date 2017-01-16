/* Third-Party Dependencies */
import { fromJS } from 'immutable';

/* Helpers / Services / Constants */
import { HIDE_MODAL, SHOW_MODAL } from './constants';

const initialState = fromJS({
  type: null,
  props: {},
});

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return state
        .set('type', action.modalType)
        .set('props', action.modalProps);
    case HIDE_MODAL:
      return initialState;
    default:
      return state;
  }
}

export default modalReducer;
