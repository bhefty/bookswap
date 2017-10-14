/**
*
* MyBooks
*
*/

import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import BookContainer from './BookContainer'

const BookItem = styled.div`
  height: auto;
  max-width: 200px;
`

function MyBooks () {
  return (
    <div>
      <h1>My Books</h1>
      <form>
        <input type='text' placeholder='e.g. Harry Potter' />
        <button className='tertiary'>Search</button>
      </form>
      <BookContainer>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
        <BookItem className='card'>
          <img src='https://covers.openlibrary.org/w/id/7285863-L.jpg' />
          <div className='section'>
            <p><em>Harry Potter and the Order of the Phoenix</em></p>
            <small>by: J.K. Rowling</small>
          </div>
        </BookItem>
      </BookContainer>
    </div>
  )
}

MyBooks.propTypes = {

}

export default MyBooks
