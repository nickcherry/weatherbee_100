/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getHexColor } from '../../utils/styleService';

const FeedbackValue = styled.div`
  color: ${getHexColor('white')};
  font-size: 18px;
  line-height: 1em;
  margin-bottom: .2em;
  user-select: none;
`;

export default FeedbackValue;
