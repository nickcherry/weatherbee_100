import { includes, once } from 'lodash';

const KEY = 'weatherbee100';

const notify = once((err) => {
  window.Bugsnag.notify(err);
});

export function buildStorageMiddleware({ excludedActions = [] }) {
  return (store) => (next) => (action) => {
    if (!includes(excludedActions, action.type)) {
      setTimeout(() => {
        try {
          window.localStorage.setItem(KEY, JSON.stringify(store.getState()));
        } catch (err) {
          notify(err);
        }
      });
    }
    next(action);
  };
}

export function fetchState() {
  try {
    return JSON.parse(window.localStorage.getItem(KEY));
  } catch (err) {
    notify(err);
    return undefined;
  }
}
