import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // rink 말고 import사용
import App from './App.jsx'
// <App /> : 컴포넌트로 재활용 가능
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)
