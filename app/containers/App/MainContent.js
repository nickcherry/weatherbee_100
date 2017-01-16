/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getDepth } from '../../utils/styleService';

const MainContent = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${getDepth('mainContent')};
`;

export default MainContent;
