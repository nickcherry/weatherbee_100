/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/* Helpers / Services / Constants */
import messages from './messages';
import { disableUserInputEditing, enableUserInputEditing, updateUserInput } from '../Ventilator/actions';

/* Components */
import Decrement from './Decrement';
import Increment from './Increment';
import InputInnerWrapper from './InputInnerWrapper';
import InputOuterWrapper from './InputOuterWrapper';
import InputUnderlay from './InputUnderlay';
import Label from './Label';
import Value from './Value';

export class NumericInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
  disableEditing: React.PropTypes.func,
  editing: React.PropTypes.bool,
  decrement: React.PropTypes.func,
  increment: React.PropTypes.func,
  incrementSize: React.PropTypes.number,
  toggleEditing: React.PropTypes.func,
  value: React.PropTypes.number,
};

function mapStateToProps(state, ownProps) {
  return {
    name: ownProps.name,
    editing: state.getIn(['game', 'ventilator', 'editing']) === ownProps.name,
    incrementSize: ownProps.name === 'tidalVolume' ? 50 : 1,
    value: state.getIn(['game', 'ventilator', 'userInputs', ownProps.name]),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: (name, currentValue, incrementSize) => {
      dispatch(updateUserInput(name, currentValue - incrementSize));
    },
    disableEditing: (name) => dispatch(disableUserInputEditing(name)),
    increment: (name, currentValue, incrementSize) => {
      dispatch(updateUserInput(name, currentValue + incrementSize));
    },
    toggleEditing: (name, editing) => {
      if (editing) {
        dispatch(disableUserInputEditing(name));
      } else {
        dispatch(enableUserInputEditing(name));
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NumericInput);
