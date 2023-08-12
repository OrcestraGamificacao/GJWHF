import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import RouterApp from './routes'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterApp/>
  </React.StrictMode>
)
