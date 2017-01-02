import { HELP_MODAL, HIDE_MODAL, SHOW_MODAL } from './constants';

export function showHelpModal() {
  return {
    type: SHOW_MODAL,
    modalType: HELP_MODAL,
  };
}

export function hideModal() {
  return {
    type: HIDE_MODAL,
  };
}
