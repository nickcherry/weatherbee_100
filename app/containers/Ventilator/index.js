import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { updateWaveforms } from './actions';
import { WAVEFORM_INTERVAL } from './constants';
import messages from './messages';

import H1 from '../../components/H1';
import PatientFeedback from '../PatientFeedback';
import UserInputs from '../UserInputs/index';
import Waveforms from '../Waveforms/index';
import Wrapper from './Wrapper';

let interval;

class Ventilator extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    interval = setInterval(this.props.updateWaveforms, WAVEFORM_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(interval);
  }

  render() {
    return (
      <Wrapper>
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <PatientFeedback />
        <Waveforms />
        <UserInputs />
      </Wrapper>
    );
  }
}

Ventilator.propTypes = {
  updateWaveforms: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    updateWaveforms: () => dispatch(updateWaveforms()),
  };
}

export default connect(this.props, mapDispatchToProps)(Ventilator);
