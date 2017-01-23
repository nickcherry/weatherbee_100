// https://github.com/TheCocoaProject/cordova-plugin-nativestorage#why
import { includes } from 'lodash';

const KEY = 'state';

export function isNativeStorageSupported() {
  return !!window.NativeStorage;
}

export function buildStorageMiddleware({ excludedActions = [] }, successCallback, errorCallback) {
  return (store) => (next) => (action) => {
    if (isNativeStorageSupported()) {
      if (!includes(excludedActions, action.type)) {
        // Wait until next loop, allowing reducers to update state
        setTimeout(() => {
          const state = store.getState().remove('route');
          window.NativeStorage.setItem(KEY, JSON.stringify(state), successCallback, errorCallback);
        });
      }
    }
    next(action);
  };
}

export function fetchState(successCallback, errorCallback) {
  window.NativeStorage.getItem(KEY, (data) => {
    successCallback(JSON.parse(data));
  }, errorCallback);
}
