/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getDepth } from '../../utils/styleService';

/* Assets */
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
