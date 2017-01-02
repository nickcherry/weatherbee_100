import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';

const margin = '4px';

const Placeholder = styled.div`
  background: ${getRgbaColor('mineShaft')};
  background: linear-gradient(to right bottom, ${getRgbaColor('tuna')} 49%, ${getRgbaColor('mineShaft')} 50%);
  border: 1px solid ${getRgbaColor('tuna')};
  border-radius: 3px;
  bottom: ${margin};
  box-shadow: inset 0 0 80px rgba(0, 0, 0, .5);
  left: ${margin};
  position: absolute;
  right: ${margin};
  top: ${margin};
  user-select: none;
`;

export default Placeholder;
