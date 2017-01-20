/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

/* Components */
import Waveform from '../Waveform';
import Wrapper from './Wrapper';

class Waveforms extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    flow: React.PropTypes.object,
    pressure: React.PropTypes.object,
    volume: React.PropTypes.object,
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
  const waveforms = state.getIn(['game', 'ventilator', 'waveforms']);
  return {
    flow: waveforms.get('flow'),
    pressure: waveforms.get('pressure'),
    volume: waveforms.get('volume'),
  };
}

export default connect(mapStateToProps)(Waveforms);
