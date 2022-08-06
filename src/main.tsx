import { MantineProvider } from '@mantine/core'
import { NavigationProgress } from '@mantine/nprogress'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <NavigationProgress />
      <App />
    </MantineProvider>
  </React.StrictMode>
)
