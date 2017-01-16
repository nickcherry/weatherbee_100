/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';

/* Helpers / Services / Constants */
import { HELP_MODAL } from './constants';
import { hideModal } from './actions';

/* Components */
import HelpModal from '../HelpModal';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalUnderlay from './ModalUnderlay';
import ModalWrapper from './ModalWrapper';


const MODAL_COMPONENTS = {
  [HELP_MODAL]: HelpModal,
};

class ModalRoot extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (!this.props.modalType) return null;
    const ModalContent = MODAL_COMPONENTS[this.props.modalType];
    if (!ModalContent) return null;
    return (
      <ModalWrapper>
        <ModalUnderlay onClick={this.props.hideModal} />
        <ModalBody>
          <ModalCloseButton onClick={this.props.hideModal}>x</ModalCloseButton>
          <ModalContent modalProps={this.props.modalProps} />
        </ModalBody>
      </ModalWrapper>
    );
  }
}

ModalRoot.propTypes = {
  modalType: React.PropTypes.string,
  modalProps: React.PropTypes.object,
  hideModal: React.PropTypes.func,
};

function mapStateToProps(state) {
  const modal = state.get('modal');
  return {
    modalType: modal.get('type'),
    modalProps: modal.get('props'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
