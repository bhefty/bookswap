import React from 'react'
import { shallow } from 'enzyme'

import Header from '../index'

describe('<Header />', () => {
  it('should render a header', () => {
    const renderedComponent = shallow(
      <Header />
    )
    expect(renderedComponent.find('header').length).toEqual(1)
  })

  it('should render Dashboard link if logged in', () => {
    const profile = {
      email: 'joeschmoe@example.com',
      name: 'Joe Schmoe'
    }
    const renderedComponent = shallow(
      <Header profile={profile} />
    )
    expect(renderedComponent.contains('Dashboard')).toBe(true)
  })

  it('should render Logout button if logged in', () => {
    const profile = {
      email: 'joeschmoe@example.com',
      name: 'Joe Schmoe'
    }
    const renderedComponent = shallow(
      <Header profile={profile} />
    )
    expect(renderedComponent.contains('Logout')).toBe(true)
  })

  it('should render Login button if not logged in', () => {
    const renderedComponent = shallow(
      <Header />
    )
    expect(renderedComponent.contains('Login')).toBe(true)
  })
})
