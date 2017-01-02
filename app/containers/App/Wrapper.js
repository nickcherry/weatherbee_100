import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const Wrapper = styled.div`
  color: ${getHexColor('white')};;
  font-weight: 300;
  height: 100%;
  margin: auto;
  max-width: 768px;
  min-height: 500px;
  position: relative;
  width: 100%;
`;

export default Wrapper;
