import whiteIcon from '../../../assets/whiteIcon.png';
import './style.css';

const Login = () => {

  return (
    <div className="App-login">
      <img src={whiteIcon} alt="logo"/>
      <form className="login">
        <h2 className="name-login">login</h2>
      <div className="acess">
        <label htmlFor="name" className="userName">Usuário</label>
          <input
            id="name"
            type="text"
            name="user"
            placeholder='Usuário'
            />
      </div>
      <div className="acess">
        <label htmlFor="password" className="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Senha"
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
          <p onClick={() => {}}>Esqueceu a senha?</p>
          <p onClick={() => {}}>Cadastre-se</p>
      </div>
      </form>
    </div>  
  );
}

export default Login;
