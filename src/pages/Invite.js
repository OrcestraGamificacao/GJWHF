import BoxInvite from '../components/BoxInvite'
import '../styles/BoxInvite.css'
import BotaoIniciar from '../components/BotaoIniciar'

const Invite = () => {
  return (
    <div className="invite">
      <div className="background-invite">
        <BoxInvite />
        <BotaoIniciar />
      </div>
    </div>
  )
}

export default Invite
