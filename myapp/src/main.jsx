import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // css for styles
import App from './App.jsx' //file import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
