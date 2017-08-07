import React from 'react'
// import PropTypes from 'prop-types'

import Checkmark from './Checkmark'
import Close from './Close'

function RequestItem (props) {
  return (
    <li className='row'>
      <div className='col-sm-9'>{props.title}</div>
      <div className='col-sm-1'>
        <Checkmark />
      </div>
      <div className='col-sm-1 col-sm-offset-1'>
        <Close />
      </div>
    </li>
  )
}

// RequestItem.propTypes = {

// }

export default RequestItem
