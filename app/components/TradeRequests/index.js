/**
*
* TradeRequests
*
*/

import React from 'react'
// import PropTypes from 'prop-types'

import UL from './UL'
import RequestItem from './RequestItem'

function TradeRequests () {
  return (
    <div>
      <h2>Trade Requests</h2>
      <p>Pending my approval:</p>
      <UL>
        <RequestItem title='Title' />
        <RequestItem title='Title' />
        <RequestItem title='Title' />
      </UL>
      <p>Pending other's approval:</p>
      <UL>
        <RequestItem title='Title' />
        <RequestItem title='Title' />
        <RequestItem title='Title' />
        <RequestItem title='Title' />
        <RequestItem title='Title' />
      </UL>
    </div>
  )
}

// TradeRequests.propTypes = {

// }

export default TradeRequests
