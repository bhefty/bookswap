import { css } from 'styled-components'

const buttonStyles = css`
  border: 10px;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 1.25em;
  color: #fff;
  background-color: rgb(${props => props.rgb});
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;

  &:active, &:hover, &:visited, &:focus {
    background-color: rgba(${props => props.rgb}, 0.8);
    color: #fff;
  }
`

export default buttonStyles
