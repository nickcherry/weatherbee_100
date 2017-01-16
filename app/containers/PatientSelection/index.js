/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import Wrapper from './Wrapper';

class PatientSelection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        Patients go here...
      </Wrapper>
    );
  }
}

export default connect()(PatientSelection);
