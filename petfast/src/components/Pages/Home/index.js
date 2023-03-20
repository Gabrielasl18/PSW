import './index.css';
import blueIcon from '../../../assets/blueIcon.png';
import rabbit from '../../../assets/rabbit.png';

const Home = () => {

return (
    <div className="App">
        <img src={blueIcon} alt="logo" className="img-blueIcon"/>
        <div className="search">
            <input type="text" placeholder='Busque por item ou loja' className="input-search" maxlength="100"/>
        </div>

        <div className="categories">
            <img src={rabbit} alt="coelho" className="img-rabbit"/>
        </div>
    </div>  
    );
}

export default Home;
