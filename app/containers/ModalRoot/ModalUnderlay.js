/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getDepth } from '../../utils/styleService';

const ModalUnderlay = styled.div`
  background: rgba(0, 0, 0, .9);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${getDepth('modalUnderlay')};
`;

export default ModalUnderlay;
