import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import RouterApp from './routes'
import store from './states/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterApp/>
    </Provider>
  </React.StrictMode>
)
