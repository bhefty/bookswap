/*
 *
 * Dashboard
 *
 */

import React from 'react'

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <h2>Hello from Dashboard!</h2>
        <p>This is a private page that only authorized users can view. Check out <code>app/routes.js</code> to see how this is done.</p>
      </div>
    )
  }
}

export default Dashboard
