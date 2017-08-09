import React from 'react'
import { shallow } from 'enzyme'

import TradeRequests from '../index'

describe('<TradeRequests />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <TradeRequests myApproval={[]} othersApproval={[]} />
    )
    expect(renderedComponent.find('div').length).toEqual(1)
  })

  it('should render <RequestItem /> if at least one trade is in myApproval', () => {
    const myApproval = [
      {
        title: 'Book One',
        author: 'Bill'
      }
    ]
    const othersApproval = []
    const renderedComponent = shallow(
      <TradeRequests myApproval={myApproval} othersApproval={othersApproval} />
    )
    expect(renderedComponent.find('RequestItem').length).toEqual(1)
  })

  it('should render <RequestItem /> if at least one trade is in othersApproval', () => {
    const myApproval = []
    const othersApproval = [
      {
        title: 'Book One',
        author: 'Bill'
      },
      {
        title: 'Book Two',
        author: 'Fred'
      }
    ]
    const renderedComponent = shallow(
      <TradeRequests myApproval={myApproval} othersApproval={othersApproval} />
    )
    expect(renderedComponent.find('RequestItem').length).toEqual(2)
  })

  it('should render message in my approval section if no items are available', () => {
    const message = 'No pending requests for your approval.'
    const myApproval = []
    const othersApproval = [
      {
        title: 'Book One',
        author: 'Bill'
      }
    ]
    const renderedComponent = shallow(
      <TradeRequests myApproval={myApproval} othersApproval={othersApproval} />
    )
    expect(renderedComponent.contains(message)).toBe(true)
  })

  it('should render message in others approval section if no items are available', () => {
    const message = 'You have no pending trades.'
    const myApproval = [
      {
        title: 'Book One',
        author: 'Bill'
      }
    ]
    const othersApproval = []
    const renderedComponent = shallow(
      <TradeRequests myApproval={myApproval} othersApproval={othersApproval} />
    )
    expect(renderedComponent.contains(message)).toBe(true)
  })
})
