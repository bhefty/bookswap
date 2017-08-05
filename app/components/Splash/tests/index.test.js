import React from 'react'
import { mount } from 'enzyme'

import Splash from '../index'

const renderComponent = (props = {}) => mount(<Splash {...props} />)

describe('<Splash />', () => {
  it('should render title', () => {
    const title = 'Bookswap'
    const renderedComponent = renderComponent({ title })
    expect(renderedComponent.contains(<h1>{title}</h1>)).toBe(true)
  })

  it('should render subtitle', () => {
    const subtitle = 'A place to put your sub title'
    const renderedComponent = renderComponent({ subtitle })
    expect(renderedComponent.contains(<p>{subtitle}</p>)).toBe(true)
  })
})
