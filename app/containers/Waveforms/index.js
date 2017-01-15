import React from 'react';
import { connect } from 'react-redux';

import { getHexColor } from '../../utils/styleHelpers';

import Waveform from '../Waveform';
import Wrapper from './Wrapper';

class Waveforms extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    flow: React.PropTypes.array,
    pressure: React.PropTypes.array,
    volume: React.PropTypes.array,
  };

  render() {
    return (
      <Wrapper>
        <Waveform name="Flow" color={getHexColor('electricViolet')} data={this.props.flow} />
        <Waveform name="Pressure" color={getHexColor('dodgerBlue')} data={this.props.pressure} />
        <Waveform name="Volume" color={getHexColor('cerise')} data={this.props.volume} />
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const waveforms = state.getIn(['ventilator', 'waveforms']);
  return {
    flow: waveforms.get('flow').toJS(),
    pressure: waveforms.get('pressure').toJS(),
    volume: waveforms.get('volume').toJS(),
  };
}

export default connect(mapStateToProps)(Waveforms);
