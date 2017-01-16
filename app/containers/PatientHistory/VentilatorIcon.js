/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getRgbaColor } from '../../utils/styleService';

const PatientIcon = styled.div`
  color: ${getRgbaColor('mediumRedViolet')};
  color: linear-gradient(to right, ${getRgbaColor('mediumRedViolet')} 15%, ${getRgbaColor('studio')} 100%);
  cursor: pointer;
  height: 30px;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 30px;
`;

export default PatientIcon;
