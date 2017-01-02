import P from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<P />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <P id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <P>{children}</P>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
