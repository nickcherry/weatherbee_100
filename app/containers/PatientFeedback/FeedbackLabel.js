import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const FeedbackLabel = styled.label`
  color: ${getHexColor('frenchGrey')};
  display: block;
  font-size: 10px;
  line-height: 1em;
`;

export default FeedbackLabel;
