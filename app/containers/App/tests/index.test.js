import React from 'react'
import { shallow } from 'enzyme'

import { App, mapDispatchToProps } from '../index'
import { loginRequest, logout } from 'auth/actions'

describe('<App />', () => {
  it('should render its children', () => {
    const children = (<h1>Test</h1>)
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    )
    expect(renderedComponent.contains(children)).toBe(true)
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

    describe('logout', () => {
      it('should be injected', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        expect(result.logout).toBeDefined()
      })

      it('should dispatch login when called', () => {
        const dispatch = jest.fn()
        const result = mapDispatchToProps(dispatch)
        result.logout()
        expect(dispatch).toHaveBeenCalledWith(logout())
      })
    })
  })
})
