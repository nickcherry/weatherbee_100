/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

/* Helpers / Services / Constants */
import { hideModal } from '../ModalRoot/actions';
import messages from './messages';

/* Components */
import Button from '../../components/Button';
import H3 from '../../components/H3';
import P from '../../components/P';

class HelpModal extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <form onSubmit={this.props.dismiss}>
        <H3>
          <FormattedMessage {...messages.heading} />
        </H3>
        <P>
          <FormattedMessage {...messages.body} />
        </P>
        <Button onClick={this.props.dismiss}>
          <FormattedMessage {...messages.okButton} />
        </Button>
      </form>
    );
  }
}

HelpModal.propTypes = {
  dismiss: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  dismiss: () => {
    dispatch(hideModal());
  },
});

export default connect(this.ownProps, mapDispatchToProps)(HelpModal);
