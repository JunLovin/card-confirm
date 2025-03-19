import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseCard from '@context/UseCard'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(    
  <StrictMode>
    <UseCard>
      <App />
    </UseCard>
  </StrictMode>,
)
