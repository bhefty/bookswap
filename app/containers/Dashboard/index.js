/*
 *
 * Dashboard
 *
 */

import React from 'react'
import TradeRequests from 'components/TradeRequests'
import MyBooks from 'components/MyBooks'

const booksArr = [
  {title: 'Book one', author: 'Bill'},
  {title: 'Book two', author: 'Trese'},
  {title: 'Book three', author: 'Alan'},
  {title: 'Book four', author: 'Lillian'},
  {title: 'Book five', author: 'Mike'}
]

const otherBooks = [
  {title: 'This book', author: 'Hoody'},
  {title: 'That book', author: 'Sneezy'},
  {title: 'Not this one though', author: 'Doc'}
]

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <TradeRequests myApproval={booksArr} othersApproval={otherBooks} />
        </div>
        <div className='col-sm-12 col-md-8'>
          <MyBooks />
        </div>
      </div>
    )
  }
}

export default Dashboard
