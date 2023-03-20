import './style.css';
import whiteIcon from '../../../assets/whiteIcon.png';

const UserRegistration = () => {
  return (
    <div className="App">
      <div id='Logo'>
        <img src={whiteIcon} alt="logo"/>
      </div>
        
        <div className='Registration'>
          <h2 className='Title'>Cadastro de usuário</h2>
          <p id='input-description'>Nome completo: </p>
          <div id='heh'><input id='hehe' type="text" placeholder="Nome Completo"/></div>
          <p id='input-description'>CPF: </p>
          <div id='heh'><input id='cpf' type="number" placeholder="CPF"/></div>
          <p id='input-description'>Data de nascimento: </p>
          <div id='heh'><input id='birthday' type="date" placeholder="Data de nascimento"/></div>
          <p id='input-description'>Email: </p>
          <div id='heh'><input id='hehe' type="text" placeholder="email"/></div>
          <p id='input-description'>Senha: </p>
          <div id='heh'><input id='hehe' type="password" placeholder="Senha"/></div>
          <div id='Buttons'>
            <button id='Voltar' type="submit">Voltar</button>
            <button id='Confirmar' type="submit">Confirmar</button>
          </div>
        </div>
    </div>  
  );
}

export default UserRegistration;
