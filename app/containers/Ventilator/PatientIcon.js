import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';

const PatientIcon = styled.div`
  color: ${getRgbaColor('mediumRedViolet')};
  color: linear-gradient(to right, ${getRgbaColor('mediumRedViolet')} 15%, ${getRgbaColor('studio')} 100%);
  cursor: pointer;
  height: 29px;
  left: 12px;
  position: absolute;
  top: 12px;
  width: 29px;
  svg {
    height: 100%;
    width: 100%;
  }
`;

export default PatientIcon;
