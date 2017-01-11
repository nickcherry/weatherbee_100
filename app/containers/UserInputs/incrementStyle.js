import styled from 'styled-components';
import { getRgbaColor, getDepth } from '../../utils/styleHelpers';

const incrementStyle = styled.div`
  background: ${getRgbaColor('windsor')};
  background-image: linear-gradient(to bottom, ${getRgbaColor('studio')} 0%, ${getRgbaColor('windsor')} 100%);
  -webkit-background-clip: text;
  -moz-background-clip
  background-clip: text;
  bottom: -30px;
  color: ${getRgbaColor('windsor')};
  cursor: pointer;
  font-size: 30px;
  line-height: 1em;
  position: absolute;
  text-align: center;
  transform: scaleX(1.25);
  user-select: none;
  -webkit-text-fill-color: transparent;
  z-index: ${getDepth('userInputIncrementer')};
  &:active {
    background-image: linear-gradient(to bottom, ${getRgbaColor('windsor')} 0%, ${getRgbaColor('studio')} 100%);
  }
`;

export default incrementStyle;
