import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const Input = styled.input`
  background: ${getHexColor('white')};
  color: codGrey;
  outline: none;
  text-align: center;
`;

export default Input;
