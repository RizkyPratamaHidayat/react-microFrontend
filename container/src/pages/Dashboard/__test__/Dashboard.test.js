import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Dashboard from '../../Dashboard';

const renderer  = new ShallowRenderer();
describe('Test Dashboard Page', () => {
  it('render page properly', () => {
    renderer.render(<Dashboard />);
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});