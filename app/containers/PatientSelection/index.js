/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { PATIENTS } from './constants';

/* Components */
import Cell from '../../components/Cell';
import Patient from './Patient';
import Row from '../../components/Row';
import Wrapper from './Wrapper';

class PatientSelection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Row>
          <Cell>
            <Patient patient={PATIENTS.get(0)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(1)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(2)} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS.get(3)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(4)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(5)} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS.get(6)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(7)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(8)} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS.get(9)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(10)} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS.get(11)} />
          </Cell>
        </Row>
      </Wrapper>
    );
  }
}

export default connect()(PatientSelection);
