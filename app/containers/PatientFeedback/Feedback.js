/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/* Helpers / Services / Constants */
import messages from './messages';

/* Components */
import FeedbackLabel from './FeedbackLabel';
import FeedbackValue from './FeedbackValue';
import FeedbackWrapper from './FeedbackWrapper';

export class Feedback extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FeedbackWrapper>
        <FeedbackValue>{this.props.value}</FeedbackValue>
        <FeedbackLabel>
          <FormattedMessage {...messages[`${this.props.name}Short`]}></FormattedMessage>
        </FeedbackLabel>
      </FeedbackWrapper>
    );
  }
}

Feedback.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number,
};

export default connect(this.props)(Feedback);
