import App from './App'
import theme from 'theme'
import CssBaseline from '@mui/material/CssBaseline'

import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from 'styles/GlobalStyles'
import { StoreProvider } from 'stores'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles />
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ThemeProvider>
)
