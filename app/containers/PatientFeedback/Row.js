import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const Row = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: row;
  &:not(:first-of-type) {
    border-top: 1px dotted ${getHexColor('tuna')};
  }
`;

export default Row;
