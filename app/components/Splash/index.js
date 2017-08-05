/**
*
* Splash
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import Background from './Background'
import TextWrapper from './TextWrapper'

function Splash (props) {
  return (
    <Background className='container' backgroundImg={props.backgroundImg}>
      <div className='row'>
        <TextWrapper className='col-sm-12 col-md-offset-3 col-md-6'>
          <h1>{props.title}</h1>
          <p>{props.subtitle}</p>
        </TextWrapper>
      </div>
    </Background>
  )
}

Splash.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  backgroundImg: PropTypes.string
}

export default Splash
