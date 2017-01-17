/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';

/* Helpers / Services / Constants */

/* Assets */
import lockIcon from '../../images/lock.svg';
import patientIcon from '../../images/patient.svg';

/* Components */
import PatientWrapper from './PatientWrapper';

export class Patient extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    patient: React.PropTypes.object,
  }

  isLocked() {
    return !this.props.patient.unlocked;
  }

  render() {
    return (
      <PatientWrapper locked={this.isLocked()}>
        <Isvg src={this.isLocked() ? lockIcon : patientIcon} />
      </PatientWrapper>
    );
  }
}

function dispatchToProps() {
  return {

  };
}

export default connect(this.props, dispatchToProps)(Patient);
