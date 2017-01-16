import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { FormattedMessage } from 'react-intl';
import Isvg from 'react-inlinesvg';

import { getPath } from '../../routes';
import ventilatorIcon from '../../images/ventilator.svg';
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
          <VentilatorIcon>
            <Isvg src={ventilatorIcon} />
          </VentilatorIcon>
        </Link>
        <PatientName>{this.props.name}</PatientName>
        <PatientDescription>{this.props.description}</PatientDescription>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const patient = state.getIn(['game', 'patient']);
  return {
    name: patient.get('name'),
    description: patient.get('description'),
  };
}

export default connect(mapStateToProps)(PatientHistory);
