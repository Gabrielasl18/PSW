import './style.css';
import profile from '../../../assets/profile.svg';
import home from '../../../assets/home.svg';
import bag from '../../../assets/bag.svg';

const Menu = () => {

    return (
        <div className="App">
            <div className="buttons">
                <button className='profileButton'>
                    <img src={profile}/>
                    <text className='profileTitle'>perfil</text>
                </button>

                <button className='homeButton'>
                    <img src={home} alt="inicio" className="img-home"/>
                    <text className='homeTitle'>início</text>
                </button>

                <button className='bagButton'>
                    <img src={bag} alt="carrinho" className="img-bag"/>
                    <text className='bagTitle'>carrinho</text>
                </button>
                </div>
        </div>  
        );
    }
    
    export default Menu;