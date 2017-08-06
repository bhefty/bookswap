import React, { PureComponent } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import Splash from 'components/Splash'
import splashImg from 'assets/homeSplash.jpg'
import H1 from 'components/H1'
import Button from 'components/Button'
import CenteredSection from './CenteredSection'

import { loginRequest } from 'auth/actions'

export class HomePage extends PureComponent {
  render () {
    return (
      <article>
        <Helmet
          title='Home Page'
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' }
          ]}
        />
        <div>
          <Splash
            title='Bookswap'
            subtitle='Expand your horizons! Quickly and easily trade books with like-minded friends.'
            backgroundImg={splashImg}
          />
          <CenteredSection>
            <H1>Features</H1>
            <p>Show off your book collection online</p>
            <p>View all the books collected by all users</p>
            <p>Request to borrow a book from another user</p>
            <p>Easily manage your books and requests to trade</p>
            <Button
              handleRoute={this.props.login}
              rgb='65, 154, 28'
            >
              Get Started
            </Button>
          </CenteredSection>
        </div>
      </article>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(loginRequest())
})

export default connect(null, mapDispatchToProps)(HomePage)
