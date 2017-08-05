import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Splash from 'components/Splash'
import splashImg from 'assets/homeSplash.jpg'
import H1 from 'components/H1'
import CenteredSection from './CenteredSection'

export class HomePage extends PureComponent {
  static propTypes = {

  }

  // When initial state text is not null, submit the form to load translation
  componentDidMount = () => {
    if (this.props.text && this.props.text.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

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
          </CenteredSection>
        </div>
      </article>
    )
  }
}

export default HomePage
