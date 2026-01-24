import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { FiltersProvider } from './context/filters.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
)
