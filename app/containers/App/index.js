/* Third-Party Dependencies */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/* Components */
import Background from './Background';
import BackgroundPattern from './BackgroundPattern';
import MainContent from './MainContent';
import ModalRoot from '../ModalRoot';
import Nav from '../Nav';
import Wrapper from './Wrapper';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object,
  };

  render() {
    return (
      <Wrapper>
        <Background />
        <BackgroundPattern />
        <MainContent>
          <ReactCSSTransitionGroup
            transitionName="main-content"
            transitionAppear
            transitionLeave
            transitionAppearTimeout={350}
            transitionEnterTimeout={350}
            transitionLeaveTimeout={350}
          >
            {React.cloneElement(this.props.children, { key: this.props.location.pathname })}
          </ReactCSSTransitionGroup>
        </MainContent>
        <Nav />
        <ModalRoot />
      </Wrapper>
    );
  }
}
