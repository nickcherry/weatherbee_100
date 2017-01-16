/* Third-Party Dependencies */
import { fromJS } from 'immutable';

/* Helpers / Services / Constants */
import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE, } from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    default:
      return state;
  }
}

export default languageProviderReducer;
