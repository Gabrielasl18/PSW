import './login.css';

const Login = () => {
  return (
    <div className="App">
      <h1>PetFast</h1>
      <form className="login">
        <h2>login</h2>
      <div className="acess">
        <label htmlFor="name">Usuário</label>
          <input
            id="name"
            type="text"
            name="user"
            placeholder='Digite seu usuário'
          />
      </div>
      <div className="acess">
        <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
      </div>
      <div className="save">
        <input
          type="checkbox"
          id="save-user"
          name="save"
          value="save" />
          <label>Lembrar-me</label>
      </div>
      <input className="enviar" type="submit" value="Enviar" />
      <div className="help">
          <p>Esqueceu a senha?</p>
          <p>Cadastre-se</p>
      </div>
      </form>
    </div>  
  );
}

export default Login;
