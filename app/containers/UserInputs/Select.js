/* Third-Party Dependencies */
import styled from 'styled-components';
import bowser from 'bowser';

/* Helpers / Services / Constants */
import { AVVC_MODE, ACPC_MODE, SPONT_MODE } from '../Ventilator/constants';

/* Components */
import BaseSelect from '../../components/Select';

const Select = styled(BaseSelect)`
  height: 2.25em;
  line-height: 1em;
  text-align: center;
  text-indent: ${(props) => {
    if (bowser.firefox) return 0;
    switch (props.defaultValue) {
      case AVVC_MODE:
      case ACPC_MODE:
      case SPONT_MODE:
        return 'calc(50% - 50px)';
      default:
        return 'calc(50% - 58px)';
    }
  }};
  width: 100%;
`;

export default Select;
