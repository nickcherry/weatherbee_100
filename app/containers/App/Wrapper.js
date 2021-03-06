/* Third-Party Dependencies */
import styled from 'styled-components';
import bowser from 'bowser';

/* Helpers / Services / Constnats */
import { getHexColor } from '../../utils/styleService';

const Wrapper = styled.div`
  color: ${getHexColor('white')};;
  font-weight: 300;
  height: 100%;
  margin: auto;
  max-width: ${bowser.mobile || bowser.tablet ? 'none' : '320px'};
  min-height: 500px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export default Wrapper;
