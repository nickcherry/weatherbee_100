/* Third-Party Dependencies */
import { memoize } from 'lodash';
import { connect } from 'react-redux';
import React from 'react';

/* Helpers / Services / Constants */
import { AVVC_MODE, ACPC_MODE, SIMVVC_MODE, SIMVPC_MODE, SPONT_MODE } from '../Ventilator/constants';

/* Components */
import Cell from '../../components/Cell';
import ModeInput from './ModeInput';
import NumericInput from './NumericInput';
import Placeholder from './Placeholder';
import Row from '../../components/Row';
import Wrapper from './Wrapper';

const NUMERIC_ROWS = {
  [AVVC_MODE]: [
    ['rate', 'tidalVolume', 'peep', 'fi02'],
    ['iTime', 'sensitivity', 'flow', null],
  ],
  [ACPC_MODE]: [
    ['rate', 'pressureControl', 'peep', 'fi02'],
    ['iTime', 'sensitivity', 'flow', null],
  ],
  [SIMVVC_MODE]: [
    ['rate', 'tidalVolume', 'pressureSupport', 'peep'],
    ['fi02', 'iTime', 'sensitivity', 'flow'],
  ],
  [SIMVPC_MODE]: [
    ['rate', 'tidalVolume', 'pressureSupport', 'peep'],
    ['fi02', 'iTime', 'sensitivity', 'flow'],
  ],
  [SPONT_MODE]: [
    ['pressureSupport', 'peep', 'fi02', 'iTime'],
    ['sensitivity', 'flow', null, null],
  ],
};

const numericRowsFor = memoize((mode) => {
  return NUMERIC_ROWS[mode].map((inputNames, rowIndex) => {
    const cells = inputNames.map((inputName, cellIndex) => {
      return (
        <Cell key={cellIndex}>
          {inputName ? <NumericInput name={inputName} /> : <Placeholder />}
        </Cell>
      );
    });
    return <Row key={rowIndex}>{cells}</Row>;
  });
});

export class UserInputs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    mode: React.PropTypes.string,
  }

  render() {
    return (
      <Wrapper>
        {numericRowsFor(this.props.mode)}
        <Row>
          <Cell>
            <ModeInput name="mode"></ModeInput>
          </Cell>
        </Row>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    mode: state.getIn(['game', 'ventilator', 'userInputs', 'mode']),
  };
}

export default connect(mapStateToProps)(UserInputs);
