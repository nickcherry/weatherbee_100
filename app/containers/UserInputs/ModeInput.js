/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { AVVC_MODE, ACPC_MODE, SIMVVC_MODE, SIMVPC_MODE, SPONT_MODE } from '../Ventilator/constants';
import { updateUserInput } from '../Ventilator/actions';

/* Components */
import InputInnerWrapper from './InputInnerWrapper';
import InputOuterWrapper from './InputOuterWrapper';
import Select from './Select';

export class ModeInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.string,
    valueChanged: React.PropTypes.func,
  }
  render() {
    return (
      <InputOuterWrapper>
        <InputInnerWrapper omitPadding>
          <Select
            defaultValue={this.props.value}
            innerRef={(el) => this.selectEl = el}
            onChange={(e) => this.props.valueChanged(e, this.props.name)}
          >
            <option>{AVVC_MODE}</option>
            <option>{ACPC_MODE}</option>
            <option>{SIMVVC_MODE}</option>
            <option>{SIMVPC_MODE}</option>
            <option>{SPONT_MODE}</option>
          </Select>

        </InputInnerWrapper>
      </InputOuterWrapper>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    name: ownProps.name,
    value: state.getIn(['game', 'ventilator', 'userInputs', ownProps.name]),
  };
}

function dispatchToProps(dispatch) {
  return {
    valueChanged: (e, inputName) => dispatch(updateUserInput(inputName, e.target.value)),
  };
}

export default connect(mapStateToProps, dispatchToProps)(ModeInput);
