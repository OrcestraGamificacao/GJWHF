import React, {useState} from 'react';
import '../Styles/Login.css';
import { Link, /*useNavigate*/ } from 'react-router-dom';

const Apresentacao = (props) => {

  return (
    <div className='login--page'>
    <div className='login--container'>
        <h2 className='title'>Criar conta</h2>
        <form lassName="register-form" onSubmit={handleSignup}>
        <input 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='login--input' 
        type="email" placeholder='Digite seu E-mail'  
        id="email" email="email" 
        ></input>
        
        <input
         value={usuario}
         onChange={(e) => setUsuario(e.target.value)}
         className='login--input' 
         type="text" placeholder='Nome de usuário' 
         id="usuario" usuario="usuario" 
         ></input>

        <input 
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        className='login--input' 
        type="password" placeholder='Digite sua senha' 
        id="senha" senha="senha" 
        ></input>
        <input className='login--input' type="password" placeholder='Confirme sua senha'></input>
      </form>
        <Link to="/login"><button className='login--button'>Criar conta</button></Link>
          <div className="divider">
            <hr />
              <span> </span>
              <h1>Já tem uma conta?</h1>
              <span> </span>
            <hr />
        </div>
        <Link to="/login">
          <button className="login--button login--new">Entrar</button>
        </Link>
    </div>
  </div>
  )
}

export default Apresentacao;