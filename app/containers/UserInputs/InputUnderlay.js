/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getRgbaColor, getDepth } from '../../utils/styleService';

const InputUnderlay = styled.div`
  background: ${getRgbaColor('mineShaft', 0.95)};
  bottom: -9999px;
  left: -9999px;
  position: absolute;
  right: -9999px;
  top: -9999px;
  z-index: ${getDepth('userInputUnderlay')};
`;

export default InputUnderlay;
