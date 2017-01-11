import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import { disableUserInputEditing, enableUserInputEditing, updateUserInput } from '../Ventilator/actions';

import Decrement from './Decrement';
import Increment from './Increment';
import InputInnerWrapper from './InputInnerWrapper';
import InputOuterWrapper from './InputOuterWrapper';
import InputUnderlay from './InputUnderlay';
import Label from './Label';
import Value from './Value';

export class NumericInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  render() {
    return (
      <InputOuterWrapper>
        {this.props.editing ?
          <InputUnderlay
            onClick={() => this.props.disableEditing(this.props.name)}
          /> :
          null}

        {this.props.editing ?
          <Increment
            onClick={() => this.props.increment(this.props.name, this.props.value, this.props.incrementSize)}
          >▲</Increment> :
          null}

        {this.props.editing ?
          <Decrement
            onClick={() => this.props.decrement(this.props.name, this.props.value, this.props.incrementSize)}
          >▼</Decrement> :
          null}

        <InputInnerWrapper
          editing={this.props.editing}
          onClick={() => this.props.toggleEditing(this.props.name, this.props.editing)}
        >
          <Value>{this.props.value}</Value>
          <Label>
            <FormattedMessage {...messages[`${this.props.name}Short`]}></FormattedMessage>
          </Label>
        </InputInnerWrapper>
      </InputOuterWrapper>
    );
  }
}

NumericInput.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  incrementSize: React.PropTypes.number,
  editing: React.PropTypes.bool,
  toggleEditing: React.PropTypes.func,
  disableEditing: React.PropTypes.func,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  return {
    name: ownProps.name,
    value: ownProps.value,
    incrementSize: ownProps.incrementSize,
    editing: state.getIn(['ventilator', 'editing']) === ownProps.name,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleEditing: (name, editing) => {
      if (editing) {
        dispatch(disableUserInputEditing(name));
      } else {
        dispatch(enableUserInputEditing(name));
      }
    },
    disableEditing: (name) => dispatch(disableUserInputEditing(name)),
    increment: (name, currentValue, incrementSize) => {
      dispatch(updateUserInput(name, currentValue + incrementSize));
    },
    decrement: (name, currentValue, incrementSize) => {
      dispatch(updateUserInput(name, currentValue - incrementSize));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericInput);
