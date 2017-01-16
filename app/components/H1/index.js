import styled from 'styled-components';
import { getHexColor, getCursiveFont } from '../../utils/styleService';

const H1 = styled.h1`
  background: linear-gradient(to right, ${getHexColor('electricViolet')} 20%, ${getHexColor('studio')} 55%, ${getHexColor('cerise')} 90%);
  -webkit-background-clip: text;
  -moz-background-clip
  background-clip: text;
  color: ${getHexColor('electricViolet')};
  font-family: ${getCursiveFont()};
  font-size: 1.75em;
  font-weight: 400;
  margin: .5em auto 1px;
  padding-bottom: 0;
  text-align: center;
  user-select: none;
  -webkit-text-fill-color: transparent;
  width: 100%;
`;

export default H1;
