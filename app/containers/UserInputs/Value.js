/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

const Value = styled.div`
  color: ${getHexColor('white')};
  font-size: 22px;
  line-height: 1em;
  user-select: none;
`;

export default Value;
