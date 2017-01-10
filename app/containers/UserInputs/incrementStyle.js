import styled from 'styled-components';
import { getRgbaColor, getDepth } from '../../utils/styleHelpers';

const incrementStyle = styled.div`
  color: ${getRgbaColor('windsor')};
  cursor: pointer;
  font-size: 40px;
  left: 0;
  line-height: 1em;
  position: absolute;
  right: 0;
  text-align: center;
  transform: scaleX(1.25);
  user-select: none;
  z-index: ${getDepth('userInputIncrementer')};
`;

export default incrementStyle;
