import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#C24B5A',
    },
    secondary: {
      main: '#F6F9FC',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

export default theme
