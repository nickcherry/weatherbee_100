/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';

/* Helpers / Services / Constants */
import { selectPatient } from './actions';

/* Assets */
import lockIcon from '../../images/lock.svg';
import patientIcon from '../../images/patient.svg';

/* Components */
import PatientWrapper from './PatientWrapper';

export class Patient extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    patient: React.PropTypes.object,
    selectedPatientId: React.PropTypes.number,
    select: React.PropTypes.func,
  }

  isLocked() {
    return !this.props.patient.unlocked;
  }

  isCurrent() {
    return this.props.patient.id === this.props.selectedPatientId;
  }

  render() {
    return (
      <PatientWrapper current={this.isCurrent()} locked={this.isLocked()} onClick={() => this.isLocked() ? null : this.props.select(this.props.patient)}>
        <Isvg src={this.isLocked() ? lockIcon : patientIcon} />
      </PatientWrapper>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    selectedPatientId: state.getIn(['game', 'patient', 'id']),
  });
}

function dispatchToProps(dispatch) {
  return {
    select: (patient) => dispatch(selectPatient(patient)),
  };
}

export default connect(mapStateToProps, dispatchToProps)(Patient);
