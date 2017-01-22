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
    id: React.PropTypes.number,
    select: React.PropTypes.func,
    selectedPatientId: React.PropTypes.number,
    unlocked: React.PropTypes.bool,
  }

  isLocked() {
    return !this.props.unlocked;
  }

  isCurrent() {
    return this.props.id === this.props.selectedPatientId;
  }

  render() {
    return (
      <PatientWrapper current={this.isCurrent()} locked={this.isLocked()} onClick={this.props.select}>
        <Isvg src={this.isLocked() ? lockIcon : patientIcon} />
      </PatientWrapper>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    id: ownProps.patient.get('id'),
    selectedPatientId: state.getIn(['game', 'patient', 'id']),
    unlocked: ownProps.patient.get('unlocked'),
  };
}

function dispatchToProps(dispatch, ownProps) {
  return {
    select: () => {
      if (ownProps.patient.get('unlocked')) {
        dispatch(selectPatient(ownProps.patient));
      }
    },
  };
}

export default connect(mapStateToProps, dispatchToProps)(Patient);
