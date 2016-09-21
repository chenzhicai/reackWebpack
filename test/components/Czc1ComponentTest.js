/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Czc1Component from 'components//Czc1Component.js';

describe('Czc1Component', () => {
  let component;

  beforeEach(() => {
    component = createComponent(Czc1Component);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('czc1-component');
  });
});
