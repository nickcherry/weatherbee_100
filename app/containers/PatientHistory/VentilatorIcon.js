import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';
import ventilatorIcon from '../../images/ventilator.svg';

const PatientIcon = styled.div`
  background: ${getRgbaColor('mediumRedViolet')};
  background: linear-gradient(to right, ${getRgbaColor('mediumRedViolet')} 15%, ${getRgbaColor('studio')} 100%);
  cursor: pointer;
  height: 30px;
  mask-image: url(${ventilatorIcon});
  position: absolute;
  right: 12px;
  top: 12px;
  width: 30px;
`;

export default PatientIcon;
