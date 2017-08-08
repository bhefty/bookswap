import React from 'react'
import { shallow } from 'enzyme'

import Close from '../Close'

describe('<Close />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<Close />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
