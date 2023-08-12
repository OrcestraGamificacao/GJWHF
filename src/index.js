import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TelaQuestionario from './pages/Tela Questionario/TelaQuestionario'
import Premiacao from './pages/Premiacao'
import TelaRoleta from './pages/TelaRoleta'
import Apresentacao2 from './pages/Apresentacao2'
import TelaTchau from './pages/TelaTchau'


import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/BoxApresentacao2',
    element: <Apresentacao2 />
  },
  {
    path: '/TelaRoleta',
    element: <TelaRoleta />
  },
  {
    path: '/Questionario',
    element: <TelaQuestionario />
  },
  {
    path: '/TelaTchau',
    element: <TelaTchau />
  },
  {
    path: '/Premiacao',
    element: <Premiacao />
  },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
