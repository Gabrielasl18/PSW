import './style.css';

const UserRegistration = () => {
  return (
    <div className="App">
      <h1 className='Logo'>PetFast</h1>
        <div className='Registration'>
          <h2 className='Title'>Cadastro de usuário</h2>
          <div id='heh'><input id='hehe' type="text" placeholder="Nome Completo"/></div>
          <div id='heh'><input id='cpf' type="number" placeholder="CPF"/></div>
          <div id='heh'><input id='birthday' type="date" placeholder="Data de nascimento"/></div>
          <div id='heh'><input id='hehe' type="text" placeholder="email"/></div>
          <div id='heh'><input id='hehe' type="password" placeholder="Senha"/></div>
        </div>
    </div>  
  );
}

export default UserRegistration;
