import Divider from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Divider />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Divider id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Divider>{children}</Divider>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
