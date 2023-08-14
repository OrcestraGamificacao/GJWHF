import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/index.css'
import RouterApp from './routes'
import store from './states/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterApp/>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
