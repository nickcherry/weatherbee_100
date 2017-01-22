export default function init(store) {
  window.Bugsnag.maxDepth = 10; // https://github.com/bugsnag/bugsnag-js/releases
  window.Bugsnag.releaseStage = process.env.NODE_ENV || 'development';
  window.Bugsnag.releaseStages = ['production'];
  window.Bugsnag.beforeNotify = (payload, metaData) => {
    metaData.state = store.getState().toJS(); // eslint-disable-line
    return true;
  };
}
