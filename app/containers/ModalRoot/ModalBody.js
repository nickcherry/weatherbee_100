import styled from 'styled-components';
import { getHexColor, getDepth } from '../../utils/styleHelpers';

const ModalBody = styled.div`
  background: ${getHexColor('codGrey')};
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, .2);
  left: 10%;
  padding: 1em;
  position: absolute;
  right: 10%;
  text-align: center;
  top: 10%;
  z-index: ${getDepth('modalBody')};
`;

export default ModalBody;
