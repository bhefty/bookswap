/*
 *
 * Dashboard
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loginRequest } from 'auth/actions'
import { makeSelectIdToken } from 'auth/selectors'

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount () {
    if (!this.props.isLoggedIn) {
      this.props.login()
    }
  }

  render () {
    return (
      <div>
        {this.props.isLoggedIn ? // eslint-disable-line operator-linebreak
          <div>
            <h2>Hello from Dashboard!</h2>
          </div>
          : // eslint-disable-line operator-linebreak
          <div>
            <h2>You are not logged in yet!</h2>
          </div>
        }
      </div>
    )
  }
}

Dashboard.PropTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIdToken()
})

export function mapDispatchToProps (dispatch) {
  return {
    login: () => dispatch(loginRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
