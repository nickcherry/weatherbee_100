import Cell from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Cell />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Cell id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Cell>{children}</Cell>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
