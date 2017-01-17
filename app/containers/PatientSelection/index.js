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
            <Patient patient={PATIENTS[0]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[1]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[2]} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS[3]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[4]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[5]} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS[6]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[7]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[8]} />
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Patient patient={PATIENTS[9]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[10]} />
          </Cell>
          <Cell>
            <Patient patient={PATIENTS[11]} />
          </Cell>
        </Row>
      </Wrapper>
    );
  }
}

export default connect()(PatientSelection);
