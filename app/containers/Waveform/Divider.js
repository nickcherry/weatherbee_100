import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';

const Divider = styled.div`
  background: ${getRgbaColor('tuna', 0.6)};
  background: linear-gradient(to right,
    ${getRgbaColor('tuna', 0)} 0%,
    ${getRgbaColor('tuna', 0.6)} 33%,
    ${getRgbaColor('tuna', 0.6)} 66%,
    ${getRgbaColor('tuna', 0)} 100%
  );
  height: 1px;
`;

export default Divider;
