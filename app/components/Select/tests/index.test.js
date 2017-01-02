import Select from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Select />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Select id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Select>{children}</Select>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
