/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

/* Components */
import Waveform from '../Waveform';
import Wrapper from './Wrapper';

class Waveforms extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.flowColor = getHexColor('electricViolet');
    this.pressureColor = getHexColor('dodgerBlue');
    this.volumeColor = getHexColor('cerise');
  }

  render() {
    return (
      <Wrapper>
        <Waveform name="flow" title="Flow" color={this.flowColor} />
        <Waveform name="pressure" title="Pressure" color={this.pressureColor} />
        <Waveform name="volume" title="Volume" color={this.volumeColor} />
      </Wrapper>
    );
  }
}

export default connect()(Waveforms);
