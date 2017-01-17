/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getDepth, getDimension, getRgbaColor } from '../../utils/styleService';

const Wrapper = styled.div`
  align-items: stretch;
  border-top: 1px solid ${getRgbaColor('mineShaft')};
  box-shadow: 0 -1px 6px 0 rgba(0, 0, 0, .1);
  bottom: 0;
  display: flex;
  flex-direction: row;
  height: ${getDimension('navHeight')};
  left: 0;
  position: absolute;
  right: 0;
  z-index: ${getDepth('nav')};
`;

export default Wrapper;
