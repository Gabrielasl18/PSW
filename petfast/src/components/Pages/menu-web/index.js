import './style.css';
import profile from '../../../assets/profile.svg';
import home from '../../../assets/home.svg';
import bag from '../../../assets/bag.svg';
import blueIcon from '../../../assets/blueIcon.png';

const MenuWeb = () => {

  return (
    <div className="app-menu-web">
      <div className="icon-nav">
        <img src={blueIcon} alt="logo" className="img-blueIcon"/>
      </div>

        <nav className = "menu-nav">
          <ul className = "nav-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </nav>
      
    <div className="search-nav">
        <input type="text" placeholder='Busque por item ou loja' className="input-search-nav" maxlength="100"/>
    </div>

    <nav className = "menu-nav">
          <ul className = "nav-ul">
            <li>
              <a href="#"> 
                <img src={bag} alt="carrinho" className="img-bag"/>
              </a>
            </li>
          </ul>
        </nav>

    </div>  
      );
  }
    
    export default MenuWeb;