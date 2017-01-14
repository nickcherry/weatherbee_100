import React from 'react';
import { connect } from 'react-redux';
// import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';

class PatientHistory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
      </Wrapper>
    );
  }
}

PatientHistory.propTypes = {
};

function mapDispatchToProps() {
  return {
  };
}

export default connect(this.props, mapDispatchToProps)(PatientHistory);
