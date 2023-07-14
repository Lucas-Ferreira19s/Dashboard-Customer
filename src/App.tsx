import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { ThemeProvider } from '@mui/material/styles'
import themeUI from './styles/ThemeUI'

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'

export default function App() {
  return (
    <BrowserRouter>
      <Theme>
        <ThemeProvider theme={themeUI}>
          <AppRoutes />
          <GlobalStyle />
          <Normalize />
        </ThemeProvider>
      </Theme>
    </BrowserRouter>
  )
}
