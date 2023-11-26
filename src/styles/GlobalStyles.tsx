import { Global, css } from '@emotion/react'

import theme from '../theme'

const customStyles = css`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    background-color: ${theme.palette.secondary.main};
  }
`

const GlobalStyles = () => (
  <>
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
