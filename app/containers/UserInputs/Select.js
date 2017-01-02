import styled from 'styled-components';
import bowser from 'bowser';

import BaseSelect from '../../components/Select';

import { AVVC_MODE, ACPC_MODE, SPONT_MODE } from '../Ventilator/constants';

const Select = styled(BaseSelect)`
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
