import styled from 'styled-components';
import { getRgbaColor } from '../../utils/styleHelpers';

const InputWrapper = styled.div`
  background: ${getRgbaColor('windsor')};
  background: linear-gradient(to bottom, ${getRgbaColor('studio')} 0%, ${getRgbaColor('windsor')} 100%);
  border-radius: 3px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, .1);
  cursor: pointer;
  margin: 4px;
  padding: .5em .5em .65em;
  text-shadow: 0 0 1px rgba(0, 0, 0, .2);
  user-select: none;
  &:active {
    background: linear-gradient(to bottom, ${getRgbaColor('windsor')} 0%, ${getRgbaColor('studio')} 100%);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, .35);
  }
`;

export default InputWrapper;
