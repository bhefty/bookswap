import React from 'react'
import { shallow } from 'enzyme'

import UL from '../UL'

describe('<UL />', () => {
  it('should render an <ul> tag', () => {
    const renderedComponent = shallow(<UL />)
    expect(renderedComponent.type()).toEqual('ul')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<UL />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<UL id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<UL attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
