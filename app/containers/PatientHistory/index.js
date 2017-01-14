import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router';
const PageTransition = require('react-router-page-transition').default(React, ReactDom);
// import { FormattedMessage } from 'react-intl';

import PatientDescription from './PatientDescription';
import PatientName from './PatientName';
import VentilatorIcon from './VentilatorIcon';
import Wrapper from './Wrapper';

class PatientHistory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <PageTransition>
        <Wrapper>
          <Link to="/">
            <VentilatorIcon />
          </Link>
          <PatientName>{this.props.name}</PatientName>
          <PatientDescription>{this.props.description}</PatientDescription>
        </Wrapper>
      </PageTransition>
    );
  }
}

PatientHistory.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string,
};

function mapStateToProps(state) {
  return {
    name: state.getIn(['patientHistory', 'patient', 'name']),
    description: state.getIn(['patientHistory', 'patient', 'description']),
  };
}

export default connect(mapStateToProps)(PatientHistory);
