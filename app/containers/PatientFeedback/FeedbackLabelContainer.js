/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/* Helpers / Services / Constants */
import messages from './messages';

/* Components */
import FeedbackLabel from './FeedbackLabel';

export class FeedbackLabelContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FeedbackLabel>
        <FormattedMessage {...messages[`${this.props.name}Short`]}></FormattedMessage>
      </FeedbackLabel>
    );
  }
}

FeedbackLabelContainer.propTypes = {
  name: React.PropTypes.string,
};

export default connect()(FeedbackLabelContainer);
