import { connect } from 'react-redux';
import React from 'react';

import { AVVC_MODE, ACPC_MODE, SIMVVC_MODE, SIMVPC_MODE, SPONT_MODE } from '../Ventilator/constants';

import Cell from './Cell';
import ModeInput from './ModeInput';
import NumericInput from './NumericInput';
import Placeholder from './Placeholder';
import Row from './Row';
import Wrapper from './Wrapper';

export class UserInputs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  getRows() {
    switch (this.props.mode) {
      case AVVC_MODE:
        return [['rate', 'tidalVolume', 'peep', 'fi02'],
                ['iTime', 'sensitivity', 'flow', null]];
      case ACPC_MODE:
        return [['rate', 'pressureControl', 'peep', 'fi02'],
                ['iTime', 'sensitivity', 'flow', null]];
      case SIMVVC_MODE:
        return [['rate', 'tidalVolume', 'pressureSupport', 'peep'],
                ['fi02', 'iTime', 'sensitivity', 'flow']];
      case SIMVPC_MODE:
        return [['rate', 'pressureControl', 'pressureSupport', 'peep'],
                ['fi02', 'iTime', 'sensitivity', 'flow']];
      case SPONT_MODE:
        return [['pressureSupport', 'peep', 'fi02', 'iTime'],
                ['sensitivity', 'flow', null, null]];
      default:
        return [];
    }
  }

  render() {
    return (
      <Wrapper>
        {this.getRows().map((inputNames, rowIndex) => {
          const cells = inputNames.map((inputName, cellIndex) => {
            if (!inputName) return <Cell key={cellIndex}><Placeholder /></Cell>;
            return (
              <Cell key={cellIndex}>
                <NumericInput name={inputName} value={this.props[inputName]}></NumericInput>
              </Cell>
            );
          });
          return <Row key={rowIndex}>{cells}</Row>;
        })}
        <Row>
          <Cell>
            <ModeInput name="mode" value={this.props.mode}></ModeInput>
          </Cell>
        </Row>
      </Wrapper>
    );
  }
}

UserInputs.propTypes = {
  fi02: React.PropTypes.number,
  flow: React.PropTypes.number,
  iTime: React.PropTypes.number,
  mode: React.PropTypes.string,
  peep: React.PropTypes.number,
  pressureControl: React.PropTypes.number,
  pressureSupport: React.PropTypes.number,
  rate: React.PropTypes.number,
  sensitivity: React.PropTypes.number,
  tidalVolume: React.PropTypes.number,
};

function mapStateToProps(state) {
  const userInputs = state.getIn(['ventilator', 'userInputs']);
  return {
    fi02: userInputs.get('fi02'),
    flow: userInputs.get('flow'),
    iTime: userInputs.get('iTime'),
    mode: userInputs.get('mode'),
    peep: userInputs.get('peep'),
    pressureControl: userInputs.get('pressureControl'),
    pressureSupport: userInputs.get('pressureSupport'),
    rate: userInputs.get('rate'),
    sensitivity: userInputs.get('sensitivity'),
    tidalVolume: userInputs.get('tidalVolume'),
  };
}

export default connect(mapStateToProps)(UserInputs);
