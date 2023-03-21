import React from 'react'
import Select from 'react-select'
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const PetRegistration = () => {
    const optionsType = [
        { value: 'Cachorro', label: 'Cachorro' },
        { value: 'Gato', label: 'Gato' },
        { value: 'Coelho', label: 'Coelho' },
        { value: 'Tartaruga', label: 'Tartaruga' },
        { value: 'Passaro', label: 'Passaro' }
      ]
    const optionsSize = [
        { value: 'Grande', label: 'Grande porte' },
        { value: 'Medio', label: 'Medio porte' },
        { value: 'Pequeno', label: 'Pequeno porte' },
      ]
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='Registration'>
          <div className="camp">
          <h2 className='Title'>Cadastro de Pet</h2>
          <div id='heh'>
            <label id='input-description'>Nome completo: </label>
            <input id='hehe' type="text" placeholder="Digite o Nome Completo"/>
          </div>
          <div id='heh'>
            <label id='input-description'>Tipo do Pet: </label>
            <Select id='PetType' options={optionsType} placeholder="Selecione o tipo"/>
          </div>
          <div id='heh'>
            <label id='input-description'>Porte do Pet: </label>
            <Select id='PetType' options={optionsSize} placeholder="Selecione o porte"/>
          </div>
            <div id='heh'>
            <label id='input-description' >Idade: </label>
            <input id='cpf' type="number" placeholder="Digite a idade"/>
            </div>
            <div id='heh'>
            <label id='input-description'>Foto: </label>
            <input id='hehe' type="file" />
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

export default PetRegistration;
