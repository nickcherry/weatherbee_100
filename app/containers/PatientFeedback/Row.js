/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  &:not(:first-of-type) {
    border-top: 1px dotted ${getHexColor('tuna')};
  }
`;

export default Row;
