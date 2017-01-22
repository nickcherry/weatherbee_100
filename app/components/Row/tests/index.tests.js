import Row from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Row />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <Row id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <Row>{children}</Row>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
