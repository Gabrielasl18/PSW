import whiteIcon from '../../../assets/whiteIcon.png';
import './style.css';

const OptionRegistration= () => {

return (
    <div className="App-Registration">
        <img src={whiteIcon} alt="logo"/>
        <div className="login">
        <form>
            <h2 className="text-registration">Você está se cadastrando como:</h2>
        <div className="clicks">
        <input className="text-input" type="submit" value="Consumidor" />
        <input className="text-input" type="submit" value="Estabelecimento" />
            </div>
            <div className="back">
            <p onClick={() => {}}>Voltar</p>
        </div>
        </form>
            </div>
    </div>  
);
}

export default OptionRegistration;
