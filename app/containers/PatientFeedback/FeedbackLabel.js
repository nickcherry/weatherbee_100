/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

const FeedbackLabel = styled.label`
  color: ${getHexColor('frenchGrey')};
  display: block;
  font-size: 10px;
  line-height: 1em;
  user-select: none;
`;

export default FeedbackLabel;
