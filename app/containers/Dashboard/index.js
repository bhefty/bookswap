/*
 *
 * Dashboard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <h2>Hello from Dashboard!</h2>
      </div>
    )
  }
}

Dashboard.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(Dashboard)
