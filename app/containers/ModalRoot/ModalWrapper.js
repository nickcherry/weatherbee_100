import styled from 'styled-components';
import { getDepth } from '../../utils/styleHelpers';

const ModalWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${getDepth('modalWrapper')};
`;

export default ModalWrapper;
