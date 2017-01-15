import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';

import { getPath } from '../../routes';
import PatientDescription from './PatientDescription';
import PatientName from './PatientName';
import VentilatorIcon from './VentilatorIcon';
import Wrapper from './Wrapper';

class PatientHistory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    name: React.PropTypes.string,
    description: React.PropTypes.string,
  };

  render() {
    return (
      <Wrapper>
        <Link to={getPath('ventilator')}>
          <VentilatorIcon />
        </Link>
        <PatientName>{this.props.name}</PatientName>
        <PatientDescription>{this.props.description}</PatientDescription>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.getIn(['patientHistory', 'patient', 'name']),
    description: state.getIn(['patientHistory', 'patient', 'description']),
  };
}

export default connect(mapStateToProps)(PatientHistory);
