/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services */
import { getDepth, getRgbaColor } from '../../utils/styleService';

const Background = styled.div`
  background: linear-gradient(to right, ${getRgbaColor('codGrey')} 0%, ${getRgbaColor('mineShaft')} 100%);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${getDepth('background')};;
`;

export default Background;
