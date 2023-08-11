import Premio from "../components/Premio"
import { useState } from "react";

const Premiacao = () => {
    const useSessionStorage = key => {
    const [data] = useState(sessionStorage.getItem(key))

    return data
  }

  const pontuacao = useSessionStorage('pontuacao')

  const selectReward = () => {
    if (Number(pontuacao) === 5) {
      return <Premio nota="alto"/>
    } else if (Number(pontuacao) >= 3 && Number(pontuacao) < 5) {
      return <Premio nota="medio"/>
    } else {
      return <Premio nota="baixo"/>
    }
  }

  return (
    <>
      {selectReward()}
    </>
  )
}

export default Premiacao;
