import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

import VentilatorIcon from './VentilatorIcon';
import Wrapper from './Wrapper';

class PatientHistory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Link to="/">
          <VentilatorIcon />
        </Link>
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
