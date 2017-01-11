import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const Value = styled.div`
  color: ${getHexColor('white')};
  font-size: 22px;
  line-height: 1em;
  user-select: none;
`;

export default Value;
