import styled from 'styled-components';
import { getDefaultFont } from '../../utils/styleService';

const Select = styled.select`
  appearance: none;
  font-family: ${getDefaultFont()};
  font-weight: 300;
  outline: none !important;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  &:active {
    outline: none;
  }
`;

export default Select;
