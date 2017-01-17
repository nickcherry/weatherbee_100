/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getDimension, getRgbaColor } from '../../utils/styleService';

const MenuItem = styled.div`
  cursor: pointer;
  flex: 1;
  height: ${getDimension('navHeight')};
  text-align: center;
  a {
    background: ${getRgbaColor('tuna')};
    display: block;
    height: 100%;
    width: 100%;
    svg {
      fill: ${getRgbaColor('silver')};
      height: 34px;
      margin-top: 6px;
    }
    &.current {
      background: ${getRgbaColor('mineShaft')};
    }
    &.current svg {
      fill: ${getRgbaColor('white')};
    }
    &:active {
      box-shadow: inset 0 0 8px rgba(0, 0, 0, .35);
      opacity: 0.75;
    }
  }
  &:not(:last-of-type) {
    border-right: 1px solid ${getRgbaColor('mineShaft')};
  }
`;

export default MenuItem;
