/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

/* Helpers / Services / Constants */
import { getPath } from '../../routes';

/* Assets */
import ventilatorIcon from '../../images/ventilator.svg';

/* Components */
import BasicInfo from './BasicInfo';
import BasicInfoDetail from './BasicInfoDetail';
import Description from './Description';
import Name from './Name';
import VentilatorIcon from './VentilatorIcon';
import Wrapper from './Wrapper';

class PatientHistory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    age: React.PropTypes.number,
    gender: React.PropTypes.string,
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
        <BasicInfo>
          <Name>{this.props.name}</Name>
          <BasicInfoDetail>{this.props.gender}</BasicInfoDetail>
          <BasicInfoDetail>{this.props.age}</BasicInfoDetail>
        </BasicInfo>
        <Description>{this.props.description}</Description>
      </Wrapper>
    );
  }
}

function mapStateToProps(state) {
  const patient = state.getIn(['game', 'patient']);
  return {
    age: patient.get('age'),
    gender: patient.get('gender'),
    name: patient.get('name'),
    description: patient.get('description'),
  };
}

export default connect(mapStateToProps)(PatientHistory);
