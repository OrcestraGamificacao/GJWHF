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
import Resposta from './pages/Resposta'
import TelaRoleta from './pages/TelaRoleta'
import TemaEscolhido from './pages/TemaEscolhido'
import Apresentacao2 from './pages/Apresentacao2'
import Apresentacao3 from './pages/Apresentacao3'
import ApresentacaoGami from './pages/ExplicacaoGamificacao'

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
    path: '/BoxApresentacao3',
    element: <Apresentacao3 />
  },
  {
    path: '/PerguntaComentario',
    element: <PerguntaComentario />
  },
  {
    path: '/ApresentacaoGami',
    element: <ApresentacaoGami />
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
    path: '/TemaEscolhido',
    element: <TemaEscolhido />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
