import styled from 'styled-components';
import { getCursiveFont } from '../../utils/styleHelpers';

const Title = styled.div`
  color: ${(props) => props.color};
  font-family: ${getCursiveFont()};
  font-size: 16px;
  left: 0;
  opacity: 0.75;
  position: absolute;
  top: 5px;
  user-select: none;
`;

export default Title;
