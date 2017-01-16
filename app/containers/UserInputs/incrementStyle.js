/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getRgbaColor, getDepth } from '../../utils/styleService';

const incrementStyle = styled.div`
  background: ${getRgbaColor('windsor')};
  background-image: linear-gradient(to bottom, ${getRgbaColor('studio')} 0%, ${getRgbaColor('windsor')} 100%);
  -webkit-background-clip: text;
  -moz-background-clip
  background-clip: text;
  bottom: -48px;
  color: ${getRgbaColor('windsor')};
  cursor: pointer;
  font-size: 30px;
  line-height: 1em;
  padding-bottom: 20px;
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
