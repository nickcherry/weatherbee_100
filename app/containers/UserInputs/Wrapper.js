/* Third-Party Dependencies */
import styled from 'styled-components';
import bowser from 'bowser';

const Wrapper = styled.div`
  margin: 6px 8px 6px;
  padding-bottom: ${bowser.safari ? '6px' : 0};
`;

export default Wrapper;
