/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Components */
import Divider from '../../components/Divider';
import Title from './Title';

class TitleContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    title: React.PropTypes.string,
    color: React.PropTypes.string,
  };

  render() {
    return (
      <div>
        <Divider />
        <Title color={this.props.color}>
          {this.props.title}
        </Title>
      </div>
    );
  }
}

export default connect()(TitleContainer);
