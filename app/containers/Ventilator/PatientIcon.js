import styled from 'styled-components';
import { getRgbaColor, getDepth } from '../../utils/styleHelpers';
import patientIcon from '../../images/patient.svg';

const PatientIcon = styled.div`
  background: ${getRgbaColor('mediumRedViolet')};
  background: linear-gradient(to right, ${getRgbaColor('mediumRedViolet')} 15%, ${getRgbaColor('studio')} 100%);
  cursor: pointer;
  height: 29px;
  left: 12px;
  mask-image: url(${patientIcon});
  position: absolute;
  top: 12px;
  width: 29px;
  z-index: ${getDepth('linkIcon')};
`;

export default PatientIcon;
