/**
*
* TradeRequests
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import UL from './UL'
import RequestItem from './RequestItem'
import PendingApprovalItem from './PendingApprovalItem'

const mapRequests = (trades) => {
  return trades.map((trade, idx) => {
    return <RequestItem key={idx} title={trade.title} />
  })
}

const mapPendingApprovals = (trades) => {
  return trades.map((trade, idx) => {
    return <PendingApprovalItem key={idx} title={trade.title} />
  })
}

function TradeRequests (props) {
  const { myApproval, othersApproval } = props
  return (
    <div>
      <h2>Trade Requests</h2>
      <p>Pending my approval:</p>
      { myApproval.length < 1
        ? <p>No pending requests for your approval.</p>
        : <UL>{ mapRequests(myApproval) }</UL>
      }
      <p>Pending other's approval:</p>
      { othersApproval.length < 1
        ? <p>You have no pending trades.</p>
        : <UL>{ mapPendingApprovals(othersApproval) }</UL>
      }
    </div>
  )
}

TradeRequests.propTypes = {
  myApproval: PropTypes.array,
  othersApproval: PropTypes.array
}

export default TradeRequests
