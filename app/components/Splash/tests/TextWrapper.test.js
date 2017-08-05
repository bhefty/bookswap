import React from 'react'
import { shallow } from 'enzyme'

import TextWrapper from '../TextWrapper'

describe('<TextWrapper />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<TextWrapper />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<TextWrapper />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<TextWrapper id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<TextWrapper attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })
})
