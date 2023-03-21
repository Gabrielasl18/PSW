import blueIcon from '../../../assets/blueIcon.png'; 
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import del from '../../../assets/del.png'

const Carrinho = () => {

    return (
        <div className="App">
            <div className='icon'>
                <img src={blueIcon} alt="logo" className="img-blueIcon"/>
            </div>

            <div className='itens'> 
                <h2 className='textoCarrinho'>Seus itens</h2>
            </div>

            <div className='listaCarrinho'>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Ração para gato <img src={del} alt="excluir" className="img-excluir"/> </li>
                <li class="list-group-item">Osso para cachorro <img src={del} alt="excluir" className="img-excluir"/></li>
                <li class="list-group-item">Petiscos <img src={del} alt="excluir" className="img-excluir"/></li>
                <li class="list-group-item">Serviço banho e tosa cachorro <img src={del} alt="excluir" className="img-excluir"/></li>
                <li class="list-group-item">Remédio coelho <img src={del} alt="excluir" className="img-excluir"/></li>
                </ul>
            </div>

            <div className='endereco'> 
                <h2 className='textoCarrinho'>Endereço</h2>
                <input type="text" placeholder='Insira o seu endereço' className="input-address"/>
            </div>

            <div className='pagamento'> 
                <h2 className='textoCarrinho'>Forma de pagamento</h2>
                <p className='exemplo'>O pagamento será feito na hora da entrega.</p>
            </div>

            <div className='botaoBox'>
                <button className='botaoCancelar'>
                    Cancelar
                </button>
                <button className='botaoConfirmar'>
                    Confirmar
                </button>
            </div>

        </div>  
        );
    }

export default Carrinho;
    