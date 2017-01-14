import React from 'react';
import EasyTransition from 'react-easy-transition';

import Background from './Background';
import BackgroundPattern from './BackgroundPattern';
import MainContent from './MainContent';
import ModalRoot from '../ModalRoot';
import Wrapper from './Wrapper';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper>
        <Background />
        <BackgroundPattern />
        <MainContent>
          <EasyTransition
            path={this.props.location.pathname}
            initialStyle={{ opacity: 0 }}
            transition="opacity 0.2s ease-out"
            finalStyle={{ opacity: 1 }}
          >
            {React.Children.toArray(this.props.children)}
          </EasyTransition>
        </MainContent>
        <ModalRoot />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};
