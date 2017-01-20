/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import FeedbackLabelContainer from './FeedbackLabelContainer';
import FeedbackValue from './FeedbackValue';
import FeedbackWrapper from './FeedbackWrapper';

export class Feedback extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <FeedbackWrapper>
        <FeedbackValue>{this.props.value}</FeedbackValue>
        <FeedbackLabelContainer name={this.props.name} />
      </FeedbackWrapper>
    );
  }
}

Feedback.propTypes = {
  name: React.PropTypes.string,
  value: React.PropTypes.number,
};

export default connect(this.props)(Feedback);
