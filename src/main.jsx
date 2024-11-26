import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// importo bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


import App from './App.jsx'

const api_server = "http://localhost:8000"
const end_point = "/posts"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App api_server={api_server} end_point={end_point} />
  </StrictMode>,
)
