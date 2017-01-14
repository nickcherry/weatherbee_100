import styled from 'styled-components';

import H3 from '../../components/H3';

const Title = styled(H3)`
  color: ${(props) => props.color};
  left: 0;
  margin: 0;
  opacity: 0.75;
  position: absolute;
  top: 5px;
  user-select: none;
`;

export default Title;
