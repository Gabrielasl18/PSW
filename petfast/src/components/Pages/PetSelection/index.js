import React from 'react'
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';
import chacorro from '../../../assets/dog.png'
import calopsita from '../../../assets/bird.png'
import plusButton from '../../../assets/+.png'

const PetSelection = () => {
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='PetSelection'>
          <div className="camp">
          <h2 className='Title'>Meus Pets</h2>
          <div id='petOption'>
            <label id='image-description'>Alisson </label>
            <img src={chacorro} alt="chacorro" className='petImage'/>
          </div>
          <div id='petOption'>
            <label id='image-description'>Joaquim </label>
            <img src={calopsita} alt="chacorro" className='petImage'/>
          </div>
          <div id='petOption'>
            <img src={plusButton} alt="plusButton" className='plusButton'/>
            <label id='image-description'>Adicionar Pet </label>
          </div>
          </div>
        </div>
    </div>  
  );
}


export default PetSelection;