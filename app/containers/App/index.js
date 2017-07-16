import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { loginRequest, logout } from 'auth/actions'
import { makeSelectProfile } from 'auth/selectors'

import Header from 'components/Header'
import Footer from 'components/Footer'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: calc(100vh - 172px); // min height for App wrapper should account for nav and footer
  padding: 0 16px;
  flex-direction: column;
`

export class App extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    profile: PropTypes.object
  }

  render () {
    return (
      <div>
        <Helmet
          titleTemplate='%s - React.js Boilerplate'
          defaultTitle='React.js Boilerplate'
          meta={[
            { name: 'description', content: 'A React.js Boierlplate application with Redux' }
          ]}
        />
        <Header profile={this.props.profile} />
        <AppWrapper>
          {React.Children.toArray(this.props.children)}
        </AppWrapper>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  profile: makeSelectProfile()
})

const mapDispatchToProps = (dispatch) => ({
  onLoginRequest: () => dispatch(loginRequest()),
  onLogout: () => dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
