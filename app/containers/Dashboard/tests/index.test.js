import React from 'react'
import sinon from 'sinon'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

import { Dashboard, mapDispatchToProps } from '../index'
import { loginRequest } from 'auth/actions'

describe('<Dashboard />', () => {
  it('should render the page', () => {
    const tree = renderer.create(
      <Dashboard login={() => jest.fn()} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should render greeting message if logged in', () => {
    const renderedComponent = mount(
      <Dashboard isLoggedIn login={() => jest.fn()} />
    )
    expect(renderedComponent.contains(<h2>Hello from Dashboard!</h2>)).toEqual(true)
  })

  it('should render error message if not logged in', () => {
    const renderedComponent = mount(
      <Dashboard isLoggedIn={false} login={() => jest.fn()} />
    )
    expect(renderedComponent.contains(<h2>You are not logged in yet!</h2>)).toEqual(true)
  })

  it('should call componentWillmount', () => {
    sinon.spy(Dashboard.prototype, 'componentWillMount')
    const renderedComponent = mount( // eslint-disable-line
      <Dashboard login={() => jest.fn()} />
    )
    expect(Dashboard.prototype.componentWillMount.calledOnce).toEqual(true)
    Dashboard.prototype.componentWillMount.restore()
  })

  // https://stackoverflow.com/questions/40615415/how-to-test-componentwillmount-inside-a-connected-react-redux-component
  it('should dispatch login if user is not logged in', () => {
    const loginDispatchSpy = sinon.spy()
    const wrapper = shallow(
      <Dashboard login={loginDispatchSpy} />
    )
    loginDispatchSpy.reset() // reset to avoid unwanted calls
    wrapper.instance().componentWillMount()
    expect(loginDispatchSpy.calledOnce).toEqual(true)
  })

  it('should not dispatch login if user is already logged in', () => {
    const loginDispatchSpy = sinon.spy()
    const wrapper = shallow(
      <Dashboard login={loginDispatchSpy} isLoggedIn />
    )
    loginDispatchSpy.reset() // reset to avoid unwanted calls
    wrapper.instance().componentWillMount()
    expect(loginDispatchSpy.calledOnce).toEqual(false)
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
