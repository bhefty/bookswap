import React from 'react'
// import PropTypes from 'prop-types'

function RequestItem (props) {
  return (
    <li className='row'>
      <div className='col-sm-10'>{props.title}</div>
      <div className='col-sm-1'>v</div>
      <div className='col-sm-1'>x</div>
    </li>
  )
}

// RequestItem.propTypes = {

// }

export default RequestItem
