import styled from 'styled-components';
import { getRgbaColor, getDepth } from '../../utils/styleHelpers';

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
