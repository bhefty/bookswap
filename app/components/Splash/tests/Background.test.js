import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import Background from '../Background'

describe('<Background />', () => {
  it('should render a <div> tag', () => {
    const renderedComponent = shallow(<Background />)
    expect(renderedComponent.type()).toEqual('div')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Background />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should adopt a valid attribute', () => {
    const id = 'test'
    const renderedComponent = shallow(<Background id={id} />)
    expect(renderedComponent.prop('id')).toEqual(id)
  })

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Background attribute={'test'} />)
    expect(renderedComponent.prop('attribute')).toBeUndefined()
  })

  it('should have a style for background with supplied image', () => {
    const backgroundImg = 'splash.jpg'
    const expectedResult = `#fff url('${backgroundImg}') no-repeat center center`
    const renderedComponent = renderer.create(<Background backgroundImg={backgroundImg} />).toJSON()
    expect(renderedComponent).toHaveStyleRule('background', expectedResult)
  })
})
