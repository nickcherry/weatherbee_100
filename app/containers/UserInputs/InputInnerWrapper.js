/* Third-Party Dependencies */
import styled from 'styled-components';

/* Helpers / Services / Constants */
import { getRgbaColor, getDepth } from '../../utils/styleService';

const InputInnerWrapper = styled.div`
  background: ${getRgbaColor('windsor')};
  background: linear-gradient(to bottom, ${getRgbaColor('studio')} 0%, ${getRgbaColor('windsor')} 100%);
  border-radius: 3px;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, .1);
  cursor: pointer;
  margin: 4px;
  padding: ${(props) => props.omitPadding ? 0 : '.5em .5em .65em'};
  position: relative;
  text-shadow: 0 0 1px rgba(0, 0, 0, .2);
  user-select: none;
  z-index: ${(props) => props.editing ? getDepth('userInputInnerWrapper') : 'auto'};
  &:active {
    background: linear-gradient(to bottom, ${getRgbaColor('windsor')} 0%, ${getRgbaColor('studio')} 100%);
    box-shadow: inset 0 0 8px rgba(0, 0, 0, .35);
  }
`;

export default InputInnerWrapper;
