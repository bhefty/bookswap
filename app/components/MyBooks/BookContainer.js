import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const BookContainer = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  )
}

export default BookContainer
