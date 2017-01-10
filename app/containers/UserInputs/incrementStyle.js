import styled from 'styled-components';
import { getRgbaColor, getDepth } from '../../utils/styleHelpers';

const incrementStyle = styled.div`
  background: ${getRgbaColor('windsor')};
  background: linear-gradient(to top, ${getRgbaColor('studio')} 0%, ${getRgbaColor('windsor')} 100%);
  -webkit-background-clip: text;
  color: ${getRgbaColor('studio')};
  cursor: pointer;
  font-size: 36px;
  left: 0;
  line-height: 1em;
  position: absolute;
  right: 0;
  text-align: center;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 0 rgba(0, 0, 0, 0.1);
  transform: scaleX(1.25);
  user-select: none;
  z-index: ${getDepth('userInputIncrementer')};
  &:active {
    background: linear-gradient(to top, ${getRgbaColor('windsor')} 0%, ${getRgbaColor('studio')} 100%);
    -webkit-background-clip: text;
  }
`;

export default incrementStyle;
