import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

import Label from './Label';
import InputWrapper from './InputWrapper';
import Value from './Value';

export class NumericInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <InputWrapper onClick={() => this.props.showModal(this.props.name, this.props.value)}>
        <Value>{this.props.value}</Value>
        <Label>
          <FormattedMessage {...messages[`${this.props.name}Short`]}></FormattedMessage>
        </Label>
      </InputWrapper>
    );
  }
}

NumericInput.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  showModal: React.PropTypes.func,
};

function mapDispatchToProps() {
  return {
    showModal: () => null,
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(this.props, mapDispatchToProps)(NumericInput);
