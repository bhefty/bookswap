import React from 'react'
import { shallow, mount } from 'enzyme'

import RequestItem from '../RequestItem'
import Checkmark from '../Checkmark'
import Close from '../Close'

describe('<RequestItem />', () => {
  it('should render an <li> tag', () => {
    const renderedComponent = shallow(<RequestItem />)
    expect(renderedComponent.type()).toEqual('li')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<RequestItem />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should contain <Checkmark /> component', () => {
    const renderedComponent = mount(<RequestItem />)
    expect(renderedComponent.contains(<Checkmark />)).toBe(true)
  })

  it('should contain <Close /> component', () => {
    const renderedComponent = mount(<RequestItem />)
    expect(renderedComponent.contains(<Close />)).toBe(true)
  })

  it('should pass along title prop', () => {
    const title = 'Test'
    const renderedComponent = mount(<RequestItem title={title} />)
    expect(renderedComponent.prop('title')).toEqual(title)
  })
})
