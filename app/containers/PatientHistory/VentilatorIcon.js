import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';

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
