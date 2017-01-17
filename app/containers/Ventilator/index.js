/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { updateWaveforms } from './actions';
import { WAVEFORM_INTERVAL } from './constants';

/* Components */
import PatientFeedback from '../PatientFeedback';
import UserInputs from '../UserInputs/index';
import Waveforms from '../Waveforms/index';
import Wrapper from './Wrapper';

let interval;

class Ventilator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    updateWaveforms: React.PropTypes.func,
  };

  componentDidMount() {
    interval = setInterval(this.props.updateWaveforms, WAVEFORM_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <Wrapper>
        <PatientFeedback />
        <Waveforms />
        <UserInputs />
      </Wrapper>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateWaveforms: () => dispatch(updateWaveforms()),
  };
}

export default connect(this.props, mapDispatchToProps)(Ventilator);
