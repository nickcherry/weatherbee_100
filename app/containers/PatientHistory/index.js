/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import BasicInfo from './BasicInfo';
import BasicInfoDetail from './BasicInfoDetail';
import Description from './Description';
import Name from './Name';
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
