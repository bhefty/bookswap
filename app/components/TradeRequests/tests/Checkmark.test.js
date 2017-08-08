import React from 'react'
import { shallow } from 'enzyme'

import Checkmark from '../Checkmark'

describe('<Checkmark />', () => {
  it('should contain <svg> element', () => {
    const renderedComponent = shallow(<Checkmark />)
    expect(renderedComponent.find('svg').length).toBe(1)
  })
})
