import React from 'react';
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
          {React.Children.toArray(this.props.children)}
        </MainContent>
        <ModalRoot />
      </Wrapper>
    );
  }
}
