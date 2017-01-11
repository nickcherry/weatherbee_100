import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const Label = styled.label`
  color: ${getHexColor('londonHue')};
  display: block;
  font-size: 10px;
  font-weight: 400;
  line-height: 1em;
  margin-top: .25em;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`;

export default Label;
