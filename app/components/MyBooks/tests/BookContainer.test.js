import React from 'react'
import { mount } from 'enzyme'

import BookContainer from '../BookContainer'

describe('<BookContainer />', () => {
  it('should pass along children prop', () => {
    const child = (<h1>Test</h1>)
    const renderedComponent = mount(<BookContainer>{child}</BookContainer>)
    expect(renderedComponent.contains(child)).toBe(true)
  })
})
