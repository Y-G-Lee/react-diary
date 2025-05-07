import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 모든 컴포넌트(화면)에서 Router 기능을 쓸 수 있음 */}
    <HashRouter>
      {/* App.jsx는 최상위 컴포넌트 */}
    <App />
    </HashRouter>
  </StrictMode>
)
