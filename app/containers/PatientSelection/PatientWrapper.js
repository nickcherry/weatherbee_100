/* Third-Party Dependencies */
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: ${(props) => props.locked ? 'auto' : 'pointer'};
  font-size: 12px;
  height: 110px;
  opacity: ${(props) => props.locked ? 0.35 : 1};
  text-align: center;
  svg {
    height: 80px;
    margin-top: 20px;
  }
`;

export default Wrapper;
