import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const ShopRegistration = () => {
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='Registration'>
          <div className="camp">
          <h2 className='Title'>Cadastro de estabelecimento</h2>
          <div id='nome-fantasia'>
            <label id='input-description'>Nome Fantasia </label>
            <input id='padrao' type="text" placeholder="Nome fantasia é como o público vê o estabelecimento"/>
          </div>
          <div id='CNPJ'>
            <label id='input-description' >CNPJ </label>
            <input id='padrao' type="number" placeholder="Entre com o CNPJ"/>
            </div>
          <div id='nome-representante-legal'>
            <label id='input-description'>Nome Completo </label>
            <input id='padrao' type="text" placeholder="Entre com o nome do representante legal"/>
            </div>
          <div id='CPF'>
            <label id='input-description'>CPF </label>
            <input id='padrao' type="number" placeholder='Entre com o CPF do representante legal'/>
            </div>
          <div id='email'>
            <label id='input-description'>Email </label>
            <input id='padrao' type="text" placeholder="É indicado utilizar um email corporativo"/>
          </div>
            <div id='cep'>
            <label id='input-description' >CEP </label>
            <input id='padrao' type="number" placeholder="Digite o CEP do estabelecimento"/>
            </div>
            <div id='endereço'>
            <label id='input-description'>Endereço </label>
            <input id='padrao' type="text" placeholder="Digite o endereço do estabelecimento"/>
            </div>
            <div id='imagem-estabelecimento'>
            <label id='input-description'>Imagem do estabelecimento </label>
            <input id='default-file' type="file" />
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