import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { appstore } from './app/store'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appstore}>
      <App />
      <Toaster />
    </Provider>
    
  </StrictMode>,
)
