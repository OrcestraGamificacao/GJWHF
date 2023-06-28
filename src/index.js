import React from 'react'
import ReactDOM from 'react-dom/client'
import Invite from './pages/Invite'
import App from './App'

// 1 - configurando o router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PerguntaComentario from './pages/PerguntaComentario'
import PerguntaFullText from './pages/PerguntaFullText'
import TelaQuestionario from './pages/Tela Questionario/TelaQuestionario'
import PremioBomDesempenho from './pages/PremioBomDesempenho'
import PremioParticipacao from './pages/PremioParticipacao'
import PremioMedioDesempenho from './pages/PremioMedioDesempenho'
import Resposta from './pages/Resposta'
import TelaRoleta from './pages/TelaRoleta'
import Apresentacao2 from './pages/Apresentacao2'
import ApresentacaoGami from './pages/ExplicacaoGamificacao'
import TelaTchau from './pages/TelaTchau'


import './styles/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Invite',
    element: <Invite />
  },
  {
    path: '/BoxApresentacao2',
    element: <Apresentacao2 />
  },
  {
    path: '/ApresentacaoGami',
    element: <ApresentacaoGami />
  },
  {
    path: '/PerguntaComentario',
    element: <PerguntaComentario />
  },
  {
    path: '/PerguntaFullText',
    element: <PerguntaFullText />
  },
  {
    path: '/Questionario',
    element: <TelaQuestionario />
  },
  {
    path: '/PremioBomDesempenho',
    element: <PremioBomDesempenho />
  },
  {
    path: '/PremioMedioDesempenho',
    element: <PremioMedioDesempenho />
  },
  {
    path: '/PremioParticipacao',
    element: <PremioParticipacao />
  },
  {
    path: '/Resposta',
    element: <Resposta />
  },
  {
    path: '/TelaRoleta',
    element: <TelaRoleta />
  },
  {
    path: '/TelaTchau',
    element: <TelaTchau />
  },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
