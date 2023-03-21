import React from 'react'
import './style.css';
import blueIcon from '../../../assets/blueIcon.png';

const Loja = () => {
  return (
    <div className="App">
      <div id='Logo'>
        <img src={blueIcon} alt="logo"/>
      </div>
        <div className='entireScreen'>
            <div className='capaLoja' style={{ backgroundImage: "url(/capaLoja.png)",
            height: '200px',
            marginTop: '0px !important'
            }}>
                <div className='store'>
                    <p>Gatooooo</p>
                </div>
            </div>
                
        </div>
    </div>
  );
}


export default Loja;