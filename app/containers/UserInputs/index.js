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

  static propTypes = {
    fi02: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    flow: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    iTime: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    mode: React.PropTypes.string, // eslint-disable-line react/no-unused-prop-types
    peep: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    pressureControl: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    pressureSupport: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    rate: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    sensitivity: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
    tidalVolume: React.PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  };

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

  getIncrementSize(inputName) {
    if (inputName === 'tidalVolume') return 50;
    return 1;
  }

  render() {
    return (
      <Wrapper>
        {this.getRows().map((inputNames, rowIndex) => {
          const cells = inputNames.map((inputName, cellIndex) => {
            if (!inputName) {
              return <Cell key={cellIndex}><Placeholder /></Cell>;
            }
            return (
              <Cell key={cellIndex}>
                <NumericInput
                  name={inputName}
                  value={this.props[inputName]}
                  incrementSize={this.getIncrementSize(inputName)}
                >
                </NumericInput>
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
