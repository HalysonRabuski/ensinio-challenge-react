import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Routes from './routes'
import GlobalStyles from './styles/GlobalStyles'
import theme from './styles/theme'
import TopMenu from './components/TopMenu'

// interface AppProps {}

const App: React.FC = () => {
  const { t } = useTranslation()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <TopMenu />
        <Routes />
      </Router>

      <div className="App" />
      <p>{t('title')}</p>
    </ThemeProvider>
  )
}

export default App
