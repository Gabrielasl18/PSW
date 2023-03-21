import './index.css';
import blueIcon from '../../../assets/blueIcon.png';
import rabbit from '../../../assets/rabbit.png';
import dog from '../../../assets/dog.png';
import bird from '../../../assets/bird.png';
import cat from '../../../assets/cat.png';
import commercial from '../../../assets/commercial.png';

const Home = () => {
return (
    <div className="App">
        <img src={blueIcon} alt="logo" className="img-blueIcon"/>
        <div className="search">
            <input type="text" placeholder='Busque por item ou loja' className="input-search" maxlength="100"/>
        </div>

        <div className="categories">
            <img src={rabbit} alt="coelho" className="img-rabbit"/>
            <img src={dog} alt="dog" className="img-dog"/>
            <img src={bird} alt="bird" className="img-bird"/>
            <img src={cat} alt="cat" className="img-cat"/>
        </div>
        <div className="business">
            <img src={commercial} alt="commercial" className="img-commercial"/>
        </div>
    </div>  
    );
}

export default Home;
