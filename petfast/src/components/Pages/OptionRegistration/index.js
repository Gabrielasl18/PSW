import whiteIcon from '../../../assets/whiteIcon.png';
import './style.css';

const OptionRegistration= () => {

return (
    <div className="App-Registration">
        <img src={whiteIcon} alt="logo"/>
        <form className="registration">
        <h2 className="option-registration">Você está se cadastrando como:</h2>
        <div className="Buttons">
        <input className="Consumidor" type="submit" value="Consumidor" />
        <input className="Estabelecimento" type="submit" value="Estabelecimento" />
        </div>
        <p className="Voltar" onClick={() => {}}>Voltar</p>
        </form>
    </div>  
);
}

export default OptionRegistration;
