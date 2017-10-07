import React from 'react'
import { shallow, mount } from 'enzyme'

import PendingApprovalItem from '../PendingApprovalItem'
import Close from '../Close'

describe('<PendingApprovalItem />', () => {
  it('should render an <li> tag', () => {
    const renderedComponent = shallow(<PendingApprovalItem />)
    expect(renderedComponent.type()).toEqual('li')
  })

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<PendingApprovalItem />)
    expect(renderedComponent.prop('className')).toBeDefined()
  })

  it('should contain <Close /> component', () => {
    const renderedComponent = mount(<PendingApprovalItem />)
    expect(renderedComponent.contains(<Close />)).toBe(true)
  })

  it('should pass along title prop', () => {
    const title = 'Test'
    const renderedComponent = mount(<PendingApprovalItem title={title} />)
    expect(renderedComponent.prop('title')).toEqual(title)
  })
})
