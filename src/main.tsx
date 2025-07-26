import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'                // ← use './App' OR '@/App' if alias works
import './styles/index.css'            // ← must match the real file path/name

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)