import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from '../App'
import TelaQuestionario from '../pages/Tela Questionario/TelaQuestionario'
import Premiacao from '../pages/Premiacao'
import TelaRoleta from '../pages/TelaRoleta'
import Apresentacao2 from '../pages/Apresentacao2'
import TelaTchau from '../pages/TelaTchau'

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

const RouterApp = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterApp;