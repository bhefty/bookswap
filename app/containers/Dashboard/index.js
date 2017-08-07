/*
 *
 * Dashboard
 *
 */

import React from 'react'
import TradeRequests from 'components/TradeRequests'

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <TradeRequests />
        </div>
        <div className='col-sm-12 col-md-6'>
          <h1>My Books</h1>
        </div>
      </div>
    )
  }
}

export default Dashboard
