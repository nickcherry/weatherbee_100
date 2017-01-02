import styled from 'styled-components';
import { getDepth } from '../../utils/styleHelpers';
import noise from '../../images/noise.png';

const BackgroundPattern = styled.div`
  background-image: url(${noise});
  background-repeat: repeat;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${getDepth('backgroundPattern')};;
`;

export default BackgroundPattern;
