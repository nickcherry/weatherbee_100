import styled from 'styled-components';
import { getDepth } from '../../utils/styleHelpers';

const ModalCloseButton = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding: .15em;
  position: absolute;
  right: .75em;
  top: .25em;
  z-index: ${getDepth('modalCloseButton')};
  &:hover {
    opacity: .6;
  }
`;

export default ModalCloseButton;
