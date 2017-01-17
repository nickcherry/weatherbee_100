/* Third-Party Dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';

/* Helpers / Services / Constants */
import { getPath } from '../../routes';

/* Assets */
import patientHistoryIcon from '../../images/patientHistory.svg';
import patientSelectionIcon from '../../images/patientSelection.svg';
import ventilatorIcon from '../../images/ventilator.svg';

/* Components */
import Wrapper from './Wrapper';
import MenuItem from './MenuItem';

class Nav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <MenuItem>
          <Link to={getPath('patientSelection')} activeClassName="current">
            <Isvg src={patientSelectionIcon} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={getPath('patientHistory')} activeClassName="current">
            <Isvg src={patientHistoryIcon} />
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to={getPath('ventilator')} activeClassName="current">
            <Isvg src={ventilatorIcon} />
          </Link>
        </MenuItem>
      </Wrapper>
    );
  }
}

export default connect()(Nav);
