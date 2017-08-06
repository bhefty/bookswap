import React from 'react'
import { shallow, mount } from 'enzyme'

import { HomePage, mapDispatchToProps } from '../index'
import { loginRequest } from 'auth/actions'

describe('<HomePage />', () => {
  it('should render the page', () => {
    const renderedComponent = mount(<HomePage />)
    expect(renderedComponent.exists())
  })

  it('should render Splash component', () => {
    const renderedComponent = shallow(
      <HomePage />
    )
    expect(renderedComponent.find('Splash').length).toEqual(1)
  })

  describe('mapDispatchToProps', () => {
    describe('login', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.login).toBeDefined()
      })

      it('should dispatch login when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.login()
        expect(dispatch).toHaveBeenCalledWith(loginRequest())
      })
    })
  })
})
