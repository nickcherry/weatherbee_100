import styled from 'styled-components';

import { getCursiveFont } from '../../utils/styleHelpers';

const H3 = styled.h3`
  font-family: ${getCursiveFont()};
  font-size: 1em;
  font-weight: 400;
  user-select: none;
`;

export default H3;
