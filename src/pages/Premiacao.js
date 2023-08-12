import { useSelector } from "react-redux";
import Premio from "../components/Premio"

const Premiacao = () => {
   const pontuacao = useSelector((state) => state.session.pontuacao);

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
