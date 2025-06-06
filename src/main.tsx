
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/blog.css'
import { LanguageProvider } from './contexts/LanguageContext.tsx'

// We don't need to redeclare gtag here since it's already in tally.d.ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)
