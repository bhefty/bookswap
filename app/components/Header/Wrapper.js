import styled from 'styled-components'

export default styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1101;

  header {
    height: 48px;

    img {
      padding-bottom: 5px;
      height: 100%;
      margin-right: 1em;
    }

    .pull-right {
      float: right;
    }
  }
`
