import BoxTelaTchau from "../components/BoxTelaTchau"
import '../styles/BoxTelaTchau.css'
import React, { useEffect , useState} from 'react';
import { useNavigate } from "react-router-dom";

const Confettiful = function(el) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 20;
  this.confettiColors = ['#FFCA05', 'F2E744', '#612368', '#BC88BC', '#372482'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];

  this._setupElements();
  this._renderConfetti();
};

Confettiful.prototype._setupElements = function() {
  const containerEl = document.createElement('div');
  const elPosition = getComputedStyle(this.el).position;

  if (elPosition !== 'relative' && elPosition !== 'absolute') {
    this.el.style.position = 'relative';
  }

  containerEl.classList.add('confetti-container');

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function() {
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = Math.floor(Math.random() * 10) + 10 + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = Math.floor(Math.random() * this.el.offsetWidth) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    confettiEl.removeTimeout = setTimeout(function() {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);

    this.containerEl.appendChild(confettiEl);
  }, 200);
};

const TelaTchau = () => {
  useEffect(() => {
    const containerEl = document.querySelector('.js-container');
    window.confettiful = new Confettiful(containerEl);

    return () => {
      clearInterval(window.confettiful.confettiInterval);
    };
  }, []);

  const navigate = useNavigate();

  const useLocalStorage = (key) => {
    const [data] = useState(localStorage.getItem(key));
  
    return data;
  };

  const pontuacao = useLocalStorage('pontuacao')

  const changeUrl = () => {
    if(pontuacao == 5){
      navigate('/PremioBomDesempenho');
    } else if (pontuacao >= 3 && pontuacao < 5){
      navigate('/PremioMedioDesempenho')
    } else {
      navigate('/PremioParticipacao')
    }
  };

  return (
    <div className="TelaTchau">
      <div className="js-container confetti-container"></div>
      <div className='background-TelaTchau'>
        <BoxTelaTchau />
      </div>
      <h2 className="box-TelaTchau-parabens">Parabéns!</h2>
      <h3 className="box-TelaTchau-title">
        Você completou sua gamificação e descobriu novos protagonismos femininos.<br />
        Agora receba seu selo e procure alguém do Instituto Glória<br /> para te auxiliar no recebimento do seu prêmio.
      </h3>
      <div className="botaoPegarSelo">
        <button class="pulsating-button" onClick={changeUrl}>Pegar selo</button>
      </div>
    </div>
  );
};

export default TelaTchau;