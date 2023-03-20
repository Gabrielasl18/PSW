import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const UserRegistration = () => {
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='Registration'>
          <div className="camp">
          <h2 className='Title'>Cadastro de usuário</h2>
          <div id='heh'>
            <label id='input-description'>Nome completo: </label>
            <input id='hehe' type="text" placeholder="Nome Completo"/>
          </div>
          <div id='heh'>
            <label id='input-description' >CPF: </label>
            <input id='cpf' type="number" placeholder="CPF"/>
            </div>
          <div id='heh'>
            <label id='input-description'>Data de nascimento: </label>
            <input id='birthday' type="date" placeholder="Data de nascimento"/>
            </div>
          <div id='heh'>
            <label id='input-description'>Email: </label>
            <input id='hehe' type="text" placeholder="email"/>
            </div>
          <div id='heh'>
            <label id='input-description'>Senha: </label>
            <input id='hehe' type="password" placeholder="Senha"/>
            </div>
            <div id='Buttons'>
            <button id='Voltar' type="submit">Voltar</button>
            <button id='Confirmar' type="submit">Confirmar</button>
            </div>
          </div>
        </div>
    </div>  
  );
}

export default UserRegistration;
