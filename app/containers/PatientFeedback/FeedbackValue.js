import styled from 'styled-components';
import { getHexColor } from '../../utils/styleHelpers';

const FeedbackValue = styled.div`
  color: ${getHexColor('white')};
  font-size: 18px;
  line-height: 1em;
  margin-bottom: .2em;
`;

export default FeedbackValue;
