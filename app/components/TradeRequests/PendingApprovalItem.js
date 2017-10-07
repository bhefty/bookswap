import React from 'react'
// import PropTypes from 'prop-types'

import Close from './Close'

function PendingApprovalItem (props) {
  return (
    <li className='row'>
      <div className='col-sm-9'>{props.title}</div>
      <div className='col-sm-1 col-sm-offset-2'>
        <Close />
      </div>
    </li>
  )
}

// PendingApprovalItem.propTypes = {

// }

export default PendingApprovalItem
